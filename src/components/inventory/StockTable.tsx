'use client';

import { useState } from 'react';
import StockTableRow from './StockTableRow';

export interface StockItem {
  id: string;
  medicineName: string;
  category: string;
  packSize: string;
  quantityOnHand: number;
  minimumLevel: number;
  batchNumber: string;
  expiry: string;
  supplier: string;
  status: 'low' | 'expiring' | 'in_stock';
  hasMultipleBatches?: boolean;
  batches?: Array<{
    batchNumber: string;
    quantity: number;
    expiry: string;
    location: string;
  }>;
}

interface StockTableProps {
  items: StockItem[];
}

export default function StockTable({ items }: StockTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedItems.size === items.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(items.map(item => item.id)));
    }
  };

  return (
    <div className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-8" scope="col">
                <input
                  className="rounded border-slate-300 text-primary focus:ring-primary size-4"
                  type="checkbox"
                  checked={selectedItems.size === items.length && items.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">
                Medicine Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">
                Pack Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">
                QoH / Min
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">
                Batch #
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">
                Expiry
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">
                Supplier
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">
                Status
              </th>
              <th className="relative px-6 py-3" scope="col">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-surface-light dark:bg-surface-dark divide-y divide-slate-200 dark:divide-slate-700">
            {items.map((item) => (
              <StockTableRow
                key={item.id}
                item={item}
                isExpanded={expandedRows.has(item.id)}
                isSelected={selectedItems.has(item.id)}
                onToggleExpand={() => toggleRow(item.id)}
                onToggleSelect={() => toggleSelect(item.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="bg-surface-light dark:bg-surface-dark px-4 py-3 flex items-center justify-between border-t border-slate-200 dark:border-slate-700 sm:px-6">
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
    </div>
  );
}

