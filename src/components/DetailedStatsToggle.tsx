// src/components/DetailedStatsToggle.tsx

import React from 'react';

interface DetailedStatsToggleProps {
  showDetails: boolean;
  onClick: () => void;
}

const DetailedStatsToggle: React.FC<DetailedStatsToggleProps> = ({ showDetails, onClick }) => {
  return (
    <button id="stats-toggle" className="stats-toggle" onClick={onClick}>
      <span>{showDetails ? 'Hide Detailed Analysis' : 'Show Detailed Analysis'}</span>
      <svg className={`toggle-icon ${showDetails ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </button>
  );
};

export default DetailedStatsToggle;
