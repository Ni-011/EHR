import React from 'react';

const Header = () => {
  return (
    <div className="bg-blue-500 p-4 text-white flex flex-wrap items-center justify-between">
      <div className="flex flex-col items-start">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">EHR System - Medical Claim Form</h1>
        <p className="text-xs sm:text-sm mt-2">Healthcare Medica center - 123 Medical Plaza, healthcare City, HC 12345</p>
      </div>
      <div className="flex flex-wrap space-x-2 mt-4 sm:mt-0">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0">
          Logo
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0">
          Preview Form
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default Header; 