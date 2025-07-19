import React from 'react';
import { Plus, Pen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useAtom } from 'jotai';
import { patientInformationAtom } from '@/lib/atoms';

const PatientInformationForm = () => {
  const [patientInfo, setPatientInfo] = useAtom(patientInformationAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setPatientInfo((prev) => ({
      ...prev,
      [id === 'patient-unq-id' ? 'patientUnqId' :
       id === 'first-name' ? 'firstName' :
       id === 'last-name' ? 'lastName' :
       id === 'contact-number' ? 'contactNumber' :
       id === 'national-id' ? 'nationalId' :
       id === 'nationality' ? 'nationality' :
       id === 'date-of-birth' ? 'dob' :
       id === 'age' ? 'age' :
       id === 'gender' ? 'gender' :
       id === 'insurance-id' ? 'insuranceIdNumber' :
       id === 'insurance-provider' ? 'insuranceProvider' :
       id === 'payer' ? 'payer' :
       id]: value,
    }));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Patient Information</h2>
        <div className="flex space-x-2">
          <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white font-bold py-1.5 px-3 rounded flex items-center text-sm">
            <Plus className="h-4 w-4 mr-1" />
            New Visit
          </button>
          <button className="bg-gray-300 hover:cursor-pointer hover:bg-gray-400 text-gray-800 font-bold py-1.5 px-3 rounded flex items-center text-sm">
            <Pen className="h-4 w-4 mr-1" />
            Edit
          </button>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="patient-unq-id" className="block text-sm font-bold text-gray-700 mb-1">Patient UNQ-ID</label>
          <Input id="patient-unq-id" placeholder="Enter Patient UNQ-ID" className="h-10 py-2" value={patientInfo.patientUnqId} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="first-name" className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
          <Input id="first-name" className="h-10 py-2" value={patientInfo.firstName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
          <Input id="last-name" className="h-10 py-2" value={patientInfo.lastName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="contact-number" className="block text-sm font-bold text-gray-700 mb-1">Contact Number</label>
          <Input id="contact-number" placeholder="Enter Contact Number" className="h-10 py-2" value={patientInfo.contactNumber} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="national-id" className="block text-sm font-bold text-gray-700 mb-1">National ID</label>
          <Input id="national-id" placeholder="Enter National ID" className="h-10 py-2" value={patientInfo.nationalId} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="nationality" className="block text-sm font-bold text-gray-700 mb-1">Nationality</label>
          <Input id="nationality" placeholder="Enter Nationality" className="h-10 py-2" value={patientInfo.nationality} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="date-of-birth" className="block text-sm font-bold text-gray-700 mb-1">Date of Birth</label>
          <Input id="date-of-birth" type="date" className="h-10 py-2" value={patientInfo.dob} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-bold text-gray-700 mb-1">Age</label>
          <Input id="age" className="h-10 py-2 bg-gray-100" readOnly value={patientInfo.age} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-bold text-gray-700 mb-1">Gender</label>
          <select id="gender" className="h-10 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm bg-white" value={patientInfo.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="insurance-id" className="block text-sm font-bold text-gray-700 mb-1">Insurance ID Number</label>
          <Input id="insurance-id" placeholder="Enter Insurance ID Number" className="h-10 py-2" value={patientInfo.insuranceIdNumber} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="insurance-provider" className="block text-sm font-bold text-gray-700 mb-1">Insurance Provider</label>
          <Input id="insurance-provider" placeholder="Enter Insurance Provider" className="h-10 py-2" value={patientInfo.insuranceProvider} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="payer" className="block text-sm font-bold text-gray-700 mb-1">Payer</label>
          <Input id="payer" placeholder="Enter Payer" className="h-10 py-2" value={patientInfo.payer} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default PatientInformationForm;