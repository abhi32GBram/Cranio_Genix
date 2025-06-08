// src/services/apiService.ts
import type { PredictionResult } from '../types/Prediction';

// // Use the VITE_API_URL from the environment variables
// const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// export const predictScan = async (file: File): Promise<PredictionResult> => {
//     const formData = new FormData();
//     formData.append('file', file);

//     // Construct the full URL by appending '/predict' to the base URL
//     const url = `${API_BASE_URL}/predict`;

//     const response = await fetch(url, {
//         method: 'POST',
//         body: formData,
//     });

//     if (!response.ok) {
//         throw new Error(`Network error: ${response.statusText}`);
//     }

//     const data = await response.json();

//     if (data.status === 'success') {
//         return data.prediction;
//     } else {
//         throw new Error(data.message || 'Prediction failed');
//     }
// };

// src/services/apiService.ts

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const predictScan = async (file: File): Promise<PredictionResult> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/predict`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error(`Network error: ${response.statusText}`);
    }

    const data = await response.json();

    console.log("Raw API Response:", data);

    if (data.status === 'success') {
        return data.prediction; // This must be of type PredictionResult
    } else {
        throw new Error(data.message || 'Prediction failed');
    }
};