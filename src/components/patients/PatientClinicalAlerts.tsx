'use client';

interface PatientClinicalAlertsProps {
  patientId: string;
}

export default function PatientClinicalAlerts({ patientId }: PatientClinicalAlertsProps) {
  // Mock data - will be replaced with API call
  const alerts = [
    { type: 'allergy', label: 'Allergy: Penicillin' },
    { type: 'condition', label: 'Condition: Type 2 Diabetes' },
  ];

  if (alerts.length === 0) return null;

  return (
    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg flex items-start gap-4">
      <span className="material-symbols-outlined text-red-600 dark:text-red-400 shrink-0">warning</span>
      <div>
        <h3 className="text-sm font-bold text-red-800 dark:text-red-200 uppercase tracking-wide mb-1">
          Clinical Alerts
        </h3>
        <div className="flex flex-wrap gap-2">
          {alerts.map((alert, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-white dark:bg-red-900/50 border border-red-200 dark:border-red-800 px-2 py-1 text-xs font-semibold text-red-700 dark:text-red-100"
            >
              {alert.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

