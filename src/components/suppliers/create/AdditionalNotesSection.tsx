'use client';

interface AdditionalNotesSectionProps {
  notes: string;
  onUpdate: (field: string, value: string) => void;
}

export default function AdditionalNotesSection({
  notes,
  onUpdate,
}: AdditionalNotesSectionProps) {
  return (
    <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-800/30">
      <h3 className="flex items-center gap-2 text-slate-900 dark:text-white text-lg font-bold leading-tight mb-6">
        <span className="material-symbols-outlined text-primary">note_add</span>
        Additional Notes
      </h3>
      <label className="flex flex-col w-full">
        <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
          Internal Notes (Optional)
        </p>
        <textarea
          className="flex w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[120px] p-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base resize-y transition-all"
          placeholder="Enter any specific delivery instructions, ordering protocols, or notes about the supplier relationship here..."
          value={notes}
          onChange={(e) => onUpdate('notes', e.target.value)}
        />
      </label>
    </div>
  );
}

