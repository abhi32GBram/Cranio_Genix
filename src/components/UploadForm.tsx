// src/components/UploadForm.tsx

import React from 'react';

// UploadForm.tsx

interface UploadFormProps {
  // 👇 Updated line:
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  file: File | null;
  isLoading: boolean;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  patientId: string;
  onPatientIdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const UploadForm: React.FC<UploadFormProps> = ({
  fileInputRef,
  file,
  isLoading,
  onFileChange,
  onSubmit,
  patientId,
  onPatientIdChange,
}) => {
  return (
    <form id="upload-form" onSubmit={onSubmit} encType="multipart/form-data">
      <div className="upload-area">
        {/* 👇 New Patient Input Field */}
        <input
          type="text"
          placeholder="Enter patient name or ID"
          value={patientId}
          onChange={onPatientIdChange}
          className="patient-id-input"
          aria-label="Patient Name or ID"
        />

        <input
          type="file"
          id="file-input"
          ref={fileInputRef}
          className="file-input"
          accept="image/*"
          onChange={onFileChange}
          required
        />
        <label htmlFor="file-input" className="file-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          Choose MRI Image
        </label>
        <div id="file-name" className="file-info">
          {file ? file.name : 'No file selected'}
        </div>
        <button
          type="submit"
          className="predict-btn"
          disabled={!file || isLoading}
        >
          <span className="btn-text">{isLoading ? 'Analyzing...' : 'Analyze Scan'}</span>
          <span className={`spinner ${isLoading ? 'visible' : ''}`}></span>
        </button>
      </div>
    </form>
  );
};

export default UploadForm;