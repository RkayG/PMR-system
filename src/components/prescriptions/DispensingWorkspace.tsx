'use client';

import { useState } from 'react';
import MedicationItem from './MedicationItem';

interface MedicationItemData {
  id: string;
  drugName: string;
  dosage: string;
  quantity: number;
  status: 'active' | 'pending';
  stockPack?: string;
  stockCount?: number;
  batchNumber?: string;
  expiryDate?: string;
  fmdScanned?: boolean;
  owings?: boolean;
}

interface DispensingWorkspaceProps {
  items: MedicationItemData[];
}

export default function DispensingWorkspace({ items }: DispensingWorkspaceProps) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white">
          Medication Items ({items.length})
        </h3>
        <div className="flex gap-2">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 px-2 py-1 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
            Ctrl+P to Print
          </span>
        </div>
      </div>
      {items.map((item, index) => (
        <MedicationItem
          key={item.id}
          item={item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}
