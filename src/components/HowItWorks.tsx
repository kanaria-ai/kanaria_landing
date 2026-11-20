import Reveal from "./Reveal";

const auto = [
  "앉은 시각과 일어난 시각",
  "소요 시간",
  "배변과 배뇨 횟수",
  "누가 썼는지 (등록한 휴대폰 신호로 구분)",
];

const manual = [
  "대변 유형. 브리스톨 1~7형 중 하나를 탭",
  "필요하면 사진이나 증상 추가",
  "기분, 물 섭취, 운동은 다이어리에",
];

const steps = [
  {
    t: "처음 한 번 연결",
    d: "앱에서 비데를 찾아 집 Wi-Fi를 등록합니다. 블루투스로 2분 정도 걸립니다.",
  },
  {
    t: "쓸 때마다 자동 전송",
    d: "일어나면 그 기록이 암호화된 채널로 앱에 도착합니다. 버튼을 누를 일이 없습니다.",
  },
  {
    t: "유형을 고르면 스코어 갱신",
    d: "앱 알림에서 유형을 탭하면 건강 스코어와 추이 차트가 바로 바뀝니다.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-brand-tint">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">How it works</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
            비데가 남기는 것과
            <br />
            앱에서 고르는 것
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            비데는 대변 모양을 알지 못합니다. 대신 시간과 횟수처럼 사람이 매번 적기 귀찮은 것을 자동으로
            남깁니다. 모양은 앱에서 한 번 탭하면 됩니다. 이 둘을 합쳐 건강 스코어를 계산합니다.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-card bg-ink p-8 text-white shadow-card">
              <p className="text-sm font-semibold text-brand">비데가 자동으로</p>
              <ul className="mt-5 space-y-3 text-[17px] font-medium">
                {auto.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-card bg-white p-8 shadow-card">
              <p className="text-sm font-semibold text-brand-deep">앱에서 직접</p>
              <ul className="mt-5 space-y-3 text-[17px] font-medium text-ink">
                {manual.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-deep" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                정상 범위는 브리스톨 3형과 4형입니다. 이 비율이 높고 배변이 규칙적일수록 점수가 올라갑니다.
              </p>
            </div>
          </Reveal>
        </div>

        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={120 + i * 80}>
              <li className="h-full rounded-card border border-brand-deep/15 bg-white/70 p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-ink">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
