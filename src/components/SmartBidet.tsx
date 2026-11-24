import Reveal from "./Reveal";

const features = [
  {
    t: "광학 센서와 AI로 대변 분석",
    d: "대변의 모양과 상태를 분석한 결과가 앱에 바로 기록됩니다.",
  },
  {
    t: "앉는 순간 자동으로 기록 시작",
    d: "일어나면 기록이 끝납니다. 누를 버튼은 없습니다.",
  },
  {
    t: "2분이면 끝나는 연결",
    d: "앱에서 기기를 찾고 Wi-Fi만 고르면 됩니다. 전원이 꺼졌다 켜져도 30초 안에 스스로 다시 연결됩니다.",
  },
  {
    t: "앱에서 세정·건조 원격 제어",
    d: "비데 조작부를 만지지 않아도 됩니다.",
  },
];

const specs = [
  ["분석", "광학 센서 + AI 분석"],
  ["연결", "Bluetooth LE + Wi-Fi 2.4GHz"],
  ["사용자 식별", "등록 기기 신호 세기(RSSI) 기반"],
  ["데이터 전송", "TLS 암호화 MQTT"],
  ["가족 공유", "기기 1대, 여러 계정 등록"],
];

// 가까운 휴대폰일수록 신호가 강하다는 점을 보여주는 예시 값
const phones = [
  { who: "나", dbm: -52, bar: "88%", near: true },
  { who: "엄마", dbm: -78, bar: "42%", near: false },
  { who: "아빠", dbm: -85, bar: "26%", near: false },
];

export default function SmartBidet() {
  return (
    <section id="bidet" className="scroll-mt-20 bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-[0.85fr_1.15fr] md:py-32">
        <Reveal>
          <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[2rem] bg-white shadow-card">
            <div className="p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/app/bidet-icon.svg" alt="" width={26} height={26} />
              </span>
              <p className="mt-5 text-lg font-bold">누가 앉았는지 구분하는 방법</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                등록된 휴대폰 중 신호가 가장 센 사람의 기록으로 저장합니다.
              </p>
              <ul className="mt-5 space-y-3.5">
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
                    <span className={`w-16 shrink-0 text-right tabular-nums ${p.near ? "font-bold" : "text-muted"}`}>
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

        <div>
          <Reveal>
            <p className="text-sm font-semibold text-brand-deep">카나리아 스마트 비데</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
              평소처럼 쓰기만 하면
              <br />
              기록은 비데가 알아서
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              비데가 대변 상태를 분석하고 누가 썼는지 구분해서
              앱으로 보냅니다. 세정과 건조 같은 기본 기능은 일반 비데와 같습니다.
            </p>
          </Reveal>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {features.map((f, i) => (
              <li key={f.t} className="py-5">
                <Reveal delay={i * 80}>
                  <h3 className="text-lg font-bold">{f.t}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{f.d}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={200}>
            <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
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
