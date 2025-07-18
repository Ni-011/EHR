import React from 'react';
import { Input } from '@/components/ui/input';

const VitalsForm = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Vital Signs</h2>
    <hr className="border-t border-gray-300 my-4" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="vitals-date" className="block text-sm font-bold text-gray-700 mb-1">Date</label>
        <Input id="vitals-date" type="date" className="h-10 py-2" />
      </div>
      <div>
        <label htmlFor="vitals-time" className="block text-sm font-bold text-gray-700 mb-1">Time</label>
        <Input id="vitals-time" type="time" className="h-10 py-2" />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
      <div>
        <label htmlFor="height" className="block text-sm font-bold text-gray-700 mb-1">Height (cm)</label>
        <Input id="height" type="number" placeholder="Enter Height" className="h-10 py-2" />
      </div>
      <div>
        <label htmlFor="weight" className="block text-sm font-bold text-gray-700 mb-1">Weight (kg)</label>
        <Input id="weight" placeholder="Enter Weight" className="h-10 py-2" />
      </div>
      <div>
        <label htmlFor="temperature" className="block text-sm font-bold text-gray-700 mb-1">Temperature (C)</label>
        <Input id="temperature" placeholder="Enter Temperature" className="h-10 py-2" />
      </div>
      <div>
        <label htmlFor="spo2" className="block text-sm font-bold text-gray-700 mb-1">SPO2 (%)</label>
        <Input id="spo2" placeholder="Enter SPO2" className="h-10 py-2" />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <label htmlFor="blood-pressure" className="block text-sm font-bold text-gray-700 mb-1">Blood Pressure (mmHg)</label>
        <Input id="blood-pressure" placeholder="Enter Blood Pressure" className="h-10 py-2" />
      </div>
      <div>
        <label htmlFor="pulse-rate" className="block text-sm font-bold text-gray-700 mb-1">Pulse rate (bpm)</label>
        <Input id="pulse-rate" placeholder="Enter Pulse Rate" className="h-10 py-2" />
      </div>
      <div>
        <label htmlFor="respiratory-rate" className="block text-sm font-bold text-gray-700 mb-1">Respiratory rate (/min)</label>
        <Input id="respiratory-rate" placeholder="Enter Respiratory Rate" className="h-10 py-2" />
      </div>
      <div className="flex items-end">
        <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-md w-full text-lg">
          Send to Doctors
        </button>
      </div>
    </div>
  </div>
);

export default VitalsForm; 