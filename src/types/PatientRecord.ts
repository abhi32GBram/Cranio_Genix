// src/types/PatientRecord.ts

export interface PatientRecord {
    id: string;
    name: string;
    age: number;
    gender: string;
    height: number;
    weight: number;
    bmi: number;
    bloodPressureSystolic: number;
    bloodPressureDiastolic: number;
    glucoseLevel: number;
    cholesterolLevel: number;
    smokingStatus: string;
    alcoholConsumption: string;
    physicalActivity: string;
    comorbidities: string[];
    familyHistory: string;
    medicationHistory: string;
    hasTumor: boolean;
}