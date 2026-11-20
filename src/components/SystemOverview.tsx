import Reveal from "./Reveal";

const parts = [
  {
    n: "01",
    t: "카나리아 스마트 비데",
    d: "앉는 순간부터 일어날 때까지를 감지해 기록합니다. 가족 중 누가 썼는지도 알아서 구분합니다.",
    icon: <BidetIcon />,
  },
  {
    n: "02",
    t: "안전한 연결",
    d: "처음 한 번만 블루투스로 연결해 Wi-Fi를 등록하면 이후 기록은 암호화된 채널로 자동 전송됩니다.",
    icon: <LinkIcon />,
  },
  {
    n: "03",
    t: "카나리아 앱",
    d: "건강 스코어와 배변 유형 추이는 물론 다이어리와 원격 제어까지 한 앱에서 확인합니다.",
    icon: <AppIcon />,
  },
];

export default function SystemOverview() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">The System</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
            비데에서 앱까지
            <br />
            하나로 이어지는 기록
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {parts.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-card border border-white/10 bg-white/[0.04] p-7 transition-colors hover:bg-white/[0.07]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-brand">{p.n}</span>
                  <span className="text-white/80">{p.icon}</span>
                </div>
                <h3 className="mt-8 text-xl font-bold">{p.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BidetIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M5 15.5h18c0 4.1-4 7.5-9 7.5s-9-3.4-9-7.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 15.5V7a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="18.5" cy="8.5" r="1.5" fill="#FDD23C" />
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M11 17l6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13.5 8.5l2-2a4.2 4.2 0 0 1 6 6l-2 2M14.5 19.5l-2 2a4.2 4.2 0 0 1-6-6l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function AppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="8" y="3" width="12" height="22" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 21h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11 13a3 3 0 0 1 6 0" stroke="#FDD23C" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
