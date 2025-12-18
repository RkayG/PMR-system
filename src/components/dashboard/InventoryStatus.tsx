'use client';

export default function InventoryStatus() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Inventory Status</h3>
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Donut Chart */}
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            {/* Background Circle */}
            <path
              className="text-slate-100 dark:text-slate-800"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.8"
            />
            {/* Segment 1: In Stock (Blue) */}
            <path
              className="text-primary"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeDasharray="70, 100"
              strokeWidth="3.8"
            />
            {/* Segment 2: Low Stock (Orange) */}
            <path
              className="text-amber-500"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeDasharray="20, 100"
              strokeDashoffset="-70"
              strokeWidth="3.8"
            />
            {/* Segment 3: Critical (Red) */}
            <path
              className="text-red-500"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeDasharray="10, 100"
              strokeDashoffset="-90"
              strokeWidth="3.8"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">85%</span>
            <span className="text-xs text-slate-500 font-medium">Healthy</span>
          </div>
        </div>
        {/* Legend */}
        <div className="w-full mt-8 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-slate-600 dark:text-slate-300">In Stock</span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white">2,912</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="text-slate-600 dark:text-slate-300">Low Stock</span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white">496</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-slate-600 dark:text-slate-300">Critical</span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white">12</span>
          </div>
        </div>
      </div>
    </div>
  );
}

