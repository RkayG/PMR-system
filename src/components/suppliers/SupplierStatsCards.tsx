'use client';

import { Warehouse, Clock, CheckCircle2 } from 'lucide-react';

export default function SupplierStatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
            <Warehouse className="size-5" />
          </div>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Suppliers</span>
        </div>
        <p className="text-3xl font-bold text-slate-900 dark:text-white">48</p>
      </div>
      <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
            <Clock className="size-5" />
          </div>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Outstanding Orders</span>
        </div>
        <p className="text-3xl font-bold text-slate-900 dark:text-white">12</p>
      </div>
      <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="size-5" />
          </div>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Accounts</span>
        </div>
        <p className="text-3xl font-bold text-slate-900 dark:text-white">45</p>
      </div>
    </div>
  );
}

