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
    "Clinical Notes",
    "Orders",
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-center sm:justify-start">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`py-2 hover:cursor-pointer px-4 mb-2 sm:mb-0 ${activeTab === tab ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-200'} font-bold
            ${index === 0 ? 'rounded-tl-md' : ''} ${index === tabs.length - 1 ? 'rounded-tr-md' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <hr className="border-t border-gray-300 mx-2" />
    </div>
  );
};

export default NavigationTabs; 