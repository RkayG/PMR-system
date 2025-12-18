export default function EndorsementsNotes() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Endorsements & Notes</h3>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            NCSO / Discount Not Deduction
          </label>
          <select className="block w-full rounded-md border-0 bg-slate-100 dark:bg-slate-800 py-1.5 pl-3 pr-8 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
            <option>None</option>
            <option>NCSO</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            Internal Notes
          </label>
          <textarea
            className="block w-full rounded-md border-0 bg-slate-100 dark:bg-slate-800 py-1.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="Add notes for the team..."
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}
