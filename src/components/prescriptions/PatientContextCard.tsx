export default function PatientContextCard() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold text-lg">
            JD
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">John Doe</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Male · 54 Years</p>
          </div>
        </div>
        <button className="text-primary text-sm font-medium hover:underline">Edit</button>
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              NHS Number
            </p>
            <p className="text-sm font-mono font-medium text-slate-900 dark:text-white">123-456-7890</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Date of Birth
            </p>
            <p className="text-sm font-medium text-slate-900 dark:text-white">12/05/1970</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            Address
          </p>
          <p className="text-sm text-slate-900 dark:text-white leading-relaxed">
            42 Maple Avenue, Springfield<br />
            West Midlands, B14 6RF
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            Exemptions
          </p>
          <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">
            Medical Exemption Cert.
          </span>
        </div>
      </div>
    </div>
  );
}
