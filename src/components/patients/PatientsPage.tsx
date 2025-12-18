'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import PatientSearchPanel from './PatientSearchPanel';
import PatientProfilePanel from './PatientProfilePanel';

export default function PatientsPage() {
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>('1');

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <Header showSearch={false} />
      
      {/* Main Content Area (Split View) */}
      <main className="flex-1 flex flex-row overflow-hidden relative">
        {/* Left Panel: Search & List */}
        <PatientSearchPanel
          selectedPatientId={selectedPatientId}
          onSelectPatient={setSelectedPatientId}
        />
        
        {/* Right Panel: Patient Profile */}
        <PatientProfilePanel patientId={selectedPatientId} />
      </main>
    </div>
  );
}

