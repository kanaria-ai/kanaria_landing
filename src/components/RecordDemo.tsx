"use client";

import { useState } from "react";

// 앱(bristol_info.dart)과 같은 유형 설명과 색상
const types = [
  { n: 1, d: "견과류처럼 분리된 단단한 덩어리", c: "#5D4037" },
  { n: 2, d: "단단한 소시지 형태", c: "#8D6E63" },
  { n: 3, d: "표면에 균열 있는 소시지 형태", c: "#FFE082" },
  { n: 4, d: "부드럽고 매끈한 소시지 형태", c: "#FDD23C" },
  { n: 5, d: "절단면이 명확한 부드러운 덩어리", c: "#FFB74D" },
  { n: 6, d: "흐물흐물한 덩어리 형태", c: "#FF8A65" },
  { n: 7, d: "덩어리 없는 액체 형태", c: "#E53935" },
];

function verdict(n: number) {
  if (n === 3 || n === 4) return "정상 범위";
  return n < 3 ? "단단한 편" : "묽은 편";
}

export default function RecordDemo() {
  const [picked, setPicked] = useState(4);
  const current = types[picked - 1];

  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-float sm:p-7">
      <div className="flex items-start justify-between gap-4 rounded-2xl bg-ink p-5 text-white">
        <div>
          <p className="text-xs font-medium text-white/60">오늘 아침 기록</p>
          <p className="mt-1 text-xl font-bold">오전 7:42 · 6분</p>
          <p className="mt-1 text-sm text-white/70">사용자: 나</p>
        </div>
        <span className="shrink-0 rounded-pill bg-brand px-3 py-1.5 text-xs font-bold text-ink">
          자동 기록
        </span>
      </div>

      <div aria-live="polite" className="mt-4 rounded-2xl bg-brand-tint p-5">
        <p className="text-xs font-semibold text-muted">AI 분석 결과</p>
        <p className="mt-1.5 flex items-center gap-2.5 text-2xl font-extrabold tracking-tight">
          <span className="h-3.5 w-3.5 shrink-0 rounded-full" style={{ background: current.c }} />
          {current.n}형 · {verdict(current.n)}
        </p>
        <p className="mt-1.5 text-sm text-ink-2">{current.d}</p>
      </div>

      <p className="mt-6 text-lg font-bold">AI가 구분하는 일곱 가지 유형</p>
      <p className="mt-1 text-sm text-muted">
        하나씩 눌러 보세요.
      </p>

      <div className="mt-4 space-y-2">
        {types.map((t) => {
          const on = picked === t.n;
          return (
            <button
              key={t.n}
              type="button"
              aria-pressed={on}
              onClick={() => setPicked(t.n)}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-2.5 text-left transition-colors ${
                on ? "border-ink bg-brand-tint" : "border-line bg-surface hover:border-ink/30"
              }`}
            >
              <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: t.c }} />
              <span className="w-9 shrink-0 text-sm font-bold">{t.n}형</span>
              <span className="text-sm text-ink-2">{t.d}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-muted-2">이해를 돕기 위한 예시 화면입니다.</p>
    </div>
  );
}
