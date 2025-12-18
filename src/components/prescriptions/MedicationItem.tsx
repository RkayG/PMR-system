'use client';

import { useState } from 'react';

interface MedicationItemProps {
  item: {
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
  };
  isLast: boolean;
}

export default function MedicationItem({ item, isLast }: MedicationItemProps) {
  const [isExpanded, setIsExpanded] = useState(item.status === 'active');
  const [batchNumber, setBatchNumber] = useState(item.batchNumber || '');
  const [expiryDate, setExpiryDate] = useState(item.expiryDate || '');
  const [owings, setOwings] = useState(item.owings || false);

  if (item.status === 'pending') {
    return (
      <div
        className={`border-b border-slate-200 dark:border-slate-800 last:border-0 opacity-75 hover:opacity-100 transition-opacity ${
          isLast ? '' : 'border-b'
        }`}
      >
        <div className="p-6 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 shadow-sm">
                <span className="material-symbols-outlined">pill</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.drugName}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Dosage: {item.dosage}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Qty: {item.quantity}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Pending</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`border-b border-slate-200 dark:border-slate-800 ${isLast ? '' : 'border-b'}`}>
      {/* Header Row */}
      <div
        className="p-6 cursor-pointer bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-primary"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="size-10 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined">pill</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.drugName}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Dosage: {item.dosage}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Qty: {item.quantity}</p>
            <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">To Dispense</p>
          </div>
        </div>
      </div>

      {/* Expanded Workspace */}
      {isExpanded && (
        <div className="p-6 bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stock & Batch Form */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-white">
                  Select Stock Pack
                </label>
                <div className="relative mt-2">
                  <input
                    className="w-full rounded-md border-0 py-2 pl-3 pr-10 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 dark:bg-slate-900"
                    type="text"
                    value={item.stockPack || ''}
                    readOnly
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                  </div>
                </div>
                <p className="mt-1.5 text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">inventory_2</span>
                  {item.stockCount || 0} packs in stock
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-white">
                    Batch Number
                  </label>
                  <input
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 dark:bg-slate-900"
                    placeholder="e.g. BN-8821"
                    type="text"
                    value={batchNumber}
                    onChange={(e) => setBatchNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-white">
                    Expiry Date
                  </label>
                  <input
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 dark:bg-slate-900"
                    type="month"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white">FMD Check:</label>
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 ring-1 ring-inset ring-slate-500/10">
                    <span className="material-symbols-outlined text-[16px]">qr_code_scanner</span>
                    Not Scanned
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    className="sr-only peer"
                    type="checkbox"
                    checked={owings}
                    onChange={(e) => setOwings(e.target.checked)}
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  <span className="ml-3 text-sm font-medium text-slate-900 dark:text-white">Owings?</span>
                </label>
              </div>
            </div>

            {/* Label Preview */}
            <div className="flex flex-col h-full">
              <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-white mb-2">
                Label Preview
              </label>
              <div className="flex-1 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-4 flex flex-col justify-between">
                <div className="font-mono text-sm text-slate-800 dark:text-slate-200 leading-tight">
                  <p className="font-bold uppercase mb-2">Pharmacy PMR Ltd</p>
                  <p className="mb-4">Take ONE tablet DAILY at night.</p>
                  <p className="mb-1 font-bold">{item.drugName.toUpperCase()}</p>
                  <p className="mb-1">{item.quantity} TABLETS</p>
                  <p className="mb-4">John Doe - 12/05/2024</p>
                  <p className="text-xs">Keep out of reach of children.</p>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer for Item */}
          <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 italic">Last saved: Just now</p>
            <div className="flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-[18px]">print</span>
                Print Label
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors">
                Confirm & Next
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
