import Image from "next/image";
import Reveal from "./Reveal";

const cases = [
  {
    q: "유산균을 바꿨는데 효과가 있는지 모르겠어요",
    a: "기록이 쌓이면 바꾸기 전과 후의 유형 분포와 횟수를 기간별로 비교할 수 있습니다.",
    shift: "",
  },
  {
    q: "배가 자주 불편한데 병원에서 설명할 자료가 없어요",
    a: "언제 몇 번, 어떤 유형이었는지 주 단위로 정리돼 있어 진료 때 그대로 보여주면 됩니다.",
    shift: "md:mt-12",
  },
  {
    q: "화장실을 가족이 같이 써서 내 기록만 따로 남기기 어려워요",
    a: "비데 한 대를 같이 써도 휴대폰 신호로 사람을 구분합니다. 기록은 각자 계정에 따로 저장되고 서로 볼 수 없습니다.",
    shift: "md:mt-24",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <p className="text-sm font-semibold text-brand-deep">
          누구를 위한 제품인가요
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
          나의 장 건강을
          <br />
          숫자로 보고 싶은 분들
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          장 건강 상태는 화장실에서 제일 먼저 알 수 있습니다.
          <br />
          카나리아 스마트 비데가 건강 기록을 자동으로 남기고 점수를 보여 줍니다.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
        {cases.map((c, i) => (
          <Reveal key={c.q} delay={i * 110} className={c.shift}>
            <figure>
              <blockquote className="rounded-[1.75rem] rounded-bl-md bg-ink px-6 py-5 text-xl font-bold leading-snug tracking-[-0.01em] text-white">
                “{c.q}”
              </blockquote>
              <figcaption className="mt-4 flex gap-3 pl-1">
                <Image
                  src="/brand/logo.svg"
                  alt=""
                  width={20}
                  height={23}
                  className="mt-0.5 shrink-0 self-start"
                />
                <p className="text-[15px] leading-relaxed text-ink-2">{c.a}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-10 md:flex-row md:gap-14">
          <p className="shrink-0 text-xl font-bold md:w-56">
            왜 카나리아인가요
          </p>
          <div className="max-w-2xl text-[16px] leading-relaxed text-ink-2">
            <p>
              카나리아는 예전 광부들이 갱도에 데리고 들어가던 새입니다. 유해
              가스에 사람보다 먼저 반응해서 위험을 일찍 알려 줬습니다. 카나리아
              스마트 비데도 우리 몸의 변화를 화장실에서 가장 먼저 감지합니다.
            </p>
            <p className="mt-3">
              카나리아헬스는 스마트 비데와 앱을 함께 만듭니다. 기기와 앱을
              처음부터 같이 설계하여 정확한 분석과 상세한 기록을 함께 할 수
              있습니다.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
