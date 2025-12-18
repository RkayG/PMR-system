'use client';

export default function FinancialDetailsCard() {
  return (
    <div className="flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between p-5 pb-2">
        <h3 className="font-bold text-slate-900 dark:text-white">Financial Details</h3>
        <div className="rounded-full bg-orange-50 dark:bg-orange-900/20 p-2 text-orange-600 dark:text-orange-400">
          <span className="material-symbols-outlined text-[20px]">account_balance</span>
        </div>
      </div>
      <div className="grid grid-cols-1 p-5 pt-2">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 py-3">
          <span className="text-sm text-slate-500 dark:text-slate-400">Account Number</span>
          <span className="text-sm font-medium text-slate-900 dark:text-white">PHO-8821</span>
        </div>
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 py-3">
          <span className="text-sm text-slate-500 dark:text-slate-400">VAT Number</span>
          <span className="text-sm font-medium text-slate-900 dark:text-white">GB 123 4567 89</span>
        </div>
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 py-3">
          <span className="text-sm text-slate-500 dark:text-slate-400">Payment Terms</span>
          <span className="text-sm font-medium text-slate-900 dark:text-white">Net 30 Days</span>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-sm text-slate-500 dark:text-slate-400">Credit Limit</span>
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">£50,000</span>
        </div>
      </div>
    </div>
  );
}

