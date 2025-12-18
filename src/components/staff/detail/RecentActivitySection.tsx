'use client';

interface RecentActivitySectionProps {
  staffId: string;
}

interface ActivityLog {
  id: string;
  action: string;
  details: string;
  time: string;
}

const activities: ActivityLog[] = [
  {
    id: '1',
    action: 'Login',
    details: 'Successful login from IP 192.168.1.42',
    time: 'Today, 08:30 AM',
  },
  {
    id: '2',
    action: 'Rx Verification',
    details: 'Clinically checked Rx #9928 for Patient J. Smith',
    time: 'Yesterday, 14:15 PM',
  },
  {
    id: '3',
    action: 'Stock Update',
    details: "Adjusted inventory for 'Amoxicillin 500mg' (+50)",
    time: 'Yesterday, 11:20 AM',
  },
];

export default function RecentActivitySection({ staffId }: RecentActivitySectionProps) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-orange-50 dark:bg-slate-700 p-2 rounded-lg text-orange-600 dark:text-orange-400">
            <span className="material-symbols-outlined">history</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h3>
        </div>
        <button className="text-sm text-primary font-medium hover:underline">View All Logs</button>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-4 py-3 rounded-l-lg" scope="col">
                Action
              </th>
              <th className="px-4 py-3" scope="col">
                Details
              </th>
              <th className="px-4 py-3 rounded-r-lg text-right" scope="col">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {activities.map((activity) => (
              <tr key={activity.id} className="bg-white dark:bg-surface-dark">
                <td className="px-4 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
                  {activity.action}
                </td>
                <td className="px-4 py-4 text-slate-500 dark:text-slate-300">{activity.details}</td>
                <td className="px-4 py-4 text-right text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {activity.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

