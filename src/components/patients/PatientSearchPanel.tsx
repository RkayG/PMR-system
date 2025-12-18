'use client';

import { useState } from 'react';
import PatientListItem from './PatientListItem';

interface Patient {
  id: string;
  name: string;
  age: number;
  address: string;
  nhsNumber: string;
  initials: string;
}

interface PatientSearchPanelProps {
  selectedPatientId: string | null;
  onSelectPatient: (id: string) => void;
}

const patients: Patient[] = [
  {
    id: '1',
    name: 'Smith, John',
    age: 43,
    address: '12 High St, London, SW1 4BB',
    nhsNumber: '123 456 7890',
    initials: 'JS',
  },
  {
    id: '2',
    name: 'Doe, Alice',
    age: 62,
    address: '45 Maple Ave, Manchester, M1...',
    nhsNumber: '987 654 3210',
    initials: 'AD',
  },
  {
    id: '3',
    name: 'Brown, William',
    age: 28,
    address: 'Flat 3, 89 Oak Rd, Leeds, LS2...',
    nhsNumber: '456 123 7890',
    initials: 'WB',
  },
  {
    id: '4',
    name: 'Khan, Esha',
    age: 35,
    address: '22 Birch Lane, Bristol, BS1...',
    nhsNumber: '321 654 0987',
    initials: 'EK',
  },
];

export default function PatientSearchPanel({ selectedPatientId, onSelectPatient }: PatientSearchPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('waiting');

  return (
    <div className="w-full max-w-md bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col z-10 shadow-lg lg:shadow-none">
      {/* Search Header */}
      <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 sticky top-0 z-20">
        <label className="flex flex-col w-full">
          <div className="flex w-full items-stretch rounded-lg h-10 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
            <div className="flex items-center justify-center pl-3 text-slate-400">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="flex-1 bg-transparent border-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 px-3"
              placeholder="Search name, DOB, or NHS No..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </label>
        
        {/* Filter Chips */}
        <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
          <button
            className={`flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full px-3 transition-colors ${
              activeFilter === 'recent'
                ? 'bg-primary/10 border border-primary/20'
                : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
            onClick={() => setActiveFilter('recent')}
          >
            <span className={`text-xs font-medium ${
              activeFilter === 'recent'
                ? 'text-primary'
                : 'text-slate-700 dark:text-slate-200'
            }`}>Recent</span>
          </button>
          <button
            className={`flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full px-3 transition-colors ${
              activeFilter === 'waiting'
                ? 'bg-primary/10 border border-primary/20'
                : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
            onClick={() => setActiveFilter('waiting')}
          >
            <span className={`text-xs font-medium ${
              activeFilter === 'waiting'
                ? 'text-primary'
                : 'text-slate-700 dark:text-slate-200'
            }`}>Waiting (3)</span>
          </button>
          <button
            className={`flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full px-3 transition-colors ${
              activeFilter === 'delivery'
                ? 'bg-primary/10 border border-primary/20'
                : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
            onClick={() => setActiveFilter('delivery')}
          >
            <span className={`text-xs font-medium ${
              activeFilter === 'delivery'
                ? 'text-primary'
                : 'text-slate-700 dark:text-slate-200'
            }`}>Delivery</span>
          </button>
        </div>
      </div>
      
      {/* Patient List */}
      <div className="flex-1 overflow-y-auto">
        {patients.map((patient) => (
          <PatientListItem
            key={patient.id}
            patient={patient}
            isSelected={selectedPatientId === patient.id}
            onClick={() => onSelectPatient(patient.id)}
          />
        ))}
      </div>
    </div>
  );
}

