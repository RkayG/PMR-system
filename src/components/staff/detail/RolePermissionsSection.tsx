'use client';

interface RolePermissionsSectionProps {
  role: string;
  onRoleChange: (role: string) => void;
}

const roles = [
  {
    value: 'superintendent',
    label: 'Superintendent Pharmacist (Admin)',
    description: 'Full access to all modules including system settings, staff management, and controlled drug registers.',
  },
  {
    value: 'pharmacist',
    label: 'Pharmacist / Locum',
    description: 'Access to dispensing, patient records, and clinical checks. Cannot manage other staff accounts.',
  },
  {
    value: 'technician',
    label: 'Dispenser / Technician',
    description: 'Restricted access to dispensing and stock management. Requires Pharmacist sign-off for clinical actions.',
  },
];

export default function RolePermissionsSection({ role, onRoleChange }: RolePermissionsSectionProps) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-50 dark:bg-slate-700 p-2 rounded-lg text-purple-600 dark:text-purple-400">
          <span className="material-symbols-outlined">badge</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Role & Permissions</h3>
      </div>
      <div className="space-y-4">
        {roles.map((roleOption) => (
          <label
            key={roleOption.value}
            className={`flex items-start p-4 border rounded-lg cursor-pointer transition-colors ${
              role === roleOption.value
                ? 'border-primary bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <input
              className="mt-1 w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              name="role"
              type="radio"
              checked={role === roleOption.value}
              onChange={() => onRoleChange(roleOption.value)}
            />
            <div className="ml-3">
              <span className="block text-sm font-bold text-slate-900 dark:text-white">
                {roleOption.label}
              </span>
              <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1">
                {roleOption.description}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

