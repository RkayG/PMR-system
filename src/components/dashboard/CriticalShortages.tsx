'use client';

import { AlertTriangle } from 'lucide-react';

interface ShortageItem {
  id: string;
  medicineName: string;
  category: string;
  stock: number;
  status: 'critical' | 'low';
  supplier: string;
}

const shortages: ShortageItem[] = [
  {
    id: '1',
    medicineName: 'Amoxicillin 500mg Caps',
    category: 'Antibiotics',
    stock: 2,
    status: 'critical',
    supplier: 'Alliance Healthcare',
  },
  {
    id: '2',
    medicineName: 'Atorvastatin 20mg Tabs',
    category: 'Cardiovascular',
    stock: 0,
    status: 'critical',
    supplier: 'AAH Pharm',
  },
  {
    id: '3',
    medicineName: 'Salbutamol 100mcg Inhaler',
    category: 'Respiratory',
    stock: 5,
    status: 'low',
    supplier: 'Phoenix Medical',
  },
];

export default function CriticalShortages() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-red-50/50 dark:bg-red-900/10">
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-red-600 dark:text-red-400 size-5" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Critical Shortages</h3>
        </div>
        <button className="text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 uppercase tracking-wide">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400">
            <tr>
              <th className="px-5 py-3 font-medium">Medicine</th>
              <th className="px-5 py-3 font-medium">Stock</th>
              <th className="px-5 py-3 font-medium">Supplier</th>
              <th className="px-5 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {shortages.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="px-5 py-4">
                  <p className="font-medium text-slate-900 dark:text-white">{item.medicineName}</p>
                  <p className="text-xs text-slate-500">{item.category}</p>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      item.status === 'critical'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}
                  >
                    {item.stock} Units
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-600 dark:text-slate-400">{item.supplier}</td>
                <td className="px-5 py-4 text-right">
                  <button className="text-primary hover:text-blue-600 font-medium text-sm">Reorder</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

