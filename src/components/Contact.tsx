import Reveal from "./Reveal";

const EMAIL = "dev@kanaria.ai";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
                궁금한 점은 이메일로
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                제품 문의와 제휴 제안, 언론 관련 연락 모두 아래 주소로 보내 주세요.
              </p>
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex h-14 items-center gap-3 self-start rounded-pill bg-ink px-7 text-lg font-semibold text-white shadow-float transition-transform hover:-translate-y-0.5 md:self-auto"
            >
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
