'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PersonalDetailsSection from './create/PersonalDetailsSection';
import AddressContactSection from './create/AddressContactSection';
import ClinicalInfoSection from './create/ClinicalInfoSection';
import NotesFlagsSection from './create/NotesFlagsSection';

export interface Allergy {
  id: string;
  substance: string;
  severity: 'low' | 'medium' | 'high';
  reaction?: string;
}

export default function CreatePatientPage() {
  const [formData, setFormData] = useState({
    // Personal Details
    title: '',
    firstName: '',
    lastName: '',
    dob: '',
    nhsNumber: '',
    gender: '',
    // Address & Contact
    postcode: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postcodeFinal: '',
    phone: '',
    email: '',
    // Clinical
    gpPractice: '',
    allergies: [] as Allergy[],
    // Notes & Flags
    notes: '',
    highRiskFlag: false,
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  const addAllergy = (substance: string, severity: 'low' | 'medium' | 'high', reaction?: string) => {
    const newAllergy: Allergy = {
      id: Date.now().toString(),
      substance,
      severity,
      reaction,
    };
    setFormData({
      ...formData,
      allergies: [...formData.allergies, newAllergy],
    });
  };

  const removeAllergy = (id: string) => {
    setFormData({
      ...formData,
      allergies: formData.allergies.filter((allergy) => allergy.id !== id),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <Header showSearch={true} />

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 md:p-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-8 pb-20">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Patients', href: '/patients' },
              { label: 'Add New', href: null },
            ]}
          />

          {/* Page Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Add New Patient
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Create a new patient record by filling out the details below.
              </p>
            </div>
          </div>

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Personal & Contact */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <PersonalDetailsSection
                title={formData.title}
                firstName={formData.firstName}
                lastName={formData.lastName}
                dob={formData.dob}
                nhsNumber={formData.nhsNumber}
                gender={formData.gender}
                onUpdate={updateField}
              />
              <AddressContactSection
                postcode={formData.postcode}
                addressLine1={formData.addressLine1}
                addressLine2={formData.addressLine2}
                city={formData.city}
                postcodeFinal={formData.postcodeFinal}
                phone={formData.phone}
                email={formData.email}
                onUpdate={updateField}
              />
            </div>

            {/* Right Column: Clinical & Notes */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <ClinicalInfoSection
                gpPractice={formData.gpPractice}
                allergies={formData.allergies}
                onUpdate={updateField}
                onAddAllergy={addAllergy}
                onRemoveAllergy={removeAllergy}
              />
              <NotesFlagsSection
                notes={formData.notes}
                highRiskFlag={formData.highRiskFlag}
                onUpdate={updateField}
              />
            </div>

            {/* Sticky Action Footer */}
            <div className="lg:col-span-12 mt-4 flex items-center justify-end gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm sticky bottom-6 z-20">
              <Link
                href="/patients"
                className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-blue-600 shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">save</span>
                Save Patient Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

