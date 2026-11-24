"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";

const initial: WaitlistState = { status: "idle" };

export default function WaitlistForm() {
  const [state, action, pending] = useActionState(joinWaitlist, initial);

  if (state.status === "ok") {
    return (
      <div
        role="status"
        className="mx-auto mt-9 max-w-md rounded-2xl bg-ink px-6 py-5 text-white"
      >
        <p className="text-base font-semibold">{state.message}</p>
        <p className="mt-1 text-sm text-white/60">출시에 맞춰 알려드릴게요.</p>
      </div>
    );
  }

  return (
    <form action={action} className="mx-auto mt-9 max-w-md text-left">
      {/* 봇 방지용 숨은 필드. 사람은 보지도 채우지도 않습니다. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          회사명
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label htmlFor="waitlist-email" className="sr-only">
        이메일 주소
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="waitlist-email"
          type="email"
          name="email"
          required
          inputMode="email"
          autoComplete="email"
          placeholder="이메일 주소"
          defaultValue={state.email ?? ""}
          className="h-13 flex-1 rounded-pill border border-ink/10 bg-white px-5 text-base text-ink outline-none placeholder:text-muted-2 focus:border-ink/40"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-13 items-center justify-center rounded-pill bg-ink px-7 text-base font-semibold text-white transition-colors hover:bg-ink-2 disabled:opacity-60"
        >
          {pending ? "신청 중…" : "출시 알림 받기"}
        </button>
      </div>

      <label className="mt-4 flex items-start gap-2.5 text-sm text-ink/70">
        <input
          type="checkbox"
          name="consent"
          required
          defaultChecked={state.consent ?? false}
          className="mt-0.5 h-4 w-4 shrink-0 accent-ink"
        />
        <span>
          출시 소식과 스마트 비데 안내 메일 수신에 동의합니다. 이메일은 출시 안내 목적으로만 사용하고
          언제든 수신을 거부할 수 있습니다.
        </span>
      </label>

      {state.status === "error" && (
        <p role="alert" className="mt-3 text-sm font-medium text-red-700">
          {state.message}
        </p>
      )}
    </form>
  );
}
