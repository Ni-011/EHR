import React, { useState } from 'react';

interface NavigationTabsProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ setActiveTab, activeTab }) => {
  const tabs = [
    "Patient Information",
    "Visit Details",
    "Vitals",
    "Tracker",
    "Clinical Notes",
    "Orders",
  ];

  return (
    <div className="flex flex-wrap justify-center sm:justify-start p-2 mt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 mx-1 sm:mx-1 mb-2 sm:mb-0 rounded-md ${activeTab === tab ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-200'}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs; 