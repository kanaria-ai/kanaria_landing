"use server";

import { headers } from "next/headers";

export type WaitlistState = {
  status: "idle" | "ok" | "error";
  message?: string;
  /** 오류 시 입력값을 유지하기 위해 돌려보냅니다. */
  email?: string;
  consent?: boolean;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// 인스턴스 메모리 기준 속도 제한: IP당 10분에 5회.
// 서버리스 환경에서는 인스턴스마다 따로 계산되므로 느슨한 1차 방어선 역할만 합니다.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return true;
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  // 봇이 채우는 숨은 필드. 값이 있으면 조용히 성공한 척 합니다.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "ok", message: "신청이 완료됐어요. 출시 소식을 보내드릴게요." };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const consent = formData.get("consent") === "on";

  const keep = { email: String(formData.get("email") ?? "").trim(), consent };
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { status: "error", message: "이메일 주소를 다시 확인해 주세요.", ...keep };
  }
  if (!consent) {
    return { status: "error", message: "출시 소식 수신에 동의해 주세요.", ...keep };
  }

  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return { status: "error", message: "요청이 너무 많아요. 잠시 후 다시 시도해 주세요.", ...keep };
  }

  // publishable key(sb_publishable_...)는 anon 역할로 동작하며 RLS 정책(insert만 허용)을 따릅니다.
  // 새 키 체계에서는 apikey 헤더에만 넣고 Authorization 헤더는 보내지 않습니다.
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    console.error("[waitlist] SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY not set");
    return { status: "error", message: "지금은 신청을 받을 수 없어요. 잠시 후 다시 시도해 주세요.", ...keep };
  }

  let res: Response;
  try {
    res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        apikey: key,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email, source: "landing" }),
      cache: "no-store",
    });
  } catch (e) {
    console.error("[waitlist] network error", e);
    return { status: "error", message: "연결에 문제가 생겼어요. 잠시 후 다시 시도해 주세요.", ...keep };
  }

  if (res.ok) {
    return { status: "ok", message: "신청이 완료됐어요. 출시 소식을 보내드릴게요." };
  }

  // 23505 = unique_violation (이미 등록된 이메일). 사용자에게는 성공으로 안내합니다.
  const body = await res.text().catch(() => "");
  if (res.status === 409 || body.includes("23505")) {
    return { status: "ok", message: "이미 신청된 이메일이에요. 출시되면 소식을 보내드릴게요." };
  }

  console.error("[waitlist] insert failed", res.status, body.slice(0, 300));
  return { status: "error", message: "저장에 실패했어요. 잠시 후 다시 시도해 주세요.", ...keep };
}
