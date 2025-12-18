'use client';

interface PrescriptionDetailsSectionProps {
  prescriber: string;
  onPrescriberChange: (prescriber: string) => void;
  issueDate: string;
  onIssueDateChange: (date: string) => void;
  prescriptionType: string;
  onPrescriptionTypeChange: (type: string) => void;
}

export default function PrescriptionDetailsSection({
  prescriber,
  onPrescriberChange,
  issueDate,
  onIssueDateChange,
  prescriptionType,
  onPrescriptionTypeChange,
}: PrescriptionDetailsSectionProps) {
  return (
    <section className="bg-white dark:bg-slate-850 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
        <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">description</span>
          Prescription Details
        </h3>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prescriber */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Prescriber
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">stethoscope</span>
            </span>
            <input
              className="pl-10 block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5"
              placeholder="Search Doctor or Surgery..."
              type="text"
              value={prescriber}
              onChange={(e) => onPrescriberChange(e.target.value)}
            />
          </div>
          <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
            Showing recent prescribers for this patient
          </p>
        </div>
        {/* Rx Type & Date */}
        <div className="col-span-1 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Issue Date
            </label>
            <input
              className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5"
              type="date"
              value={issueDate}
              onChange={(e) => onIssueDateChange(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Type
            </label>
            <select
              className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5"
              value={prescriptionType}
              onChange={(e) => onPrescriptionTypeChange(e.target.value)}
            >
              <option>Acute (NHS)</option>
              <option>Repeat (NHS)</option>
              <option>Private</option>
              <option>Dental</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
