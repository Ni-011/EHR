import { atom } from 'jotai';

// Define initial state for each form
export const patientInformationAtom = atom({
  patientUnqId: '',
  firstName: '',
  lastName: '',
  contactNumber: '',
  nationalId: '',
  nationality: '',
  dob: '',
  age: '',
  gender: '',
  insuranceIdNumber: '',
  insuranceProvider: '',
  payer: '',
  address: '',
  phone: '',
  email: '',
});

export const visitDetailsAtom = atom({
  visitId: '',
  visitDate: '',
  timeOfExamination: '',
  doctor: '',
  department: '',
  generatedBy: '',
  reasonForVisit: '',
  diagnosis: '',
  physician: '',
});

export const vitalsAtom = atom({
  vitalsDate: '',
  vitalsTime: '',
  temperature: '',
  bloodPressure: '',
  heartRate: '',
  respiratoryRate: '',
  weight: '',
  height: '',
  spo2: '',
  pulseRate: '',
});

export const trackerAtom = atom({
  // Define tracker form fields here
  // For now, let's assume a simple text field
  trackerNotes: '',
});

export const clinicalNotesAtom = atom({
  chiefComplaint: '',
  durationOfIllness: '',
  historyOfPresentIllness: '',
  reviewOfSystems: '',
  physicalExam: '',
  assessment: '',
  plan: '',
  primaryDiagnosisCode: '',
  primaryDiagnosisDescription: '',
  secondaryDiagnoses: [] as Array<{ code: string; desc: string }>,
  procedures: [] as Array<{ code: string; desc: string; type: string; qty: string }>,
  medications: [] as Array<{ name: string; dosage: string; frequency: string }>,
});

export const ordersAtom = atom({
  selectedVisitId: null as string | null,
  labOrders: [] as any[], // Assuming an array for lab orders
  radiologyOrders: [] as any[], // Assuming an array for radiology orders
  otherProcedures: [] as any[], // New section
  icdCodesSummary: [] as any[], // New section
  medications: [] as any[], // New section
  additionalNotes: '', // New section
}); 