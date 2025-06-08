// src/components/ResultArea.tsx

import React from 'react';
import PredictionCard from './PredictionCard';
import ConfidenceValue from './ConfidenceValue';
import DetailedStatsToggle from './DetailedStatsToggle';
import ProbabilityBars from './ProbabilityBars';

interface ResultAreaProps {
  prediction: any;
  showDetails: boolean;
  toggleDetails: () => void;
  error: string | null;
}

const ResultArea: React.FC<ResultAreaProps> = ({
  prediction,
  showDetails,
  toggleDetails,
  error,
}) => {
  if (error) {
    return (
      <div id="result-area" className="result-area">
        <h2 className="result-title">Analysis Error</h2>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div id="result-area" className="result-area">
      <h2 className="result-title">Analysis Results</h2>
      <div className="result-grid">
        <PredictionCard label="Prediction" value={prediction.predicted_class.replace(/_/g, ' ')} />
        <ConfidenceValue confidence={prediction.confidence} />
      </div>

      <DetailedStatsToggle showDetails={showDetails} onClick={toggleDetails} />

      {showDetails && <ProbabilityBars probabilities={prediction.probabilities} />}
    </div>
  );
};

export default ResultArea;