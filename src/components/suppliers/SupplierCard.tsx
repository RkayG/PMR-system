'use client';

import Link from 'next/link';
import { Phone, Eye, MoreVertical } from 'lucide-react';
import type { Supplier } from './SupplierTable';

interface SupplierCardProps {
  supplier: Supplier;
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          Active
        </span>
      );
    case 'on_hold':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          On Hold
        </span>
      );
    case 'inactive':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
          Inactive
        </span>
      );
    default:
      return null;
  }
};

const getInitialsColor = (color: string) => {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 dark:bg-blue-900/40 text-primary',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400',
    orange: 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400',
    teal: 'bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400',
    gray: 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300',
  };
  return colorMap[color] || colorMap.gray;
};

export default function SupplierCard({ supplier }: SupplierCardProps) {
  return (
    <div className="group p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3">
          <div
            className={`h-12 w-12 rounded-lg flex items-center justify-center font-bold text-lg ${getInitialsColor(
              supplier.color
            )}`}
          >
            {supplier.initials}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
              {supplier.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{supplier.type}</p>
          </div>
        </div>
        <div className="relative">
          <button className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>
      <div className="space-y-3 mb-5">
        <div className="flex justify-between items-center py-2 border-b border-dashed border-slate-200 dark:border-slate-700">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Account ID
          </span>
          <span className="font-mono font-medium text-slate-900 dark:text-white">{supplier.accountId}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-dashed border-slate-200 dark:border-slate-700">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Contact Person
          </span>
          <span className="font-medium text-slate-900 dark:text-white">{supplier.contactPerson}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            Status
          </span>
          {getStatusBadge(supplier.status)}
        </div>
      </div>
      <div className="flex gap-2 pt-2">
        <a
          href={`tel:${supplier.phone.replace(/\s/g, '')}`}
          className="flex-1 py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-500 hover:text-primary hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
        >
          <Phone className="size-4.5" />
          Call
        </a>
        <Link
          href={`/suppliers/${supplier.id}`}
          className="flex-1 py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-500 hover:text-primary hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
        >
          <Eye className="size-4.5" />
          Details
        </Link>
      </div>
    </div>
  );
}

