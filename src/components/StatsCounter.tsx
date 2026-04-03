"use client";

import { useEffect, useMemo, useState } from "react";
import type { StatItem } from "@/src/lib/siteData";

type StatsCounterProps = {
  stats: StatItem[];
};

export function StatsCounter({ stats }: StatsCounterProps) {
  const [progress, setProgress] = useState(0);
  const duration = 1300;

  useEffect(() => {
    let frame = 0;
    let start = 0;
    const tick = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const next = Math.min(elapsed / duration, 1);
      setProgress(next);
      if (next < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const rendered = useMemo(
    () =>
      stats.map((item) => ({
        ...item,
        display: Math.floor(item.value * progress),
      })),
    [progress, stats],
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {rendered.map((item) => (
        <article
          key={item.label}
          className="glass card-hover rounded-2xl p-5 text-center"
          aria-label={`${item.label} ${item.value}${item.suffix ?? ""}`}
        >
          <p className="heading text-3xl font-semibold text-white">
            {item.display}
            {item.suffix}
          </p>
          <p className="mt-2 text-sm text-slate-200/80">{item.label}</p>
        </article>
      ))}
    </div>
  );
}
