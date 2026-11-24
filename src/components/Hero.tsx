import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-tint">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-brand/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-brand-soft blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-pill border border-brand-deep/30 bg-white/70 px-3.5 py-1.5 text-[13px] font-semibold text-ink-2">
            {/* <span className="h-1.5 w-1.5 rounded-full bg-brand-deep" /> */}
            2027년 상반기 카나리아 스마트 비데 · 앱 출시 예정
          </p>
          <h1 className="text-[2.5rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink sm:text-5xl md:text-[3.6rem]">
            매일 쓰는 화장실에서
            <br />장 건강을 기록하세요
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            화장실을 사용하면 스마트 비데가 자동으로 기록을 남겨요. <br />
            AI가 분석한
            <strong className="font-semibold text-ink"> 건강 스코어</strong>를
            확인해보세요.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="inline-flex h-13 items-center justify-center rounded-pill bg-ink px-7 text-base font-semibold text-white shadow-float transition-transform hover:-translate-y-0.5"
            >
              출시 알림 받기
            </a>
            <a
              href="#how"
              className="inline-flex h-13 items-center justify-center rounded-pill border border-ink/15 bg-white px-7 text-base font-semibold text-ink transition-colors hover:border-ink/40"
            >
              작동 원리 보기
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[340px] md:max-w-none">
          <div className="relative mx-auto w-[260px] sm:w-[300px] md:w-[320px]">
            <PhoneMockup
              src="/app/home.png"
              alt="카나리아 앱 홈 화면. 최근 활동과 건강 스코어 86점, 오늘의 기록이 보인다"
              priority
            />
          </div>

          <div className="float-slow absolute -left-2 top-10 hidden w-[200px] rounded-card bg-white p-4 shadow-float sm:block md:-left-10">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-2">
              이번 주
            </p>
            <p className="mt-1 text-2xl font-extrabold tracking-tight">
              7회 기록
            </p>
            <p className="mt-1 text-xs font-medium text-ink-2">
              정상 유형 86% · 평균 6분
            </p>
          </div>

          <div className="float-slower absolute -right-2 bottom-16 hidden w-[210px] rounded-card bg-ink p-4 text-white shadow-float sm:block md:-right-8">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
              방금 기록됨
            </p>
            <p className="mt-1 text-lg font-bold">오후 3:19 · 6분</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-pill bg-brand px-2.5 py-1 text-[11px] font-semibold text-ink">
                배변 1회
              </span>
              <span className="rounded-pill bg-white/15 px-2.5 py-1 text-[11px] font-semibold">
                배뇨 2회
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
