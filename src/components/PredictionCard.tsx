// src/components/PredictionCard.tsx

interface PredictionCardProps {
    label: string;
    value: string;
}

const PredictionCard: React.FC<PredictionCardProps> = ({ label, value }) => {
    return (
        <div className="result-card">
            <div className="result-label">{label}</div>
            <div className="result-value">{value}</div>
        </div>
    );
};

export default PredictionCard;