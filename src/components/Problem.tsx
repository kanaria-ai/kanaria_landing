import Reveal from "./Reveal";

const cases = [
  {
    t: "유산균을 바꿨는데 효과가 있는지 모르겠다",
    d: "기록이 쌓이면 바꾸기 전과 후의 유형 분포와 횟수를 기간별로 비교할 수 있습니다. 느낌이 아니라 숫자로 판단하게 됩니다.",
  },
  {
    t: "배가 자주 불편한데 병원에서 설명할 자료가 없다",
    d: "언제 몇 번, 어떤 유형이었는지 주 단위로 정리돼 있어 진료 때 그대로 보여주면 됩니다. 기억에 의존해 설명하지 않아도 됩니다.",
  },
  {
    t: "따로 사는 부모님 화장실 습관이 걱정된다",
    d: "부모님 댁 비데에 연결해 두면 따로 적지 않아도 기록이 쌓입니다. 앱을 잘 못 다루셔도 비데는 평소대로 쓰기만 하면 됩니다.",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">Why Kanaria</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
          이럴 때 쓰라고
          <br />
          만들었습니다
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          장 상태는 화장실 기록에 가장 먼저 나타납니다. 문제는 그걸 꾸준히 적는 사람이 거의 없다는
          점입니다. 카나리아는 그 기록을 비데가 대신 남기게 해서 필요할 때 꺼내 볼 수 있게 합니다.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {cases.map((c, i) => (
          <Reveal key={c.t} delay={i * 90}>
            <div className="h-full rounded-card border border-line bg-surface p-7">
              <p className="text-xl font-bold leading-snug tracking-[-0.01em]">{c.t}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <div className="mt-14 grid gap-8 rounded-card bg-brand-tint p-8 md:grid-cols-[auto_1fr] md:items-start md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep md:w-40">
            이름에 대해
          </p>
          <div className="max-w-2xl text-[15px] leading-relaxed text-ink-2">
            <p>
              카나리아는 예전 광부들이 갱도에 데리고 들어가던 새입니다. 유해 가스에 사람보다 먼저 반응해서
              위험을 일찍 알려 줬습니다. 몸의 변화도 화장실 기록에 먼저 나타나는 경우가 많아서 이 이름을
              골랐습니다.
            </p>
            <p className="mt-3">
              카나리아헬스가 비데 하드웨어와 앱을 함께 만들고 있습니다. 두 가지를 한 회사에서 만드는 이유는
              기록이 끊기지 않게 하려면 기기와 앱이 처음부터 같이 설계돼야 하기 때문입니다.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
