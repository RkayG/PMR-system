'use client';

import Link from 'next/link';

interface PrescriptionTableProps {
  patientId: string;
}

interface Prescription {
  id: string;
  date: string;
  item: string;
  quantity: string;
  prescriber: string;
  dosage: string;
  status: 'labelled' | 'ready' | 'collected';
}

export default function PrescriptionTable({ patientId }: PrescriptionTableProps) {
  // Mock data - will be replaced with API call
  const prescriptions: Prescription[] = [
    {
      id: '1',
      date: 'Today',
      item: 'Amoxicillin 500mg Caps',
      quantity: '21 Capsules',
      prescriber: 'Dr. A. Jones',
      dosage: 'One three times daily',
      status: 'labelled',
    },
    {
      id: '2',
      date: 'Today',
      item: 'Metformin 500mg Tabs',
      quantity: '56 Tablets',
      prescriber: 'Dr. A. Jones',
      dosage: 'One with morning meal',
      status: 'ready',
    },
    {
      id: '3',
      date: '12-Oct-2023',
      item: 'Atorvastatin 20mg Tabs',
      quantity: '28 Tablets',
      prescriber: 'Dr. A. Jones',
      dosage: 'One at night',
      status: 'collected',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'labelled':
        return (
          <span className="inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:text-yellow-200">
            Labelled
          </span>
        );
      case 'ready':
        return (
          <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-200">
            Ready to Collect
          </span>
        );
      case 'collected':
        return (
          <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:text-slate-300">
            Collected
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider" scope="col">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider" scope="col">
                Item
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider" scope="col">
                Prescriber
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider" scope="col">
                Dosage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider" scope="col">
                Status
              </th>
              <th className="relative px-6 py-3" scope="col">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
            {prescriptions.map((prescription) => (
              <tr key={prescription.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                  {prescription.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-slate-900 dark:text-white">
                        {prescription.item}
                      </div>
                      <div className="text-xs text-slate-500">{prescription.quantity}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                  {prescription.prescriber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                  {prescription.dosage}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(prescription.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    href={`/prescriptions/${prescription.id}`}
                    className="text-primary hover:text-blue-900 dark:hover:text-blue-400"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Bottom Table Actions */}
      <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-3 border-t border-slate-200 dark:border-slate-700 flex justify-end">
        <button className="text-sm text-primary font-medium hover:underline">
          View All History
        </button>
      </div>
    </>
  );
}

