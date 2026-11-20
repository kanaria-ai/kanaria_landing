import Reveal from "./Reveal";

const steps = [
  { t: "평소처럼 앉기", d: "버튼이나 앱 없이 평소처럼 화장실을 쓰면 됩니다." },
  { t: "비데가 감지", d: "착좌 센서가 세션을 열고 시간을 재기 시작합니다." },
  { t: "사용자 구분", d: "등록된 휴대폰 신호로 가장 가까운 가족 구성원을 찾습니다." },
  { t: "기록 전송", d: "일어나면 세션이 닫히고 암호화된 채널로 앱에 도착합니다." },
  { t: "스코어 갱신", d: "홈 화면의 건강 스코어와 다이어리, 추이 차트가 바로 바뀝니다." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-brand-tint">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">How it works</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
            화장실 한 번 다녀오면
            <br />
            알아서 끝나는 다섯 단계
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <li className="relative h-full rounded-card bg-white p-6 shadow-card">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.d}</p>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-9 hidden h-0.5 w-6 bg-brand-deep/40 md:block"
                  />
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
