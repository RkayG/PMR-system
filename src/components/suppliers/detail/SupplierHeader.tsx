'use client';

import Link from 'next/link';

interface Supplier {
  id: string;
  name: string;
  status: 'active' | 'on_hold' | 'inactive';
  supplierId: string;
  lastUpdated: string;
  lastUpdatedBy: string;
}

interface SupplierHeaderProps {
  supplier: Supplier;
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return (
        <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
          Active
        </span>
      );
    case 'on_hold':
      return (
        <span className="inline-flex items-center rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-400">
          On Hold
        </span>
      );
    case 'inactive':
      return (
        <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
          Inactive
        </span>
      );
    default:
      return null;
  }
};

export default function SupplierHeader({ supplier }: SupplierHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            {supplier.name}
          </h1>
          {getStatusBadge(supplier.status)}
        </div>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Supplier ID: {supplier.supplierId} • Last updated by {supplier.lastUpdatedBy} on{' '}
          {supplier.lastUpdated}
        </p>
      </div>
      <div className="flex gap-3">
        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-900 dark:text-white shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
          <span className="material-symbols-outlined text-[18px]">edit</span>
          Edit Details
        </button>
        <Link
          href={`/purchase-orders/new?supplier=${supplier.id}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
          Create Purchase Order
        </Link>
      </div>
    </div>
  );
}

