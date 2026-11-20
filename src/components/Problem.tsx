import Reveal from "./Reveal";

const items = [
  { k: "하루", v: "1~2회", d: "성인의 평균 배변 횟수. 매번 그냥 흘려보내는 건강 정보입니다." },
  { k: "브리스톨", v: "7유형", d: "대변 형태를 7단계로 나눈 임상 척도. 카나리아 스코어의 기준입니다." },
  { k: "기록 부담", v: "0분", d: "앉기만 하면 끝. 스마트 비데가 대신 기록합니다." },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">Why Kanaria</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.02em] md:text-5xl">
          매일 놓치고 있던
          <br />
          건강 신호
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          식단을 바꾸거나 유산균을 먹기 시작해도 몸이 실제로 어떻게 반응하는지 알기는 어렵습니다. 화장실
          기록이 가장 정직한 단서인데 꾸준히 적는 사람은 거의 없죠. 카나리아가 그 기록을 대신 남겨
          흐름으로 보여줍니다.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.k} delay={i * 90}>
            <div className="h-full rounded-card border border-line bg-surface p-7">
              <p className="text-sm font-semibold text-muted">{it.k}</p>
              <p className="mt-2 text-4xl font-extrabold tracking-tight">{it.v}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
