'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import FilterToolbar from './list/FilterToolbar';
import PrescriptionTable from './list/PrescriptionTable';

export default function PrescriptionsListPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <Header showSearch={false} />
      
      {/* Top Header with Breadcrumbs */}
      <header className="h-16 flex-shrink-0 bg-background-light dark:bg-background-dark/50 backdrop-blur-sm z-10 flex items-center justify-between px-6 lg:px-8 pt-4 pb-2">
        <div className="hidden lg:flex items-center">
          <Breadcrumbs
            items={[
              { label: 'Dashboard', href: '/' },
              { label: 'Prescriptions', href: null },
            ]}
          />
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <button className="p-2 text-slate-500 dark:text-gray-400 hover:text-primary hover:bg-primary/10 rounded-full transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-background-dark"></span>
          </button>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 lg:px-8 pb-8">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
          {/* Page Heading & Main Action */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
                Prescriptions List
              </h1>
              <p className="text-slate-500 dark:text-gray-400 text-sm">
                Manage and track 1,240 total records across all branches.
              </p>
            </div>
            <Link
              href="/prescriptions/new"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-sm shadow-blue-500/30 transition-all active:scale-95 font-medium text-sm"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              New Prescription
            </Link>
          </div>

          {/* Filters & Search Toolbar */}
          <FilterToolbar />

          {/* Data Table */}
          <PrescriptionTable />
        </div>
      </div>
    </div>
  );
}

