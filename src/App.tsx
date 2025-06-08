// src/App.tsx
import React, { useState, useRef } from 'react';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import ImagePreview from './components/ImagePreview';
import ResultArea from './components/ResultArea';
import Footer from './components/Footer';
import { usePredictScan } from './hooks/usePredictScan';
import type { PredictionResult } from './types/Prediction';

const App: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const { prediction, loading, error, predict } = usePredictScan();

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setPreviewUrl(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    predict(file).then(() => {
      console.log('Prediction:', prediction); // Logs the updated prediction
    });
  };  // Toggle detailed stats visibility
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <Header />

      <main>
        {/* Upload Form */}
        <UploadForm
          fileInputRef={fileInputRef}
          file={file}
          isLoading={loading}
          onFileChange={handleFileChange}
          onSubmit={handleSubmit}
        />

        {/* Image Preview */}
        {previewUrl && <ImagePreview src={previewUrl} alt="MRI Scan Preview" />}

        {/* Result Area */}
        {(prediction || error) && (
          <ResultArea
            prediction={prediction ?? undefined}
            showDetails={showDetails}
            toggleDetails={toggleDetails}
            error={error}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;