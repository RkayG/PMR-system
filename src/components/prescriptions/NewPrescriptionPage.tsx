'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PatientSearchSection from '@/components/prescriptions/new/PatientSearchSection';
import PrescriptionDetailsSection from '@/components/prescriptions/new/PrescriptionDetailsSection';
import MedicationItemsSection from '@/components/prescriptions/new/MedicationItemsSection';
import LabelPreview from '@/components/prescriptions/new/LabelPreview';

export default function NewPrescriptionPage() {
  const [prescriptionId] = useState('RX-2023-889');
  const [status] = useState('Draft');
  const [patient, setPatient] = useState({
    name: 'Johnathan Doe',
    age: 42,
    address: '12 Willow Creek Lane, London, NW1 8JR',
    dob: '12/05/1982',
    nhsNumber: '485 992 1123',
  });
  const [prescriber, setPrescriber] = useState('');
  const [issueDate, setIssueDate] = useState('2023-10-24');
  const [prescriptionType, setPrescriptionType] = useState('Acute (NHS)');
  const [medications, setMedications] = useState([
    {
      id: '1',
      drugName: 'Amoxicillin 500mg Capsules',
      form: 'CAP',
      quantity: 21,
      directions: 'One to be taken three times a day',
      inStock: true,
      stockCount: 450,
    },
  ]);
  const [hasAllergyWarning, setHasAllergyWarning] = useState(true);

  const handleAddMedication = () => {
    setMedications([
      ...medications,
      {
        id: Date.now().toString(),
        drugName: '',
        form: '',
        quantity: 0,
        directions: '',
        inStock: false,
        stockCount: 0,
      },
    ]);
  };

  const handleRemoveMedication = (id: string) => {
    setMedications(medications.filter((med) => med.id !== id));
  };

  const handleUpdateMedication = (id: string, field: string, value: string | number) => {
    setMedications(
      medications.map((med) =>
        med.id === id ? { ...med, [field]: value } : med
      )
    );
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header showSearch={false} />
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
            {/* Breadcrumbs & Heading */}
            <div className="flex flex-col gap-4">
              <Breadcrumbs
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Dispensing', href: '/prescriptions' },
                  { label: 'New Manual Prescription', href: null },
                ]}
              />
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
                    New Manual Prescription
                  </h1>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-mono font-medium">
                      ID: {prescriptionId}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                    <span className="text-slate-500 dark:text-slate-400">
                      Status: <span className="font-medium text-slate-700 dark:text-slate-300">{status}</span>
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
              {/* Left Column: Forms (2/3 width) */}
              <div className="xl:col-span-2 flex flex-col gap-6">
                <PatientSearchSection
                  patient={patient}
                  onPatientChange={setPatient}
                />
                <PrescriptionDetailsSection
                  prescriber={prescriber}
                  onPrescriberChange={setPrescriber}
                  issueDate={issueDate}
                  onIssueDateChange={setIssueDate}
                  prescriptionType={prescriptionType}
                  onPrescriptionTypeChange={setPrescriptionType}
                />
                <MedicationItemsSection
                  medications={medications}
                  onAdd={handleAddMedication}
                  onRemove={handleRemoveMedication}
                  onUpdate={handleUpdateMedication}
                />

                {/* Main Actions Footer */}
                <div className="flex items-center justify-between pt-2 pb-10">
                  <button className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    Save as Draft
                  </button>
                  <button className="px-8 py-2.5 rounded-lg bg-primary text-white font-bold shadow-md hover:bg-blue-600 transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined">print</span>
                    Process Prescription
                  </button>
                </div>
              </div>

              {/* Right Column: Label Preview (Sticky) */}
              <div className="xl:col-span-1 sticky top-0">
                <LabelPreview
                  patient={patient}
                  medications={medications}
                  prescriptionId={prescriptionId}
                  issueDate={issueDate}
                  hasAllergyWarning={hasAllergyWarning}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
