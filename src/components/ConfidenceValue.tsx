// src/components/ConfidenceValue.tsx

interface ConfidenceValueProps {
  confidence: number;
}

const ConfidenceValue: React.FC<ConfidenceValueProps> = ({ confidence }) => {
  let barClass = 'confidence-value';
  if (confidence >= 80) {
    barClass += ' high-confidence';
  } else if (confidence >= 50) {
    barClass += ' medium-confidence';
  } else if (confidence > 0) {
    barClass += ' low-confidence';
  } else {
    barClass += ' zero-confidence';
  }

  return (
    <div className="result-card">
      <div className="result-label">Confidence</div>
      <div className={barClass}>{confidence.toFixed(2)}%</div>
    </div>
  );
};

export default ConfidenceValue;