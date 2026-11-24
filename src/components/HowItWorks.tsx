import Reveal from "./Reveal";
import RecordDemo from "./RecordDemo";

const moments = [
  {
    when: "오전 7:42",
    t: "평소처럼 앉습니다",
    d: "비데가 착좌를 감지하고 기록을 시작합니다.",
  },
  {
    when: "오전 7:48",
    t: "일어납니다",
    d: "스마트 비데가 수집한 데이터가 안전하게 서버에 전송됩니다.",
  },
  {
    when: "잠시 뒤",
    t: "AI가 데이터를 분석합니다",
    d: "대변의 모양과 상태를 분석해 유형을 분류하고 건강 스코어에 반영합니다. 앱을 열면 결과가 이미 들어와 있습니다.",
  },
];

// 가까운 스마트폰일수록 신호가 강하다는 점을 보여주는 예시 값
const phones = [
  { who: "나", dbm: -52, bar: "88%", near: true },
  { who: "엄마", dbm: -78, bar: "42%", near: false },
  { who: "아빠", dbm: -85, bar: "26%", near: false },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-brand-tint">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-[1fr_0.95fr] md:gap-16 md:py-32">
        <div>
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
              화장실 사용이
              <br />
              기록으로 남기까지
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              화장실을 그대로 사용하세요. <br />
              스마트 비데의 AI가 대변의 모양과 상태를 분석합니다.
            </p>
          </Reveal>

          <ol className="mt-12">
            {moments.map((m, i) => (
              <li
                key={m.t}
                className={`relative ${i < moments.length - 1 ? "pb-10" : ""}`}
              >
                {i < moments.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[7px] top-5 h-full w-px bg-brand-deep/40"
                  />
                )}
                <Reveal delay={i * 90} className="relative flex gap-5">
                  <span
                    aria-hidden
                    className="relative mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-[3px] border-brand-deep bg-white"
                  />
                  <div>
                    <p className="text-sm font-semibold text-muted">{m.when}</p>
                    <h3 className="mt-1 text-xl font-bold">{m.t}</h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-2">
                      {m.d}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={120}>
          <RecordDemo />
        </Reveal>

        <Reveal className="md:col-span-2">
          <div className="grid items-center gap-8 rounded-[2rem] bg-white p-6 shadow-card sm:p-8 md:grid-cols-2 md:gap-14 md:p-10">
            <div>
              <h3 className="text-2xl font-extrabold leading-snug tracking-[-0.02em] md:text-3xl">
                가족이 같이 써도
                <br />
                기록은 각자 계정으로
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-2">
                등록된 스마트폰 중 신호가 가장 센 사람의 기록으로 저장합니다.
              </p>
            </div>
            <div>
              <ul className="space-y-3.5">
                {phones.map((p) => (
                  <li key={p.who} className="flex items-center gap-3 text-sm">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        p.near ? "bg-ink text-white" : "bg-surface text-ink-2"
                      }`}
                    >
                      {p.who}
                    </span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
                      <span
                        className={`block h-full rounded-full ${p.near ? "bg-brand-deep" : "bg-line"}`}
                        style={{ width: p.bar }}
                      />
                    </span>
                    <span
                      className={`w-16 shrink-0 text-right tabular-nums ${p.near ? "font-bold" : "text-muted"}`}
                    >
                      {p.dbm} dBm
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-brand-tint px-4 py-3 text-sm font-semibold">
                이번 기록은 ‘나’의 계정으로 저장됩니다
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
