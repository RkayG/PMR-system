'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import KPICards from '@/components/inventory/KPICards';
import SearchAndFilters from '@/components/inventory/SearchAndFilters';
import StockTable from '@/components/inventory/StockTable';
import StockGridView from '@/components/inventory/StockGridView';
import type { StockItem } from '@/components/inventory/StockTable';

const stockItems: StockItem[] = [
  {
    id: '1',
    medicineName: 'Amoxicillin 500mg Caps',
    category: 'Generic • Oral',
    packSize: '28 Pack',
    quantityOnHand: 4,
    minimumLevel: 10,
    batchNumber: 'A4599',
    expiry: '12/2024',
    supplier: 'AAH Pharma',
    status: 'low',
  },
  {
    id: '2',
    medicineName: 'Atorvastatin 20mg Tabs',
    category: 'Generic • Oral',
    packSize: '28 Pack',
    quantityOnHand: 12,
    minimumLevel: 10,
    batchNumber: 'C1122',
    expiry: '10 Oct 2023',
    supplier: 'Phoenix',
    status: 'expiring',
  },
  {
    id: '3',
    medicineName: 'Paracetamol 500mg Tabs',
    category: 'Generic • P-Med',
    packSize: '100 Pack',
    quantityOnHand: 142,
    minimumLevel: 50,
    batchNumber: 'B9921',
    expiry: '06/2025',
    supplier: 'Alliance',
    status: 'in_stock',
  },
  {
    id: '4',
    medicineName: 'Metformin 500mg Tabs',
    category: 'Brand: Glucophage',
    packSize: '84 Pack',
    quantityOnHand: 88,
    minimumLevel: 20,
    batchNumber: 'Multiple (3)',
    expiry: 'Various',
    supplier: 'AAH Pharma',
    status: 'in_stock',
    hasMultipleBatches: true,
    batches: [
      { batchNumber: 'GH7721', quantity: 28, expiry: '08/2024', location: 'Shelf A-2' },
      { batchNumber: 'JK8822', quantity: 60, expiry: '11/2025', location: 'Shelf A-2' },
    ],
  },
  {
    id: '5',
    medicineName: 'Lansoprazole 30mg Caps',
    category: 'Generic • Gastro',
    packSize: '28 Pack',
    quantityOnHand: 45,
    minimumLevel: 15,
    batchNumber: 'L9910',
    expiry: '01/2026',
    supplier: 'Sigma',
    status: 'in_stock',
  },
];

export default function InventoryPage() {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background-light dark:bg-background-dark">
        {/* Top Header */}
        <header className="bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-1 rounded-md text-slate-500 hover:bg-slate-100">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Inventory Overview</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Manage stock levels, batches, and expiry dates.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center size-10 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-surface-dark"></span>
            </button>
            <button className="flex items-center justify-center size-10 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="flex items-center justify-center size-10 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
          </div>
        </header>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-[1400px] mx-auto space-y-6">
            <KPICards />
            <SearchAndFilters viewMode={viewMode} onViewModeChange={setViewMode} />
            
            {viewMode === 'list' ? (
              <StockTable items={stockItems} />
            ) : (
              <>
                <StockGridView items={stockItems} />
                {/* Pagination */}
                <div className="bg-surface-light dark:bg-surface-dark px-4 py-3 flex items-center justify-between border border-slate-200 dark:border-slate-700 rounded-xl sm:px-6 shadow-sm">
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-slate-700 dark:text-slate-400">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">248</span> results
                      </p>
                    </div>
                    <div>
                      <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                        <a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700" href="#">
                          <span className="sr-only">Previous</span>
                          <span className="material-symbols-outlined text-sm">chevron_left</span>
                        </a>
                        <a aria-current="page" className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">1</a>
                        <a className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">2</a>
                        <a className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">3</a>
                        <a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700" href="#">
                          <span className="sr-only">Next</span>
                          <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

