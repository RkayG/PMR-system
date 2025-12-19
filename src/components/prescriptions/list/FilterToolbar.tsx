'use client';

import { ChevronDown, Download, Search } from 'lucide-react';
import { useState } from 'react';

export default function FilterToolbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('Last 7 Days');
  const [prescriberFilter, setPrescriberFilter] = useState('All');

  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 flex flex-col xl:flex-row gap-4">
      {/* Search Bar */}
      <div className="flex-1 min-w-[300px]">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="size-5 text-gray-400 group-focus-within:text-primary transition-colors" />
          </div>
          <input
            className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-background-light dark:bg-background-dark text-slate-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50 text-sm font-normal transition-shadow"
            placeholder="Search by Rx ID (e.g. 84930), Patient Name, or Drug..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <kbd className="hidden sm:inline-block border border-gray-200 dark:border-gray-700 rounded px-1.5 py-0.5 text-[10px] font-sans font-medium text-gray-400">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 xl:justify-end">
        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1 hidden xl:block"></div>
        
        {/* Status Filter */}
        <div className="relative">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background-light dark:bg-background-dark hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-900 dark:text-gray-200 text-sm font-medium transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
            <span className="text-slate-500 dark:text-gray-500">Status:</span>
            <span>{statusFilter}</span>
            <ChevronDown className="size-5 text-gray-400" />
          </button>
        </div>

        {/* Date Filter */}
        <div className="relative">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background-light dark:bg-background-dark hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-900 dark:text-gray-200 text-sm font-medium transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
            <span className="text-slate-500 dark:text-gray-500">Date:</span>
            <span>{dateFilter}</span>
            <ChevronDown className="size-5 text-gray-400" />
          </button>
        </div>

        {/* Prescriber Filter */}
        <div className="relative">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background-light dark:bg-background-dark hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-900 dark:text-gray-200 text-sm font-medium transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
            <span className="text-slate-500 dark:text-gray-500">Prescriber:</span>
            <span>{prescriberFilter}</span>
            <ChevronDown className="size-5 text-gray-400" />
          </button>
        </div>

        {/* Export Button */}
        <button
          className="flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-primary/10 transition-colors ml-1"
          title="Export List"
        >
          <Download className="size-5" />
        </button>
      </div>
    </div>
  );
}

