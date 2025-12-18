'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import StockReceivingForm from './receive/StockReceivingForm';
import SessionSummary from './receive/SessionSummary';
import TotalValueCard from './receive/TotalValueCard';

interface StockItem {
  id: string;
  medicineName: string;
  batchNumber: string;
  quantity: number;
}

export default function ReceiveStockPage() {
  const [sessionItems, setSessionItems] = useState<StockItem[]>([
    {
      id: '1',
      medicineName: 'Paracetamol 500mg Tabs',
      batchNumber: '82991-X',
      quantity: 100,
    },
    {
      id: '2',
      medicineName: 'Ibuprofen 400mg Tabs',
      batchNumber: 'IB-9283',
      quantity: 24,
    },
    {
      id: '3',
      medicineName: 'Omeprazole 20mg Caps',
      batchNumber: 'OM-2212',
      quantity: 50,
    },
  ]);

  const handleAddItem = (item: StockItem) => {
    setSessionItems([...sessionItems, item]);
  };

  const handleRemoveItem = (id: string) => {
    setSessionItems(sessionItems.filter((item) => item.id !== id));
  };

  const totalValue = 1240.5; // Mock value

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <Header showSearch={true} />

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm">
            <Breadcrumbs
              items={[
                { label: 'Inventory', href: '/inventory' },
                { label: 'Stock Receiving', href: null },
              ]}
            />
          </div>

          {/* Page Heading */}
          <div className="flex flex-wrap justify-between items-end gap-4 pb-2">
            <div className="flex flex-col gap-1">
              <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
                Stock Intake
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
                Record new deliveries and update batch details efficiently.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">history</span>
                History
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-sm shadow-blue-500/20">
                <span className="material-symbols-outlined text-[20px]">print</span>
                Print Labels
              </button>
            </div>
          </div>

          {/* Layout Grid: Form (Left) & Summary (Right) */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
            {/* LEFT COLUMN: Main Form */}
            <div className="xl:col-span-2 flex flex-col gap-6">
              <StockReceivingForm onAddItem={handleAddItem} />
            </div>

            {/* RIGHT COLUMN: Summary / Recent Activity */}
            <div className="xl:col-span-1 flex flex-col gap-6">
              <SessionSummary items={sessionItems} onRemoveItem={handleRemoveItem} />
              <TotalValueCard totalValue={totalValue} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

