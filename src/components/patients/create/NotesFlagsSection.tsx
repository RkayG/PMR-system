'use client';

import { FileText } from 'lucide-react';

interface NotesFlagsSectionProps {
  notes: string;
  highRiskFlag: boolean;
  onUpdate: (field: string, value: string | boolean) => void;
}

export default function NotesFlagsSection({ notes, highRiskFlag, onUpdate }: NotesFlagsSectionProps) {
  return (
    <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileText className="text-primary size-5" />
          Notes & Flags
        </h2>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="notes">
            General Notes
          </label>
          <textarea
            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary text-sm placeholder-slate-400"
            id="notes"
            placeholder="Add administrative notes here..."
            rows={4}
            value={notes}
            onChange={(e) => onUpdate('notes', e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg border border-orange-100 bg-orange-50 dark:bg-orange-900/10 dark:border-orange-900/30">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-orange-800 dark:text-orange-300">High Risk Patient</span>
            <span className="text-xs text-orange-600 dark:text-orange-400">Flag for pharmacist review</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              className="sr-only peer"
              type="checkbox"
              checked={highRiskFlag}
              onChange={(e) => onUpdate('highRiskFlag', e.target.checked)}
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
          </label>
        </div>
      </div>
    </section>
  );
}

