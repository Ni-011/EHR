import React from 'react';
import { Input } from '@/components/ui/input';
import { useAtom } from 'jotai';
import { vitalsAtom } from '@/lib/atoms';

const VitalsForm = () => {
  const [vitals, setVitals] = useAtom(vitalsAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setVitals((prev) => ({
      ...prev,
      [id === 'vitals-date' ? 'vitalsDate' : 
       id === 'vitals-time' ? 'vitalsTime' : 
       id === 'height' ? 'height' : 
       id === 'weight' ? 'weight' : 
       id === 'temperature' ? 'temperature' : 
       id === 'spo2' ? 'spo2' : 
       id === 'blood-pressure' ? 'bloodPressure' : 
       id === 'pulse-rate' ? 'pulseRate' : 
       id === 'respiratory-rate' ? 'respiratoryRate' : 
       id]: value,
    }));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Vital Signs</h2>
      <hr className="border-t border-gray-300 my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="vitals-date" className="block text-sm font-bold text-gray-700 mb-1">Date</label>
          <Input id="vitals-date" type="date" className="h-10 py-2" value={vitals.vitalsDate} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="vitals-time" className="block text-sm font-bold text-gray-700 mb-1">Time</label>
          <Input id="vitals-time" type="time" className="h-10 py-2" value={vitals.vitalsTime} onChange={handleChange} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label htmlFor="height" className="block text-sm font-bold text-gray-700 mb-1">Height (cm)</label>
          <Input id="height" type="number" placeholder="Enter Height" className="h-10 py-2" value={vitals.height} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="weight" className="block text-sm font-bold text-gray-700 mb-1">Weight (kg)</label>
          <Input id="weight" placeholder="Enter Weight" className="h-10 py-2" value={vitals.weight} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="temperature" className="block text-sm font-bold text-gray-700 mb-1">Temperature (C)</label>
          <Input id="temperature" placeholder="Enter Temperature" className="h-10 py-2" value={vitals.temperature} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="spo2" className="block text-sm font-bold text-gray-700 mb-1">SPO2 (%)</label>
          <Input id="spo2" placeholder="Enter SPO2" className="h-10 py-2" value={vitals.spo2} onChange={handleChange} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="blood-pressure" className="block text-sm font-bold text-gray-700 mb-1">Blood Pressure (mmHg)</label>
          <Input id="blood-pressure" placeholder="Enter Blood Pressure" className="h-10 py-2" value={vitals.bloodPressure} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="pulse-rate" className="block text-sm font-bold text-gray-700 mb-1">Pulse rate (bpm)</label>
          <Input id="pulse-rate" placeholder="Enter Pulse Rate" className="h-10 py-2" value={vitals.pulseRate} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="respiratory-rate" className="block text-sm font-bold text-gray-700 mb-1">Respiratory rate (/min)</label>
          <Input id="respiratory-rate" placeholder="Enter Respiratory Rate" className="h-10 py-2" value={vitals.respiratoryRate} onChange={handleChange} />
        </div>
        <div className="flex items-end">
          <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-md w-full text-lg">
            Send to Doctors
          </button>
        </div>
      </div>
    </div>
  );
};

export default VitalsForm; 