'use client';

import { ChevronRight } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  address: string;
  nhsNumber: string;
  initials: string;
}

interface PatientListItemProps {
  patient: Patient;
  isSelected: boolean;
  onClick: () => void;
}

export default function PatientListItem({ patient, isSelected, onClick }: PatientListItemProps) {
  return (
    <div
      className={`flex gap-3 px-4 py-4 border-b border-slate-100 dark:border-slate-700 cursor-pointer transition-colors ${
        isSelected
          ? 'bg-primary/5 border-l-4 border-l-primary'
          : 'hover:bg-slate-50 dark:hover:bg-slate-700/50 border-l-4 border-l-transparent'
      }`}
      onClick={onClick}
    >
      <div
        className={`rounded-full size-10 shrink-0 flex items-center justify-center font-bold text-sm ${
          isSelected
            ? 'bg-primary/10 text-primary'
            : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
        }`}
      >
        {patient.initials}
      </div>
      <div className="flex flex-1 flex-col justify-center min-w-0">
        <div className="flex justify-between items-baseline mb-0.5">
          <p className={`text-sm truncate ${
            isSelected
              ? 'text-slate-900 dark:text-white font-semibold'
              : 'text-slate-900 dark:text-white font-medium'
          }`}>
            {patient.name}
          </p>
          <span className="text-xs font-mono text-slate-500">{patient.age}y</span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-xs font-normal truncate">
          {patient.address}
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-xs font-normal font-mono mt-1">
          NHS: {patient.nhsNumber}
        </p>
      </div>
      {isSelected && (
        <div className="shrink-0 self-center">
          <ChevronRight className="size-5 text-primary" />
        </div>
      )}
    </div>
  );
}

