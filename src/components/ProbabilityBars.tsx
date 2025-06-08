// src/components/ProbabilityBars.tsx

import React from 'react';
import ProbabilityBar from './ProbabilityBar';

interface ProbabilityBarsProps {
  probabilities: {
    glioma_tumor: number;
    meningioma_tumor: number;
    no_tumor: number;
    pituitary_tumor: number;
  };
}

const ProbabilityBars: React.FC<ProbabilityBarsProps> = ({ probabilities }) => {
  const maxPercent = Math.max(...Object.values(probabilities));
  const minVisiblePercent = Math.max(1, maxPercent * 0.01);

  return (
    <div className="detailed-stats">
      <h3>Detailed Probabilities</h3>
      <div className="probability-bars">
        <ProbabilityBar
          label="Glioma Tumor"
          id="glioma"
          percent={probabilities.glioma_tumor}
          minVisiblePercent={minVisiblePercent}
        />
        <ProbabilityBar
          label="Meningioma Tumor"
          id="meningioma"
          percent={probabilities.meningioma_tumor}
          minVisiblePercent={minVisiblePercent}
        />
        <ProbabilityBar
          label="No Tumor"
          id="no-tumor"
          percent={probabilities.no_tumor}
          minVisiblePercent={minVisiblePercent}
        />
        <ProbabilityBar
          label="Pituitary Tumor"
          id="pituitary"
          percent={probabilities.pituitary_tumor}
          minVisiblePercent={minVisiblePercent}
        />
      </div>
    </div>
  );
};

export default ProbabilityBars;