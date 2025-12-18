export default function QuickStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
          <span className="material-symbols-outlined">history</span>
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Last Dispensed</p>
          <p className="text-sm font-bold text-slate-900 dark:text-white">28 days ago</p>
        </div>
      </div>
      <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
          <span className="material-symbols-outlined">paid</span>
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Charge Status</p>
          <p className="text-sm font-bold text-slate-900 dark:text-white">Paid</p>
        </div>
      </div>
      <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
          <span className="material-symbols-outlined">verified</span>
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Identity Check</p>
          <p className="text-sm font-bold text-slate-900 dark:text-white">Verified</p>
        </div>
      </div>
    </div>
  );
}
