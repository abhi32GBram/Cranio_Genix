// src/services/apiService.ts

import type { PredictionResult } from '../types/Prediction';
import type { PatientRecord } from '../types/PatientRecord';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
 const SPRING_BOOT_API_URL = import.meta.env.VITE_SPRING_BOOT_API_URL || 'http://localhost:8080';
//const SPRING_BOOT_API_URL = import.meta.env.VITE_SPRING_BOOT_API_URL || '/api';

/**
 * Predicts tumor class from MRI image
 */
export const predictScan = async (file: File): Promise<PredictionResult> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/predict`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();

    if (data.status === 'success') {
        return data.prediction;
    } else {
        throw new Error(data.message || 'Prediction failed');
    }
};

/**
 * Fetches patient record by name from Spring Boot backend
 */
export const fetchPatientData = async (nameOrId: string): Promise<PatientRecord | null> => {
    const encodedName = encodeURIComponent(nameOrId);
    const url = `${SPRING_BOOT_API_URL}/patients/search?name=${encodedName}`;

    const response = await fetch(url);

    if (!response.ok) {
        console.warn(`Failed to fetch patient data for "${nameOrId}"`);
        return null;
    }

    return await response.json();
};