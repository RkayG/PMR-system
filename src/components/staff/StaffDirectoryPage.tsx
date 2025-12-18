'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import StaffFilters from './StaffFilters';
import StaffTable from './StaffTable';

export default function StaffDirectoryPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <Header showSearch={false} />
      
      {/* Top Bar / Breadcrumbs */}
      <header className="flex items-center justify-between px-8 py-4 bg-white dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="flex items-center text-sm">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Settings', href: '/settings' },
              { label: 'Staff Directory', href: null },
            ]}
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-850"></span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
      </header>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Page Heading */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
                Staff Directory
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-base">
                Manage access, roles, and GPhC registrations for your pharmacy team.
              </p>
            </div>
            <Link
              href="/staff/new"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>Add Staff Member</span>
            </Link>
          </div>

          {/* Filters & Search Toolbar */}
          <StaffFilters />

          {/* Data Table */}
          <StaffTable />
        </div>
      </div>
    </div>
  );
}

