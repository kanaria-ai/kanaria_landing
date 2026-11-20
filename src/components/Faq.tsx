import Reveal from "./Reveal";

const faqs = [
  {
    q: "스마트 비데 없이 앱만 써도 되나요?",
    a: "네. 앱에서 직접 기록 기능으로 배변·배뇨를 남기면 건강 스코어, 다이어리, 추이 차트를 모두 쓸 수 있습니다. 스마트 비데를 연결하면 이 과정이 자동으로 바뀝니다.",
  },
  {
    q: "가족이 같이 써도 기록이 섞이지 않나요?",
    a: "각자의 휴대폰을 같은 기기에 등록해 두면 사용할 때 가장 가까운 휴대폰의 신호 세기로 사용자를 구분합니다. 기록은 각 계정으로 따로 저장됩니다.",
  },
  {
    q: "건강 스코어는 어떻게 계산되나요?",
    a: "기록된 배변의 브리스톨 유형(1~7형)과 빈도를 바탕으로 산출되는 생활 지표입니다. 제3·4형이 정상 범위에 해당하며, 의학적 진단이 아닌 참고용 점수입니다.",
  },
  {
    q: "연결은 어렵지 않나요?",
    a: "앱에서 '새 기기 연결하기'를 누른 뒤 집 Wi-Fi를 고르고 비밀번호만 넣으면 됩니다. 보통 2분이면 끝나고 이후에는 전원이 꺼졌다 켜져도 스스로 다시 연결됩니다.",
  },
  {
    q: "사진으로 기록하면 어디에 저장되나요?",
    a: "본인 계정에만 접근 권한이 있는 비공개 저장소에 저장됩니다. 앱 화면에서는 항상 블러 처리된 썸네일로만 보이며, 기록당 한 장만 저장됩니다.",
  },
  {
    q: "언제 출시되나요?",
    a: "카나리아 스마트 비데와 카나리아 앱은 2027년 상반기 출시 예정입니다. 앱은 iOS와 Android를 지원하며 스마트 비데는 Bluetooth LE와 2.4GHz Wi-Fi 환경에서 동작합니다.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">FAQ</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
            자주 묻는
            <br />
            질문
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            더 궁금한 점은 앱의 문의하기 메뉴로 보내주세요.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="divide-y divide-line rounded-card border border-line bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="faq group px-6">
                <summary className="flex items-center justify-between gap-6 py-5 text-left text-[17px] font-semibold">
                  {f.q}
                  <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-xl leading-none text-ink-2">
                    +
                  </span>
                </summary>
                <p className="pb-6 text-[15px] leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
