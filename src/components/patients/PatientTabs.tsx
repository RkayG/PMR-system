'use client';

import { useState } from 'react';
import PrescriptionTable from './PrescriptionTable';

interface PatientTabsProps {
  patientId: string;
}

const tabs = [
  { id: 'active', label: 'Active Prescriptions' },
  { id: 'history', label: 'History' },
  { id: 'notes', label: 'Notes' },
  { id: 'documents', label: 'Documents' },
];

export default function PatientTabs({ patientId }: PatientTabsProps) {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
      <div className="border-b border-slate-200 dark:border-slate-700 px-6">
        <nav aria-label="Tabs" className="-mb-px flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`border-b-2 py-4 px-1 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="p-0">
        {activeTab === 'active' && <PrescriptionTable patientId={patientId} />}
        {activeTab === 'history' && (
          <div className="p-6 text-center text-slate-500 dark:text-slate-400">
            Prescription history will be displayed here
          </div>
        )}
        {activeTab === 'notes' && (
          <div className="p-6 text-center text-slate-500 dark:text-slate-400">
            Patient notes will be displayed here
          </div>
        )}
        {activeTab === 'documents' && (
          <div className="p-6 text-center text-slate-500 dark:text-slate-400">
            Patient documents will be displayed here
          </div>
        )}
      </div>
    </div>
  );
}

