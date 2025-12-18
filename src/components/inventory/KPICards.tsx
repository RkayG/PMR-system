export default function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Alert Card 1 - Low Stock */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between group cursor-pointer hover:border-red-200 dark:hover:border-red-900 transition-colors">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Low Stock Items</p>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">12</h3>
          </div>
          <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-red-600 dark:text-red-400">
            <span className="material-symbols-outlined icon-fill">warning</span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-1 text-xs font-medium text-red-600 dark:text-red-400">
          <span>Action Required</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </div>
      </div>

      {/* Alert Card 2 - Expiring Soon */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between group cursor-pointer hover:border-amber-200 dark:hover:border-amber-900 transition-colors">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Expiring Soon (30 days)</p>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">4</h3>
          </div>
          <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400">
            <span className="material-symbols-outlined icon-fill">history_toggle_off</span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400">
          <span>Review Batches</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </div>
      </div>

      {/* Alert Card 3 - Total Valuation */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Total Valuation</p>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">£42,390.00</h3>
          </div>
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
            <span className="material-symbols-outlined icon-fill">attach_money</span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
          <span className="material-symbols-outlined text-sm">trending_up</span>
          <span>+2.4% vs last month</span>
        </div>
      </div>
    </div>
  );
}

