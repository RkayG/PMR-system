'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PatientContextCard from '@/components/prescriptions/PatientContextCard';
import ClinicalAlerts from '@/components/prescriptions/ClinicalAlerts';
import EndorsementsNotes from '@/components/prescriptions/EndorsementsNotes';
import DispensingWorkspace from '@/components/prescriptions/DispensingWorkspace';
import QuickStats from '@/components/prescriptions/QuickStats';

interface PrescriptionDetailsProps {
  prescriptionId: string;
}

export default function PrescriptionDetails({ prescriptionId }: PrescriptionDetailsProps) {
  const [prescription] = useState({
    id: prescriptionId,
    number: 'Rx-293849',
    status: 'Entered',
    type: 'EPS Phase 4',
    createdAt: '2 hours ago',
    createdBy: 'Dr. Sarah Mitchell',
    prescriber: 'Riverside Surgery',
    items: [
      {
        id: '1',
        drugName: 'Atorvastatin 20mg Tablets',
        dosage: 'One tablet daily at night',
        quantity: 28,
        status: 'active',
        stockPack: 'Atorvastatin 20mg (Teva UK) - 28 Tabs',
        stockCount: 12,
        batchNumber: '',
        expiryDate: '2025-05',
        fmdScanned: false,
        owings: false,
      },
      {
        id: '2',
        drugName: 'Aspirin 75mg Dispersible Tablets',
        dosage: 'One to be taken daily',
        quantity: 28,
        status: 'pending',
      },
    ],
  });

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Header showSearch={true} />
      <div className="px-6 py-3 border-b border-slate-200 dark:border-slate-800 bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm">
        <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Prescriptions', href: '/prescriptions' },
          { label: prescription.number, href: null },
        ]}
        />
      </div>
      
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-[1600px] mx-auto h-full flex flex-col gap-6">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Prescription #{prescription.number}
                </h1>
                <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">
                  {prescription.status}
                </span>
                <span className="inline-flex items-center rounded-full bg-purple-50 dark:bg-purple-900/30 px-2.5 py-0.5 text-xs font-medium text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10">
                  {prescription.type}
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Created {prescription.createdAt} by {prescription.createdBy} ({prescription.prescriber})
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-white dark:bg-surface-dark px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined text-[18px]">pause</span>
                Hold
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-white dark:bg-surface-dark px-4 py-2 text-sm font-semibold text-red-600 dark:text-red-400 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined text-[18px]">block</span>
                Reject
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Complete Dispense
              </button>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Context (Patient & Alerts) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <PatientContextCard />
              <ClinicalAlerts />
              <EndorsementsNotes />
            </div>

            {/* Right Column: Dispensing Workspace */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <DispensingWorkspace items={prescription.items} />
              <QuickStats />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
