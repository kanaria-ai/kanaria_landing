import type { ReactNode } from "react";
import Reveal from "./Reveal";

const stroke = { stroke: "#111", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const rows: { t: string; d: string; icon: ReactNode }[] = [
  {
    t: "암호화해서 보관하고 폐기",
    d: "분석에 쓰인 데이터는 보관 기간이 지나거나 계정을 삭제하면 모두 폐기합니다.",
    icon: (
      <>
        <path d="M3 3l18 18" {...stroke} />
        <path d="M10.6 6.2A9.7 9.7 0 0 1 12 6c5 0 8.5 4 9.5 6a12 12 0 0 1-2.6 3.4M6.3 7.8A12 12 0 0 0 2.5 12c1 2 4.5 6 9.5 6 1.3 0 2.5-.3 3.6-.7" {...stroke} />
      </>
    ),
  },
  {
    t: "전송 구간 암호화",
    d: "비데와 서버 사이의 모든 데이터는 TLS로 암호화된 채널을 통해 오갑니다. 기기별 인증으로 다른 기기의 데이터와 섞이지 않습니다.",
    icon: (
      <>
        <rect x="5" y="11" width="14" height="9" rx="2.5" {...stroke} />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" {...stroke} />
      </>
    ),
  },
  {
    t: "내 기록은 내 것",
    d: "가족이 같은 비데를 써도 서로의 기록은 볼 수 없습니다.",
    icon: (
      <>
        <circle cx="12" cy="8.5" r="3.5" {...stroke} />
        <path d="M5 20c.8-3.5 3.6-5.5 7-5.5s6.2 2 7 5.5" {...stroke} />
      </>
    ),
  },
];

export default function Trust() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <p className="text-sm font-semibold text-brand-deep">개인정보</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
            남에게 보이기 싫은
            <br />
            기록이니까요
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            처음부터 본인만 볼 수 있게 만들었습니다.
          </p>
        </Reveal>
        <ul className="divide-y divide-line border-y border-line">
          {rows.map((r, i) => (
            <li key={r.t} className="py-7">
              <Reveal delay={i * 90} className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    {r.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg font-bold">{r.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{r.d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <Reveal delay={200}>
        <div className="mt-14 rounded-card bg-surface p-6 text-sm leading-relaxed text-muted">
          <strong className="font-bold text-ink-2">의료 면책 고지.</strong> 카나리아 스마트 비데와 카나리아 앱은
          의료기기가 아니며, 정보 제공과 건강 관리 목적에 한정됩니다. 건강 스코어와 분석 결과는 생활 습관
          참고용 지표로 의학적 진단, 치료, 예방을 대체하지 않습니다. 건강에 이상이 의심되면 반드시 의사 등
          전문가와 상담하세요.
        </div>
      </Reveal>
    </section>
  );
}
