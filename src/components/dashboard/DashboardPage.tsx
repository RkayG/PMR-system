'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import DashboardKPICards from './DashboardKPICards';
import RevenueChart from './RevenueChart';
import InventoryStatus from './InventoryStatus';
import CriticalShortages from './CriticalShortages';
import RecentActivity from './RecentActivity';

export default function DashboardPage() {
  const [timePeriod, setTimePeriod] = useState<'today' | 'week' | 'month'>('today');

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <Header showSearch={true} />

      {/* Dashboard Content */}
      <div className="flex-1 overflow-y-auto p-6 lg:p-8">
        <div className="max-w-[1600px] mx-auto space-y-6">
          {/* Page Title & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Welcome back, here's what's happening in your pharmacy today.
              </p>
            </div>
            <div className="flex items-center bg-white dark:bg-surface-dark rounded-lg p-1 border border-slate-200 dark:border-slate-700 shadow-sm">
              <button
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                  timePeriod === 'today'
                    ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
                onClick={() => setTimePeriod('today')}
              >
                Today
              </button>
              <button
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                  timePeriod === 'week'
                    ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
                onClick={() => setTimePeriod('week')}
              >
                This Week
              </button>
              <button
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                  timePeriod === 'month'
                    ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
                onClick={() => setTimePeriod('month')}
              >
                This Month
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <DashboardKPICards />

          {/* Main Charts Area */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <RevenueChart />
            <InventoryStatus />
          </div>

          {/* Bottom Section: Alerts & Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
            <CriticalShortages />
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}

