export default function ClinicalAlerts() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="p-4 bg-red-50 dark:bg-red-900/10 border-b border-red-100 dark:border-red-900/20 flex items-center gap-2">
        <span className="material-symbols-outlined text-red-600 dark:text-red-400">warning</span>
        <h3 className="font-bold text-red-900 dark:text-red-100 text-sm">Clinical Alerts</h3>
      </div>
      <div className="p-0">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-red-500 text-[20px] mt-0.5">coronavirus</span>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Severe Allergy: Penicillin</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Patient reported anaphylaxis in 2015.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-orange-500 text-[20px] mt-0.5">medication</span>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Interaction: Moderate</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Atorvastatin + Grapefruit Juice (Lifestyle)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
