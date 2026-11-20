import Reveal from "./Reveal";

const cards = [
  {
    t: "사진은 언제나 블러로",
    d: "사진 기록을 쓰더라도 화면에는 항상 흐리게만 표시됩니다. 원본은 본인 계정의 비공개 저장소에만 보관됩니다.",
  },
  {
    t: "전송 구간 암호화",
    d: "비데와 서버 사이의 모든 기록은 TLS로 암호화된 MQTT 채널을 통해 오갑니다. 기기별 인증으로 다른 기기의 데이터와 섞이지 않습니다.",
  },
  {
    t: "내 기록은 내 것",
    d: "가족이 같은 비데를 써도 기록은 계정별로 분리됩니다. 계정을 지우면 기록과 사진도 함께 삭제됩니다.",
  },
];

export default function Trust() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">Privacy</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
          민감한 기록인 만큼
          <br />
          보관도 조심스럽게
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.t} delay={i * 90}>
            <div className="h-full rounded-card border border-line bg-white p-7 shadow-card">
              <ShieldIcon />
              <h3 className="mt-5 text-lg font-bold">{c.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <div className="mt-10 rounded-card border border-brand-deep/30 bg-brand-tint p-6 text-[15px] leading-relaxed text-ink-2">
          <strong className="font-bold text-ink">의료 면책 고지.</strong> 카나리아 스마트 비데와 카나리아 앱은
          의료기기가 아니며, 정보 제공과 건강 관리 목적에 한정됩니다. 건강 스코어와 분석 결과는 생활 습관
          참고용 지표로 의학적 진단, 치료, 예방을 대체하지 않습니다. 건강에 이상이 의심되면 반드시 의사 등
          전문가와 상담하세요.
        </div>
      </Reveal>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M16 3l10 4v8c0 7-4.5 12-10 14C10.5 27 6 22 6 15V7l10-4Z" fill="#FFF4C2" stroke="#EABC00" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M11.5 16l3 3 6-6.5" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
