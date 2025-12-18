'use client';

interface Medication {
  id: string;
  drugName: string;
  form: string;
  quantity: number;
  directions: string;
  inStock: boolean;
  stockCount: number;
}

interface MedicationItemsSectionProps {
  medications: Medication[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: string, value: string | number) => void;
}

export default function MedicationItemsSection({
  medications,
  onAdd,
  onRemove,
  onUpdate,
}: MedicationItemsSectionProps) {
  return (
    <section className="bg-white dark:bg-slate-850 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col flex-1">
      <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
        <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">medication</span>
          Medication Items
        </h3>
        <span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
          {medications.length} Item{medications.length !== 1 ? 's' : ''} Added
        </span>
      </div>
      <div className="p-0">
        {/* List Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-2 bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          <div className="col-span-5">Drug Name / Form</div>
          <div className="col-span-2">Qty</div>
          <div className="col-span-4">Dosage / Directions</div>
          <div className="col-span-1 text-right">Action</div>
        </div>
        {/* Medication Items */}
        {medications.map((med, index) => (
          <div
            key={med.id}
            className={`group relative grid grid-cols-12 gap-4 px-6 py-4 border-b border-slate-100 dark:border-slate-700 ${
              index === 0
                ? 'bg-blue-50/20 dark:bg-blue-900/10 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
            } transition-colors`}
          >
            {/* Active indicator strip for first item */}
            {index === 0 && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            )}
            <div className="col-span-5">
              <div className="relative">
                <input
                  className={`block w-full rounded-md ${
                    index === 0
                      ? 'border-primary ring-1 ring-primary'
                      : 'border-slate-300 dark:border-slate-600'
                  } bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm sm:text-sm py-2`}
                  type="text"
                  value={med.drugName}
                  onChange={(e) => onUpdate(med.id, 'drugName', e.target.value)}
                  placeholder="Enter drug name..."
                />
                {med.form && (
                  <span className="absolute right-2 top-2.5 text-xs font-mono text-slate-400">
                    {med.form}
                  </span>
                )}
              </div>
              {med.inStock && (
                <div className="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  In Stock ({med.stockCount} packs)
                </div>
              )}
            </div>
            <div className="col-span-2">
              <input
                className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2 font-mono text-center"
                type="number"
                value={med.quantity || ''}
                onChange={(e) => onUpdate(med.id, 'quantity', parseInt(e.target.value) || 0)}
                placeholder="0"
              />
            </div>
            <div className="col-span-4">
              <input
                className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2"
                placeholder="e.g. 1tds"
                type="text"
                value={med.directions}
                onChange={(e) => onUpdate(med.id, 'directions', e.target.value)}
              />
            </div>
            <div className="col-span-1 flex items-start justify-end pt-1">
              <button
                className="text-slate-400 hover:text-red-500 transition-colors p-1"
                onClick={() => onRemove(med.id)}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        ))}
        {/* Add Button */}
        <div className="p-4">
          <button
            className="w-full py-3 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 dark:text-slate-400 hover:border-primary hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 font-medium"
            onClick={onAdd}
          >
            <span className="material-symbols-outlined">add_circle</span>
            Add Another Medication
          </button>
        </div>
      </div>
    </section>
  );
}
