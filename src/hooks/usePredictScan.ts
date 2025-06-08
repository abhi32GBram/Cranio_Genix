// src/hooks/usePredictScan.ts

import { useState } from 'react';
import { predictScan } from '../services/apiService';
import type { PredictionResult } from '../types/Prediction';

interface UsePredictScanReturn {
    prediction: PredictionResult | null;
    loading: boolean;
    error: string | null;
    predict: (file: File) => Promise<void>;
}

export const usePredictScan = (): UsePredictScanReturn => {
    const [prediction, setPrediction] = useState<PredictionResult | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const predict = async (file: File): Promise<void> => {
        setLoading(true);
        setError(null);
        try {
            const result = await predictScan(file);
            console.log("API Response:", result); // Log the raw API response
            setPrediction(result); // Update prediction state
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            setPrediction(null);
        } finally {
            setLoading(false);
        }
    };

    return { prediction, loading, error, predict };
};