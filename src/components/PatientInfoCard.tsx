// src/components/PatientInfoCard.tsx

import React from 'react';

interface PatientInfoCardProps {
    patient: {
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
    };
}

const PatientInfoCard: React.FC<PatientInfoCardProps> = ({ patient }) => {
    return (
        <div className="patient-card">
            <h3>{patient.name}</h3>
            <ul className="patient-details">
                <li><strong>Age:</strong> {patient.age}</li>
                <li><strong>Gender:</strong> {patient.gender}</li>
                <li><strong>Height:</strong> {patient.height} cm</li>
                <li><strong>Weight:</strong> {patient.weight} kg</li>
                <li><strong>BMI:</strong> {patient.bmi.toFixed(1)}</li>
                <li><strong>Blood Pressure:</strong> {patient.bloodPressureSystolic}/{patient.bloodPressureDiastolic} mmHg</li>
                <li><strong>Glucose Level:</strong> {patient.glucoseLevel} mg/dL</li>
                <li><strong>Cholesterol:</strong> {patient.cholesterolLevel} mg/dL</li>
                <li><strong>Smoking Status:</strong> {patient.smokingStatus}</li>
                <li><strong>Alcohol Consumption:</strong> {patient.alcoholConsumption}</li>
                <li><strong>Physical Activity:</strong> {patient.physicalActivity}</li>
                <li><strong>Comorbidities:</strong> {patient.comorbidities.join(', ') || 'None'}</li>
                <li><strong>Family History:</strong> {patient.familyHistory}</li>
                <li><strong>Medication:</strong> {patient.medicationHistory || 'None'}</li>
                <li><strong>Tumor Detected:</strong> {patient.hasTumor ? 'Yes' : 'No'}</li>
            </ul>
        </div>
    );
};

export default PatientInfoCard;