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
    d: "6분이 기록됩니다. 가까이 있는 휴대폰 신호로 누가 썼는지 구분해서 그 사람 계정으로 보냅니다.",
  },
  {
    when: "출근길 지하철에서",
    t: "앱에서 유형을 고릅니다",
    d: "아침 기록을 열어 브리스톨 유형을 한 번 탭합니다. 건강 스코어와 추이 차트에 바로 반영됩니다.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-brand-tint">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-[1fr_0.95fr] md:gap-16 md:py-32">
        <div>
          <Reveal>
            <p className="text-sm font-semibold text-brand-deep">기록되는 과정</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
              화장실 한 번이
              <br />
              기록으로 남기까지
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              비데는 대변 모양을 알지 못합니다. 대신 매번 적기 귀찮은 시간과 횟수를 자동으로 남깁니다.
              모양은 앱에서 한 번 탭하면 됩니다.
            </p>
          </Reveal>

          <ol className="mt-12">
            {moments.map((m, i) => (
              <li key={m.t} className={`relative ${i < moments.length - 1 ? "pb-10" : ""}`}>
                {i < moments.length - 1 && (
                  <span aria-hidden className="absolute left-[7px] top-5 h-full w-px bg-brand-deep/40" />
                )}
                <Reveal delay={i * 90} className="relative flex gap-5">
                  <span
                    aria-hidden
                    className="relative mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-[3px] border-brand-deep bg-white"
                  />
                  <div>
                    <p className="text-sm font-semibold text-brand-deep">{m.when}</p>
                    <h3 className="mt-1 text-xl font-bold">{m.t}</h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-2">{m.d}</p>
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
