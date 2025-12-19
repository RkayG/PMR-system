'use client';

import Link from 'next/link';
import { EllipsisVertical } from 'lucide-react';

interface Prescription {
  id: string;
  rxNumber: string;
  status: 'dispensed' | 'entered' | 'labelling' | 'collected' | 'cancelled';
  patientName: string;
  patientDob: string;
  drugName: string;
  quantity: string;
  directions: string;
  issueDate: string;
  lastActionBy: {
    name: string;
    role: string;
    initials: string;
    color: string;
  };
  isEPS?: boolean;
}

const prescriptions: Prescription[] = [
  {
    id: '1',
    rxNumber: 'FP10-99823',
    status: 'dispensed',
    patientName: 'John Smith',
    patientDob: '12/04/1958',
    drugName: 'Amoxicillin 500mg Caps',
    quantity: '21',
    directions: 'Take one three times a day',
    issueDate: 'Oct 24, 2023',
    lastActionBy: {
      name: 'Tech. Sarah J.',
      role: 'technician',
      initials: 'SJ',
      color: 'orange',
    },
    isEPS: true,
  },
  {
    id: '2',
    rxNumber: 'FP10-99824',
    status: 'entered',
    patientName: 'Mary Jenkins',
    patientDob: '05/09/1982',
    drugName: 'Atorvastatin 20mg Tabs',
    quantity: '28',
    directions: 'One to be taken daily',
    issueDate: 'Oct 24, 2023',
    lastActionBy: {
      name: 'Pharm. David L.',
      role: 'pharmacist',
      initials: 'DL',
      color: 'purple',
    },
  },
  {
    id: '3',
    rxNumber: 'FP10-99830',
    status: 'labelling',
    patientName: 'James Green',
    patientDob: '22/11/1975',
    drugName: 'Ramipril 5mg Caps',
    quantity: '28',
    directions: 'One daily',
    issueDate: 'Oct 24, 2023',
    lastActionBy: {
      name: 'Tech. Sarah J.',
      role: 'technician',
      initials: 'SJ',
      color: 'orange',
    },
  },
  {
    id: '4',
    rxNumber: 'FP10-99810',
    status: 'collected',
    patientName: 'Robert Brown',
    patientDob: '15/02/1945',
    drugName: 'Omeprazole 20mg Caps',
    quantity: '28',
    directions: 'One each morning',
    issueDate: 'Oct 23, 2023',
    lastActionBy: {
      name: 'Clerk Emma W.',
      role: 'clerk',
      initials: 'EW',
      color: 'blue',
    },
  },
  {
    id: '5',
    rxNumber: 'FP10-99755',
    status: 'cancelled',
    patientName: 'Susan White',
    patientDob: '30/08/1990',
    drugName: 'Sertraline 50mg Tabs',
    quantity: '28',
    directions: 'As directed',
    issueDate: 'Oct 22, 2023',
    lastActionBy: {
      name: 'Dr. A. Miller',
      role: 'doctor',
      initials: 'AM',
      color: 'gray',
    },
  },
];

const getStatusBadge = (status: string) => {
  const statusConfig = {
    dispensed: {
      label: 'Dispensed',
      bg: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-800 dark:text-green-400',
      border: 'border-green-200 dark:border-green-800',
      dot: 'bg-green-500',
    },
    entered: {
      label: 'Entered',
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-800 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-800',
      dot: 'bg-blue-500',
    },
    labelling: {
      label: 'Labelling',
      bg: 'bg-amber-100 dark:bg-amber-900/30',
      text: 'text-amber-800 dark:text-amber-400',
      border: 'border-amber-200 dark:border-amber-800',
      dot: 'bg-amber-500',
    },
    collected: {
      label: 'Collected',
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      text: 'text-purple-800 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-800',
      dot: 'bg-purple-500',
    },
    cancelled: {
      label: 'Cancelled',
      bg: 'bg-red-100 dark:bg-red-900/30',
      text: 'text-red-800 dark:text-red-400',
      border: 'border-red-200 dark:border-red-800',
      dot: 'bg-red-500',
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.entered;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text} border ${config.border}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
      {config.label}
    </span>
  );
};

const getAvatarColor = (color: string) => {
  const colorMap: Record<string, string> = {
    orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    gray: 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400',
  };
  return colorMap[color] || colorMap.gray;
};

export default function PrescriptionTable() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider w-32">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                Rx Number
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                Patient Name
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider w-1/4">
                Drug Details
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                Issue Date
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                Last Action By
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {prescriptions.map((prescription) => (
              <tr
                key={prescription.id}
                className="group hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(prescription.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/prescriptions/${prescription.id}`}
                      className={`font-mono text-sm ${
                        prescription.status === 'cancelled'
                          ? 'line-through text-gray-400'
                          : 'text-slate-900 dark:text-gray-200 hover:text-primary'
                      }`}
                    >
                      {prescription.rxNumber}
                    </Link>
                    {prescription.isEPS && (
                      <span
                        className="material-symbols-outlined text-[16px] text-green-600 dark:text-green-400"
                        title="EPS Prescription"
                      >
                        electric_bolt
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    <Link
                      href={`/patients`}
                      className="text-sm font-medium text-primary hover:text-blue-600 hover:underline"
                    >
                      {prescription.patientName}
                    </Link>
                    <span className="text-xs text-slate-500 dark:text-gray-500">
                      DOB: {prescription.patientDob}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-900 dark:text-gray-200 font-medium">
                      {prescription.drugName}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-gray-500">
                      Qty: {prescription.quantity} | {prescription.directions}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-slate-500 dark:text-gray-400">
                    {prescription.issueDate}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-full ${getAvatarColor(
                        prescription.lastActionBy.color
                      )} flex items-center justify-center text-[10px] font-bold`}
                    >
                      {prescription.lastActionBy.initials}
                    </div>
                    <span className="text-sm text-slate-900 dark:text-gray-300">
                      {prescription.lastActionBy.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="p-1.5 rounded-md text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <EllipsisVertical className="size-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="bg-gray-50/50 dark:bg-slate-800/50 px-6 py-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <div className="text-xs text-slate-500 dark:text-gray-400">
          Showing <span className="font-medium text-slate-900 dark:text-gray-200">1</span> to{' '}
          <span className="font-medium text-slate-900 dark:text-gray-200">5</span> of{' '}
          <span className="font-medium text-slate-900 dark:text-gray-200">1,240</span> results
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 text-xs font-medium rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-gray-300 disabled:opacity-50 cursor-not-allowed"
            disabled
          >
            Previous
          </button>
          <button className="px-3 py-1 text-xs font-medium rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

