// src/components/ResultArea.tsx

// src/components/ResultArea.tsx

import React from 'react';
import PredictionCard from './PredictionCard';
import ConfidenceValue from './ConfidenceValue';
import DetailedStatsToggle from './DetailedStatsToggle';
import ProbabilityBars from './ProbabilityBars';
import PatientInfoCard from './PatientInfoCard'; // We'll create this next

interface ResultAreaProps {
  prediction: any;
  patientData?: any; // Can be null if not found
  showDetails: boolean;
  toggleDetails: () => void;
  error: string | null;
}
const ResultArea: React.FC<ResultAreaProps> = ({
  prediction,
  patientData,
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

      <div className="combined-results">
        {/* Patient Info */}

        {/* Prediction Info */}
        <div className="prediction-section">
          <div className="result-grid">
            <PredictionCard label="Prediction" value={prediction.predicted_class.replace(/_/g, ' ')} />
            <ConfidenceValue confidence={prediction.confidence} />
          </div>
          <DetailedStatsToggle showDetails={showDetails} onClick={toggleDetails} />
          {showDetails && <ProbabilityBars probabilities={prediction.probabilities} />}

          {patientData && (
            <div className="patient-info-section">
              <PatientInfoCard patient={patientData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultArea;