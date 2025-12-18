'use client';

import Link from 'next/link';
import PatientProfileHeader from './PatientProfileHeader';
import PatientClinicalAlerts from './PatientClinicalAlerts';
import PatientInfoGrid from './PatientInfoGrid';
import PatientTabs from './PatientTabs';

interface PatientProfilePanelProps {
  patientId: string | null;
}

export default function PatientProfilePanel({ patientId }: PatientProfilePanelProps) {
  if (!patientId) {
    return (
      <div className="flex-1 bg-background-light dark:bg-background-dark overflow-y-auto w-full flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4">person_search</span>
          <p className="text-slate-500 dark:text-slate-400">Select a patient to view their profile</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark overflow-y-auto w-full">
      {/* Top Actions/Breadcrumbs */}
      <div className="px-8 py-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span>Patients</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-slate-900 dark:text-white font-medium">Profile</span>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center rounded-lg h-9 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 gap-2 text-sm font-medium px-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-[18px]">print</span>
            Print Summary
          </button>
          <Link
            href="/prescriptions/new"
            className="flex items-center justify-center rounded-lg h-9 bg-primary text-white gap-2 text-sm font-medium px-4 shadow-sm hover:bg-blue-600 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Prescription
          </Link>
        </div>
      </div>
      
      {/* Profile Content Container */}
      <div className="max-w-5xl mx-auto p-6 lg:p-8 space-y-6">
        <PatientProfileHeader patientId={patientId} />
        <PatientClinicalAlerts patientId={patientId} />
        <PatientInfoGrid patientId={patientId} />
        <PatientTabs patientId={patientId} />
      </div>
    </div>
  );
}

