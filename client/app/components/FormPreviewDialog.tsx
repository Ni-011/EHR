import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  patientInformationAtom,
  clinicalNotesAtom,
} from '@/lib/atoms';
import { useAtom } from 'jotai';

const FormPreviewDialog = () => {
  const [patientInfo] = useAtom(patientInformationAtom);
  const [clinicalNotes] = useAtom(clinicalNotesAtom);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0">
          Preview Form
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl w-full">
        <DialogHeader>
          <DialogTitle>Form Preview</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto p-4 border rounded-md bg-gray-50 text-sm">
          <div className="bg-gray-100 px-4 py-1 rounded-md mb-6">
            <h3 className="text-base font-bold text-left mb-4">Patient Information</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <div className="flex justify-between items-center">
                <p><strong>Patient UNQ-ID:</strong></p>
                <p>{patientInfo.patientUnqId}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>First Name:</strong></p>
                <p>{patientInfo.firstName}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>Last Name:</strong></p>
                <p>{patientInfo.lastName}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>Contact Number:</strong></p>
                <p>{patientInfo.contactNumber}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>National ID:</strong></p>
                <p>{patientInfo.nationalId}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>Nationality:</strong></p>
                <p>{patientInfo.nationality}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>Date of Birth:</strong></p>
                <p>{patientInfo.dob}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>Age:</strong></p>
                <p>{patientInfo.age}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>Gender:</strong></p>
                <p>{patientInfo.gender}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>Insurance ID Number:</strong></p>
                <p>{patientInfo.insuranceIdNumber}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>Insurance Provider:</strong></p>
                <p>{patientInfo.insuranceProvider}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>Payer:</strong></p>
                <p>{patientInfo.payer}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>Address:</strong></p>
                <p>{patientInfo.address}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>Phone:</strong></p>
                <p>{patientInfo.phone}</p>
              </div>
              <div className="flex justify-between items-center">
                <p><strong>Email:</strong></p>
                <p>{patientInfo.email}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 px-4 py-1 rounded-md mb-6">
            <h3 className="text-base font-bold text-left mt-6 mb-4">Clinical Summary</h3>
            <div className="flex flex-col gap-2">
              <p><strong>Chief Complaint:</strong> {clinicalNotes.chiefComplaint}</p>
              <p><strong>Duration of Illness:</strong> {clinicalNotes.durationOfIllness}</p>
              <p><strong>History of Present Illness:</strong> {clinicalNotes.historyOfPresentIllness}</p>
            </div>
          </div>

          <div className="bg-gray-100 px-4 py-1 rounded-md mb-6">
            <h3 className="text-base font-bold text-left mt-6 mb-4">Diagnosis</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <div className="flex justify-between items-center">
                <p><strong>Primary Diagnosis:</strong></p>
                <p>{clinicalNotes.primaryDiagnosisCode} - {clinicalNotes.primaryDiagnosisDescription}</p>
              </div>
              {clinicalNotes.secondaryDiagnoses.length > 0 && (
                <div className="col-span-2">
                  <p className="font-semibold mt-2 text-center">Secondary Diagnoses:</p>
                  <ul className="list-disc pl-5">
                    {clinicalNotes.secondaryDiagnoses.map((diag, idx) => (
                      <li key={idx} className="flex justify-between items-center"><span>{diag.code}</span><span>{diag.desc}</span></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-100 px-4 py-1 rounded-md mb-6">
            <h3 className="text-base font-bold text-left mt-6 mb-4">Procedures/Services (CPT code)</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">CPT Code</TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Description</TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Type</TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">QTY</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-white divide-y divide-gray-200">
                  {clinicalNotes.procedures.length > 0 ? (
                    <>
                      {clinicalNotes.procedures.map((proc, idx) => (
                        <TableRow key={`cn-proc-${idx}`}>
                          <TableCell className="px-6 py-4 whitespace-nowrap">{proc.code}</TableCell>
                          <TableCell className="px-6 py-4 whitespace-nowrap">{proc.desc}</TableCell>
                          <TableCell className="px-6 py-4 whitespace-nowrap">{proc.type}</TableCell>
                          <TableCell className="px-6 py-4 whitespace-nowrap">{proc.qty}</TableCell>
                        </TableRow>
                      ))}
                    </>
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="px-6 py-4 whitespace-nowrap text-center text-gray-500">
                        No procedures recorded.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="bg-gray-100 px-4 py-1 rounded-md mb-6">
            <h3 className="text-base font-bold text-left mt-6 mb-4">Medications</h3>
            {clinicalNotes.medications.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-gray-50">
                    <TableRow>
                      <TableHead className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Medication</TableHead>
                      <TableHead className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Dosage</TableHead>
                      <TableHead className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Frequency</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white divide-y divide-gray-200">
                    {clinicalNotes.medications.map((med, idx) => (
                      <TableRow key={`cn-med-${idx}`}>
                        <TableCell className="px-6 py-4 whitespace-nowrap">{med.name}</TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap">{med.dosage}</TableCell>
                        <TableCell className="px-6 py-4 whitespace-nowrap">{med.frequency}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <p className="text-center text-gray-500">No medications recorded.</p>
            )}
          </div>

          <div className="bg-gray-100 px-4 py-1 rounded-md mb-6">
            <h3 className="text-base font-bold text-left mt-6 mb-4">Treatment Plan</h3>
            <p className="text-justify">{clinicalNotes.plan || 'No treatment plan.'}</p>
          </div>

          <div className="bg-gray-100 px-4 py-1 rounded-md mb-6">
            <h3 className="text-base font-bold text-left mt-6 mb-4">Signatures</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <p className="flex justify-between items-center">
                <span><strong>Doctor's Signature:</strong></span>
                <span>_________________________</span>
              </p>
              <p className="flex justify-between items-center">
                <span><strong>Patient's Signature:</strong></span>
                <span>_________________________</span>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormPreviewDialog; 