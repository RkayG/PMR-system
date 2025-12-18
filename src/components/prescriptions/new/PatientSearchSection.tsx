'use client';

import { useState } from 'react';

interface Patient {
  name: string;
  age: number;
  address: string;
  dob: string;
  nhsNumber: string;
}

interface PatientSearchSectionProps {
  patient: Patient | null;
  onPatientChange: (patient: Patient) => void;
}

export default function PatientSearchSection({ patient, onPatientChange }: PatientSearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState(patient?.name || '');

  return (
    <section className="bg-white dark:bg-slate-850 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
        <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">person</span>
          Patient Details
        </h3>
        <button className="text-sm text-primary font-medium hover:underline">+ New Patient</button>
      </div>
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Search Patient
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
              </span>
              <input
                className="pl-10 pr-10 block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5"
                placeholder="Name, NHS Number, or DOB..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </span>
            </div>
          </div>
          {/* Selected Patient Info (Visual Feedback) */}
          <div className="flex-[2] bg-blue-50/50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30 p-4 flex gap-4 items-start">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2 text-blue-600 dark:text-blue-400 flex-shrink-0">
              <span className="material-symbols-outlined">id_card</span>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <p className="font-bold text-slate-900 dark:text-white text-base">
                {patient?.name || 'Johnathan Doe'} <span className="font-normal text-slate-500 dark:text-slate-400 ml-2">({patient?.age || 42}y)</span>
              </p>
              <p className="text-slate-600 dark:text-slate-300">{patient?.address || '12 Willow Creek Lane, London, NW1 8JR'}</p>
              <p className="text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">cake</span> DOB: {patient?.dob || '12/05/1982'}
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="material-symbols-outlined text-[16px]">medical_services</span> NHS: {patient?.nhsNumber || '485 992 1123'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
