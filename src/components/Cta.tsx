import Image from "next/image";
import Reveal from "./Reveal";
import WaitlistForm from "./WaitlistForm";

export default function Cta() {
  return (
    <section
      id="download"
      className="scroll-mt-20 mx-auto max-w-6xl px-5 py-24 md:py-32"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-8 py-16 text-center md:px-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/30 blur-3xl"
          />
          <Image
            src="/brand/logo.svg"
            alt=""
            width={44}
            height={50}
            className="mx-auto brightness-0"
          />
          {/* <span className="mt-6 inline-flex rounded-pill bg-ink/10 px-3.5 py-1.5 text-xs font-semibold text-ink">
            2027년 상반기 출시 예정
          </span> */}
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] text-ink md:text-5xl">
            장 건강 기록은
            <br />
            이제 카나리아에 맡기세요
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-ink/70">
            이메일을 남겨 두면 출시 소식과 앱 다운로드 안내를 보내 드릴게요.
          </p>
          <WaitlistForm />
          <p className="mt-6 text-sm text-ink/60">App Store · Google Play</p>
        </div>
      </Reveal>
    </section>
  );
}
