// src/hooks/usePredictScan.ts

import { useState } from 'react';
import { predictScan, fetchPatientData } from '../services/apiService';
import type { PredictionResult } from '../types/Prediction';
import type { PatientRecord } from '../types/PatientRecord';

interface UsePredictScanReturn {
    prediction: PredictionResult | null;
    patientData: PatientRecord | null;
    loading: boolean;
    error: string | null;
    predict: (file: File, patientId?: string) => Promise<void>;
}

export const usePredictScan = (): UsePredictScanReturn => {
    const [prediction, setPrediction] = useState<PredictionResult | null>(null);
    const [patientData, setPatientData] = useState<PatientRecord | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const predict = async (file: File, patientId?: string): Promise<void> => {
        setLoading(true);
        setError(null);
        try {
            // Predict tumor from MRI scan
            const predictionResult = await predictScan(file);
            setPrediction(predictionResult);

            // If patient ID/name is provided, fetch data from Spring Boot
            if (patientId) {
                const patientResult = await fetchPatientData(patientId);
                setPatientData(patientResult);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            setPrediction(null);
            setPatientData(null);
        } finally {
            setLoading(false);
        }
    };

    return { prediction, patientData, loading, error, predict };
};