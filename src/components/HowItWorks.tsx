import Reveal from "./Reveal";
import RecordDemo from "./RecordDemo";

const moments = [
  {
    when: "오전 7:42",
    t: "평소처럼 앉습니다",
    d: "비데가 착좌를 감지하고 시간을 재기 시작합니다. 누를 버튼은 없습니다.",
  },
  {
    when: "오전 7:48",
    t: "일어납니다",
    d: "6분이 기록됩니다. 그동안 광학 센서가 만든 데이터는 암호화된 채널로 서버에 전송됩니다. 누가 썼는지는 가까이 있는 휴대폰 신호로 구분합니다.",
  },
  {
    when: "잠시 뒤",
    t: "AI가 데이터를 분석합니다",
    d: "대변의 모양과 상태를 분석해 유형을 분류하고 건강 스코어에 반영합니다. 앱을 열면 결과가 이미 들어와 있습니다.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-brand-tint">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-[1fr_0.95fr] md:gap-16 md:py-32">
        <div>
          <Reveal>
            <p className="text-sm font-semibold text-brand-deep">
              어떻게 작동하나요
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
              화장실 사용이
              <br />
              기록으로 남기까지
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              앉았다 일어나기만 하면 됩니다. 비데가 시간을 재는 동안 광학
              센서가 데이터를 만들고 AI가 그 데이터로 대변의 모양과 상태를
              분석합니다.
              직접 적거나 고를 것은 없습니다.
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
                    <p className="text-sm font-semibold text-brand-deep">
                      {m.when}
                    </p>
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
      </div>
    </section>
  );
}
