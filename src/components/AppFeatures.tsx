import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";

const features = [
  {
    tag: "건강 스코어",
    title: "숫자 하나로 읽는\n오늘의 장 상태",
    desc: "브리스톨 대변 척도와 배변 빈도를 바탕으로 0~100점의 건강 스코어를 계산합니다. 1주부터 1년까지 기간별 추이와 유형 분포를 한눈에 볼 수 있습니다.",
    bullets: ["기간별 평균 점수와 정상 비율", "배변 유형 추이 산점도", "유형 분포 도넛 차트"],
    img: "/app/score.png",
    alt: "카나리아 앱 건강 스코어 화면. 86점 게이지와 배변 유형 추이 차트",
  },
  {
    tag: "다이어리",
    title: "기분과 물 섭취\n운동까지 한 페이지에",
    desc: "캘린더에서 날짜를 고르면 그날의 화장실 기록과 함께 기분, 물 섭취, 운동 강도를 기록할 수 있습니다. 장은 생활과 연결되어 있으니까요.",
    bullets: ["기록일이 표시되는 주간/월간 캘린더", "기분 · 물 잔 수 · 운동 강도", "그날의 배변·배뇨 요약"],
    img: "/app/diary.png",
    alt: "카나리아 앱 다이어리 화면. 캘린더와 기분, 물 섭취 기록",
  },
  {
    tag: "직접 기록",
    title: "비데가 없는 곳에서도\n30초면 기록",
    desc: "외출 중이거나 다른 화장실을 썼다면 앱에서 직접 남기세요. 브리스톨 7유형, 색상, 크기, 증상을 고르기만 하면 됩니다. 사진으로 기록하면 분석을 위해 원본은 보관되지만 화면에는 항상 블러로만 보입니다.",
    bullets: ["배변/배뇨 선택과 소요 시간", "브리스톨 7유형 타일", "사진 기록은 항상 블러 처리"],
    img: "/app/checkin.png",
    alt: "카나리아 앱 화장실 기록 화면. 브리스톨 유형 선택 목록",
  },
  {
    tag: "기기 & 가족",
    title: "비데 한 대로\n가족 각자의 기록",
    desc: "기기 탭에서 연결 상태와 신호 세기를 확인하고 세정과 건조도 원격으로 실행합니다. 가족을 같은 기기에 등록하면 기록은 각자의 계정에 따로 저장됩니다.",
    bullets: ["연결 상태와 사용 중인 사람 표시", "세정 · 건조 · 정지 원격 제어", "소유자/구성원 역할, 기기 별칭"],
    img: "/app/device-active.png",
    alt: "카나리아 앱 기기 화면. 연결 상태, 원격 제어 버튼, 내 기기 목록",
  },
];

export default function AppFeatures() {
  return (
    <section id="app" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 pt-24 md:pt-32">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">Kanaria App</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
            쌓인 기록을
            <br />
            한눈에 보는 앱
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl divide-y divide-line px-5">
        {features.map((f, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={f.tag}
              className={`grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28 ${
                reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div>
                  <span className="inline-flex rounded-pill bg-brand-soft px-3 py-1 text-xs font-bold text-ink">
                    {f.tag}
                  </span>
                  <h3 className="mt-5 whitespace-pre-line text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-4xl">
                    {f.title}
                  </h3>
                  <p className="mt-5 text-[17px] leading-relaxed text-muted">{f.desc}</p>
                  <ul className="mt-6 space-y-2.5">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-[15px] text-ink-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-deep" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="relative mx-auto w-[240px] sm:w-[280px]">
                  <div
                    aria-hidden
                    className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-b from-brand-tint to-transparent"
                  />
                  <PhoneMockup src={f.img} alt={f.alt} sizes="(min-width: 640px) 280px, 240px" />
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
