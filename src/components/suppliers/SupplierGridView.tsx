'use client';

import SupplierCard from './SupplierCard';
import type { Supplier } from './SupplierTable';

const suppliers: Supplier[] = [
  {
    id: '1',
    name: 'Alliance Healthcare',
    type: 'Wholesale',
    accountId: 'AH-88291',
    contactPerson: 'John Doe',
    phone: '020 7946 0123',
    email: 'orders@alliance.co.uk',
    paymentTerms: 'Net 30 Days',
    status: 'active',
    initials: 'AH',
    color: 'blue',
  },
  {
    id: '2',
    name: 'Phoenix Medical',
    type: 'Direct',
    accountId: 'PH-22104',
    contactPerson: 'Sarah Jenkins',
    phone: '0161 496 0999',
    email: 'accounts@phoenix.co.uk',
    paymentTerms: 'Net 60 Days',
    status: 'active',
    initials: 'PM',
    color: 'indigo',
  },
  {
    id: '3',
    name: 'Sigma Pharmaceuticals',
    type: 'Specials',
    accountId: 'SG-10023',
    contactPerson: 'David Miller',
    phone: '01923 444 999',
    email: 'dmiller@sigmapharma.co.uk',
    paymentTerms: 'COD',
    status: 'on_hold',
    initials: 'SP',
    color: 'orange',
  },
  {
    id: '4',
    name: 'AAH Pharma',
    type: 'Wholesale',
    accountId: 'AA-56721',
    contactPerson: 'Central Support',
    phone: '02476 123 456',
    email: 'support@aah.co.uk',
    paymentTerms: 'Net 30 Days',
    status: 'active',
    initials: 'AA',
    color: 'teal',
  },
  {
    id: '5',
    name: 'MedEx Logistics',
    type: 'Courier',
    accountId: 'ME-99102',
    contactPerson: 'Lisa Wong',
    phone: '0121 333 4444',
    email: 'dispatch@medex.com',
    paymentTerms: 'Monthly',
    status: 'inactive',
    initials: 'ME',
    color: 'gray',
  },
];

export default function SupplierGridView() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suppliers.map((supplier) => (
          <SupplierCard key={supplier.id} supplier={supplier} />
        ))}
      </div>
      {/* Pagination */}
      <div className="bg-surface-light dark:bg-surface-dark p-4 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-between shadow-sm">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing <span className="font-medium text-slate-900 dark:text-white">1-5</span> of{' '}
          <span className="font-medium text-slate-900 dark:text-white">48</span> suppliers
        </p>
        <div className="flex gap-2">
          <button
            className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-sm disabled:opacity-50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors"
            disabled
          >
            Previous
          </button>
          <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors">
            Next
          </button>
        </div>
      </div>
    </>
  );
}

