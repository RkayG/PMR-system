'use client';

import Link from 'next/link';
import { Phone, Mail, Eye, Edit, Trash2 } from 'lucide-react';

export interface Supplier {
  id: string;
  name: string;
  type: string;
  accountId: string;
  contactPerson: string;
  phone: string;
  email: string;
  paymentTerms: string;
  status: 'active' | 'on_hold' | 'inactive';
  initials: string;
  color: string;
}

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

export default function SupplierTable() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
              <th className="px-6 py-4">Supplier Name</th>
              <th className="px-6 py-4">Account ID</th>
              <th className="px-6 py-4">Contact Person</th>
              <th className="px-6 py-4">Contact Info</th>
              <th className="px-6 py-4">Payment Terms</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
            {suppliers.map((supplier) => (
              <tr
                key={supplier.id}
                className="group hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-lg flex items-center justify-center font-bold ${getInitialsColor(
                        supplier.color
                      )}`}
                    >
                      {supplier.initials}
                    </div>
                    <div>
                      <Link
                        href={`/suppliers/${supplier.id}`}
                        className="font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors"
                      >
                        {supplier.name}
                      </Link>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{supplier.type}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-500 dark:text-slate-400 font-mono">
                  {supplier.accountId}
                </td>
                <td className="px-6 py-4 text-slate-900 dark:text-white">{supplier.contactPerson}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <a
                      className="flex items-center gap-1.5 text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary font-medium group/link"
                      href={`tel:${supplier.phone.replace(/\s/g, '')}`}
                    >
                      <Phone className="size-4 text-slate-500 group-hover/link:text-primary" />
                      {supplier.phone}
                    </a>
                    <a
                      className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-xs truncate max-w-[160px]"
                      href={`mailto:${supplier.email}`}
                    >
                      <Mail className="size-4" />
                      {supplier.email}
                    </a>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-900 dark:text-white">{supplier.paymentTerms}</td>
                <td className="px-6 py-4">{getStatusBadge(supplier.status)}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href={`/suppliers/${supplier.id}`}
                      className="p-2 text-slate-500 hover:text-primary hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye className="size-5" />
                    </Link>
                    <button
                      className="p-2 text-slate-500 hover:text-primary hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit className="size-5" />
                    </button>
                    <button
                      className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="size-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
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
    </div>
  );
}

