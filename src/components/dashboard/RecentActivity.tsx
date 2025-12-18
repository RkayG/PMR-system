'use client';

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timeAgo: string;
  isRecent?: boolean;
}

const activities: ActivityItem[] = [
  {
    id: '1',
    title: 'Order #ORD-2023-001 Received',
    description: 'Inventory updated with 150 new items from Alliance Healthcare.',
    timeAgo: '10 mins ago',
    isRecent: true,
  },
  {
    id: '2',
    title: 'New Patient Registered',
    description: 'Sarah Jenkins added a new patient profile for James Smith.',
    timeAgo: '45 mins ago',
  },
  {
    id: '3',
    title: 'Controlled Drug Dispensed',
    description: 'Morphine Sulfate 10mg dispensed. CD Register updated automatically.',
    timeAgo: '1 hour ago',
  },
  {
    id: '4',
    title: 'System Backup Completed',
    description: 'Daily database backup completed successfully.',
    timeAgo: '3 hours ago',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Recent Activity</h3>
      <div className="relative pl-4 border-l border-slate-200 dark:border-slate-800 space-y-8">
        {activities.map((activity) => (
          <div key={activity.id} className="relative">
            <div
              className={`absolute -left-[21px] border-2 ${
                activity.isRecent
                  ? 'bg-surface-light dark:bg-surface-dark border-primary w-3 h-3 rounded-full'
                  : 'bg-slate-200 dark:bg-slate-700 w-3 h-3 rounded-full'
              }`}
            />
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-900 dark:text-white font-medium">{activity.title}</p>
              <p className="text-xs text-slate-500">{activity.description}</p>
              <span className="text-xs text-slate-400 mt-1">{activity.timeAgo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

