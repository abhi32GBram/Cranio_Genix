// src/types/Prediction.ts

export interface PredictionProbabilities {
    glioma_tumor: number;
    meningioma_tumor: number;
    no_tumor: number;
    pituitary_tumor: number;
}

export interface PredictionResult {
    predicted_class: string;
    confidence: number;
    probabilities: PredictionProbabilities;
}