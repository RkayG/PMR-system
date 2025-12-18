'use client';

import { Badge } from 'lucide-react';

interface SupplierIdentitySectionProps {
  supplierName: string;
  accountReference: string;
  onUpdate: (field: string, value: string) => void;
}

export default function SupplierIdentitySection({
  supplierName,
  accountReference,
  onUpdate,
}: SupplierIdentitySectionProps) {
  return (
    <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700/50">
      <h3 className="flex items-center gap-2 text-slate-900 dark:text-white text-lg font-bold leading-tight mb-6">
        <Badge className="text-primary size-5" />
        Supplier Identity
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
            Supplier Name <span className="text-red-500">*</span>
          </p>
          <input
            className="flex w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base transition-all"
            placeholder="e.g. Phoenix Medical Supplies"
            required
            value={supplierName}
            onChange={(e) => onUpdate('supplierName', e.target.value)}
          />
        </label>
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
            Account Reference / Code
          </p>
          <input
            className="flex w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base transition-all"
            placeholder="e.g. SUP-PHX-001"
            value={accountReference}
            onChange={(e) => onUpdate('accountReference', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

