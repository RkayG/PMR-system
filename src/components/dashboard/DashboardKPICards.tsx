'use client';

import { TrendingUp, CreditCard, Pill, UserPlus, Package, AlertTriangle } from 'lucide-react';

export default function DashboardKPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {/* Revenue Card */}
      <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
        <div className="flex justify-between items-start z-10">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Revenue</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">£12,450</h3>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
            <TrendingUp className="size-3.5" />
            +4.5%
          </span>
        </div>
        <div className="absolute -right-4 -bottom-4 text-slate-100 dark:text-slate-800/50 transform group-hover:scale-110 transition-transform duration-300">
          <CreditCard className="size-[100px] opacity-50" />
        </div>
      </div>

      {/* Medicines Available */}
      <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
        <div className="flex justify-between items-start z-10">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Medicines Available</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">3,420</h3>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold">
            <TrendingUp className="size-3.5" />
            +1.2%
          </span>
        </div>
        <div className="absolute -right-4 -bottom-4 text-slate-100 dark:text-slate-800/50 transform group-hover:scale-110 transition-transform duration-300">
          <Pill className="size-[100px] opacity-50" />
        </div>
      </div>

      {/* Active Patients */}
      <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
        <div className="flex justify-between items-start z-10">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Patients</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">850</h3>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
            <TrendingUp className="size-3.5" />
            +0.8%
          </span>
        </div>
        <div className="absolute -right-4 -bottom-4 text-slate-100 dark:text-slate-800/50 transform group-hover:scale-110 transition-transform duration-300">
          <UserPlus className="size-[100px] opacity-50" />
        </div>
      </div>

      {/* Low Stock Alerts */}
      <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-red-100 dark:border-red-900/30 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
        <div className="flex justify-between items-start z-10">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Low Stock Alerts</p>
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">
              12 <span className="text-sm font-normal text-slate-400">Items</span>
            </h3>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold">
            <AlertTriangle className="size-3.5" />
            Action Needed
          </span>
        </div>
        <div className="absolute -right-4 -bottom-4 text-red-50 dark:text-red-900/10 transform group-hover:scale-110 transition-transform duration-300">
          <Package className="size-[100px] opacity-50" />
        </div>
      </div>
    </div>
  );
}

