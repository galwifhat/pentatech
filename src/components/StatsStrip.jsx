// ─────────────────────────────────────────────
//  Component: StatsStrip
//  Animated count-up statistics bar
// ─────────────────────────────────────────────

import React from "react";
import { STATS } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";
import "../styles/stats.css";

function StatItem({ target, label, suffix = "" }) {
  const { ref, count } = useCountUp(target);

  return (
    <div className="pt-stats__item col-6 col-md-3" ref={ref}>
      <div className="pt-stats__number">
        {count}
        {suffix}
      </div>
      <div className="pt-stats__label">{label}</div>
    </div>
  );
}

function StatsStrip() {
  return (
    <div className="pt-stats">
      <div className="container-fluid px-0">
        <div className="row g-0">
          {STATS.map((stat) => (
            <StatItem
              key={stat.label}
              target={stat.target}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsStrip;
