'use client';

import { Ban } from 'lucide-react';

interface AccountStatusCardProps {
  accountStatus: boolean;
  onStatusChange: (status: boolean) => void;
}

export default function AccountStatusCard({ accountStatus, onStatusChange }: AccountStatusCardProps) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
        Account Access
      </h3>
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-slate-900 dark:text-white">Account Status</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Disable to block access</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            className="sr-only peer"
            type="checkbox"
            checked={accountStatus}
            onChange={(e) => onStatusChange(e.target.checked)}
          />
          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
          <span className="ml-3 text-sm font-medium text-green-600 dark:text-green-400">Active</span>
        </label>
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
        <button className="w-full py-2.5 border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 rounded-lg text-sm font-bold hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center gap-2">
          <Ban className="size-4.5" />
          Deactivate Account
        </button>
      </div>
    </div>
  );
}

