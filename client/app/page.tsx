'use client'
import React, { useState } from "react";
import Header from "./components/Header";
import NavigationTabs from "./components/NavigationTabs";
import PatientInformationForm from "./components/forms/PatientInformationForm";
import VisitDetailsForm from "./components/forms/VisitDetailsForm";
import VitalsForm from "./components/forms/VitalsForm";
import TrackerForm from "./components/forms/TrackerForm";
import ClinicalNotesForm from "./components/forms/ClinicalNotesForm";
import OrdersForm from "./components/forms/OrdersForm";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Patient Information");

  const renderForm = () => {
    switch (activeTab) {
      case "Patient Information":
        return <PatientInformationForm />;
      case "Visit Details":
        return <VisitDetailsForm />;
      case "Vitals":
        return <VitalsForm />;
      case "Tracker":
        return <TrackerForm />;
      case "Clinical Notes":
        return <ClinicalNotesForm />;
      case "Orders":
        return <OrdersForm />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col border border-gray-300 mt-5 rounded-lg shadow-md bg-white mx-4">
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="p-2">
          {renderForm()}
        </main>
      </div>
    </div>
  );
}
