'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SupplierStatsCards from './SupplierStatsCards';
import SupplierFilters from './SupplierFilters';
import SupplierTable from './SupplierTable';
import SupplierGridView from './SupplierGridView';

export default function SuppliersDirectoryPage() {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <Header showSearch={true} />

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-slate-500 dark:text-slate-400">
            <Breadcrumbs
              items={[
                { label: 'Dashboard', href: '/' },
                { label: 'Inventory', href: '/inventory' },
                { label: 'Supplier Directory', href: null },
              ]}
            />
          </nav>

          {/* Page Heading & Actions */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                Supplier Directory
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-base">
                Manage wholesale accounts, contact details, and payment terms.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">file_upload</span>
                Import
              </button>
              <Link
                href="/suppliers/new"
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-md shadow-primary/20 hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
                Add New Supplier
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <SupplierStatsCards />

          {/* Filters & Search Toolbar */}
          <SupplierFilters viewMode={viewMode} onViewModeChange={setViewMode} />

          {/* Main Data Display */}
          {viewMode === 'list' ? <SupplierTable /> : <SupplierGridView />}
        </div>
      </div>
    </div>
  );
}

