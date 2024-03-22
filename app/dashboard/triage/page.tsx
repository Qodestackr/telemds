'use client';
import React, { FormEventHandler, ChangeEventHandler, useState, } from 'react';

const TriageForm = () => {
    const [formData, setFormData] = useState({
        patientId: '',
        temperature: '',
        bloodPressure: '',
        heartRate: '',
        respiratoryRate: ''
    });

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="patientId" placeholder="Patient ID" value={formData.patientId} onChange={handleChange} />
            <input type="number" name="temperature" placeholder="Temperature" value={formData.temperature} onChange={handleChange} />
            <input type="text" name="bloodPressure" placeholder="Blood Pressure" value={formData.bloodPressure} onChange={handleChange} />
            <input type="number" name="heartRate" placeholder="Heart Rate" value={formData.heartRate} onChange={handleChange} />
            <input type="number" name="respiratoryRate" placeholder="Respiratory Rate" value={formData.respiratoryRate} onChange={handleChange} />
            <button type="submit">Submit Triage Assessment</button>
        </form>
    );
};


export default function page(){
    return(
        <TriageForm />
    )
} 



// patientId
// temperature
// bloodPressure
// heartRate
// Height
// Weight
// respiratoryRate
// Oxygen Saturation (SpO2)

/**
Allergies and Medication History: Information about any known allergies or sensitivities to medications, as well as 
the patient's current medication regimen.

Medical History: Relevant past medical history, including chronic conditions, previous surgeries, and significant 
medical events.

Symptoms and Chief Complaint: Description of the patient's symptoms, chief complaint, and reason for seeking medical 
attention.

Additional Observations: Any other relevant observations or findings obtained during the triage assessment, such as 
skin color, hydration status, and peripheral perfusion.
*/