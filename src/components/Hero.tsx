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
            <span className="h-1.5 w-1.5 rounded-full bg-brand-deep" />
            2027년 상반기 출시 예정 · 스마트 비데 + 앱
          </p>
          <h1 className="text-[2.5rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink sm:text-5xl md:text-[3.6rem]">
            매일 쓰는 비데가
            <br />
            장 건강을 기록합니다
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            비데가 언제 얼마나 썼는지 자동으로 남기고, 앱에서 대변 유형을 한 번 탭하면
            <strong className="font-semibold text-ink"> 건강 스코어</strong>가 계산됩니다. 수첩에 적거나
            시간을 외울 필요가 없습니다.
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
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {["시간과 횟수는 비데가 자동 기록", "유형은 앱에서 한 번 탭", "가족 구성원 자동 구분"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <CheckIcon />
                {t}
              </li>
            ))}
          </ul>
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
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-2">이번 주</p>
            <p className="mt-1 text-2xl font-extrabold tracking-tight">7회 기록</p>
            <p className="mt-1 text-xs font-medium text-ink-2">정상 유형 86% · 평균 6분</p>
            <p className="mt-3 border-t border-line pt-3 text-[11px] leading-snug text-muted">
              유형은 앱에서 탭해서 더했어요
            </p>
          </div>

          <div className="float-slower absolute -right-2 bottom-16 hidden w-[210px] rounded-card bg-ink p-4 text-white shadow-float sm:block md:-right-8">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">방금 기록됨</p>
            <p className="mt-1 text-lg font-bold">오후 3:19 · 6분</p>
            <p className="mt-1 text-xs text-white/70">스마트 비데가 자동으로 저장했어요</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-pill bg-brand px-2.5 py-1 text-[11px] font-semibold text-ink">배변 1회</span>
              <span className="rounded-pill bg-white/15 px-2.5 py-1 text-[11px] font-semibold">배뇨 2회</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="8" fill="#FDD23C" />
      <path d="M4.5 8.2l2.3 2.3 4.7-4.8" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
