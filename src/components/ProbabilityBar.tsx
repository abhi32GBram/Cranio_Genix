// src/components/ProbabilityBar.tsx

import React from 'react';

interface ProbabilityBarProps {
  label: string;
  id: string;
  percent: number;
  minVisiblePercent: number;
}

const ProbabilityBar: React.FC<ProbabilityBarProps> = ({ label, id, percent, minVisiblePercent }) => {
  const visualPercent = percent > 0 ? Math.max(minVisiblePercent, percent) : 0;

  let barClass = 'prob-bar';
  if (percent >= 50) {
    barClass += ' high-prob';
  } else if (percent >= 20) {
    barClass += ' medium-prob';
  } else if (percent > 0) {
    barClass += ' low-prob';
  } else {
    barClass += ' zero-prob';
  }

  return (
    <div className="probability-item">
      <div className="prob-label">{label}</div>
      <div className="prob-bar-container">
        <div className={barClass} style={{ width: `${visualPercent}%` }}></div>
        <span className="prob-value">{percent.toFixed(2)}%</span>
      </div>
    </div>
  );
};

export default ProbabilityBar;