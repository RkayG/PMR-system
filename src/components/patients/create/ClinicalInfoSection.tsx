'use client';

import { useState } from 'react';
import { Building2, Search, Plus, X } from 'lucide-react';
import type { Allergy } from '../CreatePatientPage';

interface ClinicalInfoSectionProps {
  gpPractice: string;
  allergies: Allergy[];
  onUpdate: (field: string, value: string | boolean) => void;
  onAddAllergy: (substance: string, severity: 'low' | 'medium' | 'high', reaction?: string) => void;
  onRemoveAllergy: (id: string) => void;
}

export default function ClinicalInfoSection({
  gpPractice,
  allergies,
  onUpdate,
  onAddAllergy,
  onRemoveAllergy,
}: ClinicalInfoSectionProps) {
  const [newAllergySubstance, setNewAllergySubstance] = useState('');
  const [newAllergySeverity, setNewAllergySeverity] = useState<'low' | 'medium' | 'high'>('low');
  const [newAllergyReaction, setNewAllergyReaction] = useState('');

  const handleAddAllergy = () => {
    if (newAllergySubstance.trim()) {
      onAddAllergy(newAllergySubstance, newAllergySeverity, newAllergyReaction || undefined);
      setNewAllergySubstance('');
      setNewAllergySeverity('low');
      setNewAllergyReaction('');
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'Low Severity';
      case 'medium':
        return 'Medium';
      case 'high':
        return 'High Severity';
      default:
        return severity;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30 text-red-800 dark:text-red-300';
      case 'medium':
        return 'bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/30 text-amber-800 dark:text-amber-300';
      default:
        return 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200';
    }
  };

  return (
    <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">local_hospital</span>
          Clinical Info
        </h2>
      </div>
      <div className="p-6 flex flex-col gap-6">
        {/* GP Search */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="gp-search">
            GP Practice / Prescriber
          </label>
          <div className="relative">
            <Search className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 size-5" />
            <input
              className="pl-10 w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
              id="gp-search"
              placeholder="Search for practice..."
              type="text"
              value={gpPractice}
              onChange={(e) => onUpdate('gpPractice', e.target.value)}
            />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Search by name or ODS code</p>
        </div>
        <div className="h-px bg-slate-100 dark:bg-slate-700"></div>
        {/* Allergies */}
        <div>
          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-3">
            Allergies & Intolerances
          </label>
          {/* Add Allergy Form */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700 mb-4">
            <div className="flex flex-col gap-2">
              <input
                className="w-full text-sm rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                placeholder="Drug/Substance"
                type="text"
                value={newAllergySubstance}
                onChange={(e) => setNewAllergySubstance(e.target.value)}
              />
              <div className="flex gap-2">
                <select
                  className="text-sm rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white flex-1"
                  value={newAllergySeverity}
                  onChange={(e) => setNewAllergySeverity(e.target.value as 'low' | 'medium' | 'high')}
                >
                  <option value="low">Low Severity</option>
                  <option value="medium">Medium</option>
                  <option value="high">High Severity</option>
                </select>
                <button
                  className="bg-primary/10 hover:bg-primary/20 text-primary rounded px-3 flex items-center justify-center transition-colors"
                  type="button"
                  onClick={handleAddAllergy}
                >
                  <Plus className="size-4.5" />
                </button>
              </div>
            </div>
          </div>
          {/* Added Allergies List */}
          {allergies.length > 0 && (
            <div className="flex flex-col gap-2">
              {allergies.map((allergy) => (
                <div
                  key={allergy.id}
                  className={`flex items-start justify-between ${getSeverityColor(
                    allergy.severity
                  )} border rounded p-2`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{allergy.substance}</span>
                    <span className="text-xs">
                      {getSeverityLabel(allergy.severity)}
                      {allergy.reaction && ` - ${allergy.reaction}`}
                    </span>
                  </div>
                  <button
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    type="button"
                    onClick={() => onRemoveAllergy(allergy.id)}
                  >
                    <X className="size-4.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

