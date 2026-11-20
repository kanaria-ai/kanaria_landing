type Props = {
  score: number;
  size?: number;
  label?: string;
};

/** 반원 게이지. 앱의 HealthScoreArc와 같은 형태 */
export default function ScoreArc({ score, size = 160, label = "점" }: Props) {
  const stroke = Math.round(size * 0.085);
  const r = (size - stroke) / 2;
  const cy = size / 2;
  const half = Math.PI * r;
  const pct = Math.max(0, Math.min(100, score)) / 100;

  return (
    <div className="relative" style={{ width: size, height: size / 2 + stroke }}>
      <svg
        width={size}
        height={size / 2 + stroke}
        viewBox={`0 0 ${size} ${size / 2 + stroke}`}
        role="img"
        aria-label={`건강 스코어 ${score}${label}`}
      >
        <path
          d={`M ${stroke / 2} ${cy} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${cy}`}
          fill="none"
          stroke="#F1F1F1"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        <path
          d={`M ${stroke / 2} ${cy} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${cy}`}
          fill="none"
          stroke="#FDD23C"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${half * pct} ${half}`}
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-0.5 pb-0.5">
        <span className="text-4xl font-bold leading-none tracking-tight" style={{ fontSize: size * 0.26 }}>
          {score}
        </span>
        <span className="pb-1 text-sm font-medium text-muted">{label}</span>
      </div>
    </div>
  );
}
