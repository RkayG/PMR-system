'use client';

interface Patient {
  name: string;
  age: number;
  address: string;
  dob: string;
  nhsNumber: string;
}

interface Medication {
  id: string;
  drugName: string;
  form: string;
  quantity: number;
  directions: string;
  inStock: boolean;
  stockCount: number;
}

interface LabelPreviewProps {
  patient: Patient | null;
  medications: Medication[];
  prescriptionId: string;
  issueDate: string;
  hasAllergyWarning?: boolean;
}

export default function LabelPreview({
  patient,
  medications,
  prescriptionId,
  issueDate,
  hasAllergyWarning = false,
}: LabelPreviewProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className="bg-white dark:bg-slate-850 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col">
      <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
        <h3 className="font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wide">
          Label Preview
        </h3>
        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> Live
        </span>
      </div>
      <div className="p-6 bg-slate-100 dark:bg-slate-900 flex justify-center min-h-[300px] items-center">
        {/* The Label */}
        <div className="bg-white text-slate-900 p-4 w-full shadow-md rounded-sm border border-slate-200 font-mono text-sm leading-snug relative">
          {/* Label Header */}
          <div className="flex justify-between items-start border-b border-slate-300 pb-2 mb-2">
            <div className="font-bold text-xs uppercase text-slate-500">Dispense Label</div>
            <div className="font-bold text-slate-900">Green Cross Pharmacy</div>
          </div>
          {/* Label Content */}
          <div className="space-y-3">
            {medications.length > 0 ? (
              medications.map((med) => (
                <div key={med.id}>
                  <p className="font-bold text-lg">{med.drugName || 'Amoxicillin 500mg Capsules'}</p>
                  <p className="text-xs text-slate-500">QTY: {med.quantity || 21}</p>
                  {med.directions && (
                    <div className="p-2 border border-slate-900 rounded bg-yellow-50">
                      <p className="font-bold text-base">{med.directions}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div>
                <p className="font-bold text-lg">Amoxicillin 500mg Capsules</p>
                <p className="text-xs text-slate-500">QTY: 21</p>
                <div className="p-2 border border-slate-900 rounded bg-yellow-50">
                  <p className="font-bold text-base">One to be taken three times a day</p>
                </div>
              </div>
            )}
            <div className="pt-2">
              <p className="font-bold uppercase">{patient?.name || 'Johnathan Doe'}</p>
              <p className="text-xs">{patient?.dob || '12/05/1982'}</p>
            </div>
            <div className="flex justify-between items-end text-xs text-slate-500 border-t border-slate-200 pt-2 mt-2">
              <div>
                <p>{formatDate(issueDate) || '24/10/2023'}</p>
                <p>Keep out of reach of children</p>
              </div>
              <div className="text-right">
                <p>{prescriptionId}</p>
              </div>
            </div>
          </div>
          {/* Warning Tag */}
          <div className="absolute -right-2 top-10 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm transform rotate-3">
            Complete Course
          </div>
        </div>
      </div>
      {/* Contextual Validation / Alerts */}
      {hasAllergyWarning && (
        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border-t border-orange-100 dark:border-orange-900/30">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-orange-600 dark:text-orange-400">warning</span>
            <div>
              <p className="text-sm font-bold text-orange-800 dark:text-orange-200">Interaction Alert</p>
              <p className="text-xs text-orange-700 dark:text-orange-300 mt-0.5">
                Patient has a recorded Penicillin allergy. Please verify with prescriber.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="p-4 border-t border-slate-100 dark:border-slate-700">
        <button className="w-full py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
          Print Test Label
        </button>
      </div>
    </div>
  );
}
