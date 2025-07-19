import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useAtom } from 'jotai';
import { clinicalNotesAtom } from '@/lib/atoms';

const ClinicalNotesForm = () => {
  const [clinicalNotes, setClinicalNotes] = useAtom(clinicalNotesAtom);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setClinicalNotes((prev) => ({
      ...prev,
      [id === 'chief-complaint' ? 'chiefComplaint' : 
       id === 'duration-of-illness' ? 'durationOfIllness' : 
       id === 'history-of-present-illness' ? 'historyOfPresentIllness' : 
       id === 'review-of-systems' ? 'reviewOfSystems' : 
       id === 'physical-exam' ? 'physicalExam' : 
       id === 'assessment' ? 'assessment' : 
       id === 'plan' ? 'plan' : 
       id === 'primary-diagnosis-title' ? 'primaryDiagnosisCode' : 
       id === 'primary-diagnosis-full' ? 'primaryDiagnosisDescription' : 
       id]: value,
    }));
  };

  const handleAddSecondaryDiagnosis = () => {
    if (clinicalNotes.primaryDiagnosisCode.trim() !== '' && clinicalNotes.primaryDiagnosisDescription.trim() !== '') {
      setClinicalNotes((prev) => ({
        ...prev,
        secondaryDiagnoses: [...prev.secondaryDiagnoses, { code: prev.primaryDiagnosisCode, desc: prev.primaryDiagnosisDescription }],
        primaryDiagnosisCode: '',
        primaryDiagnosisDescription: '',
      }));
    }
  };

  const handleRemoveSecondaryDiagnosis = (index: number) => {
    setClinicalNotes((prev) => ({
      ...prev,
      secondaryDiagnoses: prev.secondaryDiagnoses.filter((_, i) => i !== index),
    }));
  };

  const handleAddProcedure = () => {
    if (clinicalNotes.procedures.length > 0) { // Assuming a form for individual procedure entry
        // Add logic to get values from individual procedure input fields if they exist
        // For now, let's assume direct input or simplified structure
        // This part needs more specific implementation if there are multiple input fields for a single procedure entry
    }
  };

  const handleRemoveProcedure = (index: number) => {
    setClinicalNotes((prev) => ({
      ...prev,
      procedures: prev.procedures.filter((_, i) => i !== index),
    }));
  };

  const handleAddMedication = () => {
    if (clinicalNotes.medications.length > 0) { // Assuming a form for individual medication entry
        // Add logic to get values from individual medication input fields if they exist
        // For now, let's assume direct input or simplified structure
        // This part needs more specific implementation if there are multiple input fields for a single medication entry
    }
  };

  const handleRemoveMedication = (index: number) => {
    setClinicalNotes((prev) => ({
      ...prev,
      medications: prev.medications.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Clinical Summary</h2>
      <hr className="border-t border-gray-300 my-4" />
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label htmlFor="chief-complaint" className="block text-sm font-bold text-gray-700 mb-1">Chief complaint</label>
          <Textarea id="chief-complaint" placeholder="Enter chief complaint" className="h-24" value={clinicalNotes.chiefComplaint} onChange={handleTextChange} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
        <div>
          <label htmlFor="duration-of-illness" className="block text-sm font-bold text-gray-700 mb-1">Duration of Illness/symptoms</label>
          <Input id="duration-of-illness" placeholder="Enter duration" className="h-10 py-2" value={clinicalNotes.durationOfIllness} onChange={handleTextChange} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div>
          <label htmlFor="history-of-present-illness" className="block text-base font-bold text-gray-700 mb-2">History of present illness</label>
          <Textarea id="history-of-present-illness" placeholder="Enter history of present illness" className="h-32" value={clinicalNotes.historyOfPresentIllness} onChange={handleTextChange} />
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4">Diagnosis</h2>
      <div className="mb-4">
        <label htmlFor="primary-diagnosis-title" className="block text-sm font-bold text-gray-700 mb-1">Primary Diagnosis</label>
        <div className="flex items-center gap-2">
          <Input id="primary-diagnosis-title" placeholder="ICD-10 CODE" className="h-10 py-2" style={{ width: '160px' }} value={clinicalNotes.primaryDiagnosisCode} onChange={handleTextChange} />
          <Input id="primary-diagnosis-full" placeholder="Description" className="h-10 py-2 flex-grow" value={clinicalNotes.primaryDiagnosisDescription} onChange={handleTextChange} />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="secondary-diagnosis-title" className="block text-sm font-bold text-gray-700 mb-1">Secondary Diagnosis</label>
        <div className="flex items-center gap-2">
          <Input
            id="secondary-diagnosis-title"
            placeholder="ICD-10 CODE"
            className="h-10 py-2"
            style={{ width: '160px' }}
            value={clinicalNotes.primaryDiagnosisCode}
            onChange={handleTextChange}
          />
          <Input
            id="secondary-diagnosis-full"
            placeholder="Description"
            className="h-10 py-2 flex-grow"
            value={clinicalNotes.primaryDiagnosisDescription}
            onChange={handleTextChange}
          />
          <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md" onClick={handleAddSecondaryDiagnosis}>
            Add
          </button>
        </div>
      </div>
      <div className="mt-4">
        {clinicalNotes.secondaryDiagnoses.map((diag, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-md mb-2">
            <span>{diag.code}- {diag.desc}</span>
            <button
              className="text-red-500 hover:text-red-600 font-bold py-1 px-3 rounded-md text-sm"
              onClick={() => handleRemoveSecondaryDiagnosis(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4">Procedures/Services (CPT code)</h2>
      <div className="mb-4">
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-2">
            <label htmlFor="cpt-code" className="block text-sm font-bold text-gray-700 mb-1">CPT Code</label>
            <Input
              id="cpt-code"
              placeholder="CPT Code"
              className="h-10 py-2"
              value={clinicalNotes.procedures[0]?.code || ''} // Assuming single input for simplicity, adjust if multiple procedures
              onChange={(e) => setClinicalNotes((prev) => ({
                ...prev,
                procedures: [{ ...prev.procedures[0], code: e.target.value }]
              }))}
            />
          </div>
          <div className="col-span-5">
            <label htmlFor="cpt-description" className="block text-sm font-bold text-gray-700 mb-1">Description</label>
            <Input
              id="cpt-description"
              placeholder="Description"
              className="h-10 py-2 w-full"
              value={clinicalNotes.procedures[0]?.desc || ''}
              onChange={(e) => setClinicalNotes((prev) => ({
                ...prev,
                procedures: [{ ...prev.procedures[0], desc: e.target.value }]
              }))}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="cpt-type" className="block text-sm font-bold text-gray-700 mb-1">Type</label>
            <select
              id="cpt-type"
              className="h-10 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 w-full"
              value={clinicalNotes.procedures[0]?.type || ''}
              onChange={(e) => setClinicalNotes((prev) => ({
                ...prev,
                procedures: [{ ...prev.procedures[0], type: e.target.value }]
              }))}
            >
              <option value="">Type</option>
              <option value="surgical">Surgical</option>
              <option value="medical">Medical</option>
              <option value="diagnostic">Diagnostic</option>
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="cpt-qty" className="block text-sm font-bold text-gray-700 mb-1">QTY</label>
            <Input
              id="cpt-qty"
              type="number"
              placeholder="QTY"
              className="h-10 py-2"
              value={clinicalNotes.procedures[0]?.qty || ''}
              onChange={(e) => setClinicalNotes((prev) => ({
                ...prev,
                procedures: [{ ...prev.procedures[0], qty: e.target.value }]
              }))}
            />
          </div>
          <div className="col-span-2">
            <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full" onClick={handleAddProcedure}>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {clinicalNotes.procedures.map((proc, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-md mb-2">
            <span>{proc.code} - {proc.desc} ({proc.type}) QTY: {proc.qty}</span>
            <button
              className="text-red-500 hover:text-red-600 font-bold py-1 px-3 rounded-md text-sm"
              onClick={() => handleRemoveProcedure(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4">Medications</h2>
      <div className="mb-4">
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-3">
            <label htmlFor="medication-name" className="block text-sm font-bold text-gray-700 mb-1">Medication Name</label>
            <Input
              id="medication-name"
              placeholder="Medication name"
              className="h-10 py-2 w-full"
              value={clinicalNotes.medications[0]?.name || ''}
              onChange={(e) => setClinicalNotes((prev) => ({
                ...prev,
                medications: [{ ...prev.medications[0], name: e.target.value }]
              }))}
            />
          </div>
          <div className="col-span-3">
            <label htmlFor="dosage" className="block text-sm font-bold text-gray-700 mb-1">Dosage (e.g 500mg)</label>
            <Input
              id="dosage"
              placeholder="Dosage (e.g 500mg)"
              className="h-10 py-2 w-full"
              value={clinicalNotes.medications[0]?.dosage || ''}
              onChange={(e) => setClinicalNotes((prev) => ({
                ...prev,
                medications: [{ ...prev.medications[0], dosage: e.target.value }]
              }))}
            />
          </div>
          <div className="col-span-3">
            <label htmlFor="frequency" className="block text-sm font-bold text-gray-700 mb-1">Frequency (e.g BID)</label>
            <Input
              id="frequency"
              placeholder="Frequency (e.g BID)"
              className="h-10 py-2 w-full"
              value={clinicalNotes.medications[0]?.frequency || ''}
              onChange={(e) => setClinicalNotes((prev) => ({
                ...prev,
                medications: [{ ...prev.medications[0], frequency: e.target.value }]
              }))}
            />
          </div>
          <div className="col-span-3">
            <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full" onClick={handleAddMedication}>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {clinicalNotes.medications.map((med, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-md mb-2">
            <span>{med.name} - {med.dosage} - {med.frequency}</span>
            <button
              className="text-red-500 hover:text-red-600 font-bold py-1 px-3 rounded-md text-sm"
              onClick={() => handleRemoveMedication(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4">Treatment plan</h2>
      <div className="mb-4">
        <Textarea id="treatment-plan" placeholder="Describe the treatment plan..." className="h-48" />
      </div>

      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4">Referral (If Applicable)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="referred-to" className="block text-sm font-bold text-gray-700 mb-1">Referred to</label>
          <Input id="referred-to" placeholder="Enter who is referred to" className="h-10 py-2" />
        </div>
        <div>
          <label htmlFor="referred-reason" className="block text-sm font-bold text-gray-700 mb-1">Referred reason</label>
          <Input id="referred-reason" placeholder="Enter reason for referral" className="h-10 py-2" />
        </div>
      </div>

      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold mb-4">Signatures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Doctor's Signature & Seal</label>
          <div className="border-2 border-dashed border-gray-300 h-32 flex items-center justify-center text-gray-500 rounded-md bg-gray-50">
            (Signature Area)
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Patient's Signature</label>
          <div className="border-2 border-dashed border-gray-300 h-32 flex items-center justify-center text-gray-500 rounded-md bg-gray-50">
            (Signature Area)
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="doctor-name-input" className="block text-sm font-bold text-gray-700 mb-1">Doctor's Name</label>
        <Input id="doctor-name-input" placeholder="Doctor's Name" className="h-10 py-2 w-full" />
      </div>

      <div className="flex items-start mt-4">
        <input type="checkbox" id="doctor-declaration" className="mr-2 mt-1" />
        <label htmlFor="doctor-declaration" className="text-sm text-gray-700">
          I am Dr. [Doctor Name], treating doctor of the above patient and all the information provided in this claims form are best of my professional expertise and are true to the best of my knowledge
        </label>
      </div>

      <hr className="border-t border-gray-300 my-4" />
      <p className="text-sm text-gray-600 mb-4">This is a computer generated document, valid with digital signature and seal.</p>
      <div className="flex justify-start">
        <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
          Claim form (save)
        </button>
      </div>
    </div>
  );
};

export default ClinicalNotesForm; 