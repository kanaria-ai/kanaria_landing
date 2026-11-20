import Reveal from "./Reveal";

const features = [
  {
    t: "앉는 순간 자동으로 기록 시작",
    d: "착좌를 감지하면 기록이 시작되고 일어나면 시각과 소요 시간이 자동으로 저장됩니다.",
  },
  {
    t: "가족 중 누구인지 스스로 구분",
    d: "등록된 휴대폰의 블루투스 신호 세기로 가장 가까운 사용자를 판별해 각자의 기록으로 저장합니다.",
  },
  {
    t: "2분이면 끝나는 연결",
    d: "앱에서 기기를 찾고 Wi-Fi만 고르면 됩니다. 전원이 꺼졌다 켜져도 30초 안에 스스로 다시 연결됩니다.",
  },
  {
    t: "앱에서 세정·건조 원격 제어",
    d: "비데 조작부를 만지지 않아도 앱에서 세정과 건조를 바로 실행할 수 있습니다.",
  },
];

const specs = [
  ["연결", "Bluetooth LE + Wi-Fi 2.4GHz"],
  ["사용자 식별", "등록 기기 신호 세기(RSSI) 기반"],
  ["데이터 전송", "TLS 암호화 MQTT"],
  ["가족 공유", "기기 1대, 여러 계정 등록"],
];

export default function SmartBidet() {
  return (
    <section id="bidet" className="scroll-mt-20 bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
        <Reveal>
          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-brand-soft via-brand-tint to-white shadow-card">
              <BidetIllustration />
              <div className="absolute left-5 top-5 rounded-pill bg-ink px-3 py-1.5 text-xs font-semibold text-white">
                카나리아 스마트 비데
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-card bg-white/90 p-4 shadow-card backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-2">연결 상태</p>
                    <p className="mt-0.5 text-base font-bold">Kanaria-Home</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-pill bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    연결됨
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-2">사용 중: 나 · 신호 -58 dBm</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">Smart Bidet</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
              평소처럼 쓰기만 하면
              <br />
              기록은 비데가 알아서
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              버튼을 누르거나 앱을 켤 필요가 없습니다. 비데가 앉은 시각과 소요 시간, 횟수, 누가 썼는지를
              기록해서 앱으로 보냅니다. 세정과 건조 같은 기본 기능은 일반 비데와 같습니다.
            </p>
          </Reveal>
          <ul className="mt-10 space-y-6">
            {features.map((f, i) => (
              <Reveal key={f.t} delay={i * 80}>
                <li className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-ink">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{f.t}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">{f.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 rounded-card border border-line bg-white p-6 text-sm sm:grid-cols-2">
              {specs.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-0.5">
                  <dt className="text-muted-2">{k}</dt>
                  <dd className="font-semibold text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BidetIllustration() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="absolute inset-0 h-full w-full"
      fill="none"
      aria-label="카나리아 스마트 비데 일러스트"
      role="img"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDD23C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FDD23C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="330" rx="150" ry="36" fill="#111" opacity="0.06" />
      {/* tank */}
      <rect x="236" y="120" width="104" height="150" rx="22" fill="#fff" stroke="#111" strokeWidth="3" />
      <rect x="252" y="104" width="72" height="22" rx="8" fill="#fff" stroke="#111" strokeWidth="3" />
      {/* seat lid */}
      <path d="M70 262c0-62 56-108 130-108s130 46 130 108v12H70v-12Z" fill="#fff" stroke="#111" strokeWidth="3" />
      {/* seat */}
      <ellipse cx="200" cy="278" rx="130" ry="42" fill="#fff" stroke="#111" strokeWidth="3" />
      <ellipse cx="200" cy="278" rx="88" ry="26" fill="#FAFAFA" stroke="#111" strokeWidth="3" />
      {/* bowl */}
      <path d="M90 290c6 40 40 70 110 70s104-30 110-70" stroke="#111" strokeWidth="3" strokeLinecap="round" />
      {/* control module */}
      <rect x="300" y="256" width="58" height="28" rx="8" fill="#111" />
      <circle cx="348" cy="270" r="9" fill="url(#glow)" />
      <circle cx="348" cy="270" r="3.5" fill="#FDD23C" />
      {/* signal arcs */}
      <path d="M362 240c10 10 10 50 0 60" stroke="#EABC00" strokeWidth="3" strokeLinecap="round" />
      <path d="M376 228c18 18 18 66 0 84" stroke="#EABC00" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
