'use client';

import { useState } from 'react';

interface SupplierFiltersProps {
  viewMode: 'list' | 'grid';
  onViewModeChange: (mode: 'list' | 'grid') => void;
}

export default function SupplierFilters({ viewMode, onViewModeChange }: SupplierFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [paymentTermsFilter, setPaymentTermsFilter] = useState('Payment Terms');

  return (
    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
      <div className="relative w-full md:max-w-md">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">
          search
        </span>
        <input
          className="w-full pl-10 pr-4 py-2.5 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white placeholder:text-slate-500"
          placeholder="Search by supplier name, account ID or postcode..."
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex w-full md:w-auto gap-3 items-center overflow-x-auto pb-2 md:pb-0">
        <div className="relative min-w-[140px]">
          <select
            className="appearance-none w-full px-3 py-2.5 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 pr-8 cursor-pointer"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Statuses</option>
            <option>Active</option>
            <option>On Hold</option>
            <option>Inactive</option>
          </select>
          <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-lg">
            expand_more
          </span>
        </div>
        <div className="relative min-w-[160px]">
          <select
            className="appearance-none w-full px-3 py-2.5 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 pr-8 cursor-pointer"
            value={paymentTermsFilter}
            onChange={(e) => setPaymentTermsFilter(e.target.value)}
          >
            <option>Payment Terms</option>
            <option>Net 30 Days</option>
            <option>Net 60 Days</option>
            <option>COD</option>
          </select>
          <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-lg">
            expand_more
          </span>
        </div>
        <button className="p-2.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
          <span className="material-symbols-outlined">tune</span>
        </button>
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
        <div className="flex bg-background-light dark:bg-background-dark p-1 rounded-lg border border-slate-200 dark:border-slate-700">
          <button
            className={`p-1.5 rounded transition-colors ${
              viewMode === 'list'
                ? 'bg-surface-light dark:bg-surface-dark text-primary shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
            title="List View"
            onClick={() => onViewModeChange('list')}
          >
            <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
          </button>
          <button
            className={`p-1.5 rounded transition-colors ${
              viewMode === 'grid'
                ? 'bg-surface-light dark:bg-surface-dark text-primary shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
            title="Grid View"
            onClick={() => onViewModeChange('grid')}
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
          </button>
        </div>
      </div>
    </div>
  );
}

