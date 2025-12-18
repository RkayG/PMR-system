'use client';

interface RolePermissionsSectionProps {
  formData: {
    role: string;
    gphcNumber: string;
    homeBranch: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const roles = [
  {
    value: 'superintendent',
    label: 'Superintendent',
    icon: 'medical_services',
    color: 'bg-blue-100 dark:bg-blue-900/50 text-primary',
    description: 'Full system access including clinical governance and legal oversight.',
  },
  {
    value: 'pharmacist',
    label: 'Pharmacist',
    icon: 'prescriptions',
    color: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400',
    description: 'Can perform clinical checks, dispense, and manage patient records.',
  },
  {
    value: 'technician',
    label: 'Technician',
    icon: 'vaccines',
    color: 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-400',
    description: 'Dispensing, stock management, and assembly with limited clinical writes.',
  },
  {
    value: 'counter',
    label: 'Counter Staff',
    icon: 'point_of_sale',
    color: 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400',
    description: 'Restricted to EPOS, sales, and handing out bagged prescriptions.',
  },
  {
    value: 'admin',
    label: 'Admin',
    icon: 'settings',
    color: 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300',
    description: 'System configuration and reporting only. No clinical access.',
  },
];

export default function RolePermissionsSection({
  formData,
  onInputChange,
}: RolePermissionsSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="border-b border-gray-100 dark:border-gray-700 px-6 py-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">badge</span>
        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">
          Role & Permissions
        </h3>
      </div>
      <div className="p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Role <span className="text-red-500">*</span>
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {roles.map((role) => (
              <label key={role.value} className="cursor-pointer group relative">
                <input
                  className="peer sr-only"
                  name="role"
                  type="radio"
                  value={role.value}
                  checked={formData.role === role.value}
                  onChange={(e) => onInputChange('role', e.target.value)}
                />
                <div className="rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 p-4 hover:bg-white dark:hover:bg-gray-700 hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary transition-all h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`${role.color} p-1.5 rounded-md`}>
                      <span className="material-symbols-outlined text-[20px]">{role.icon}</span>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white text-sm">
                      {role.label}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{role.description}</p>
                </div>
                <div className="absolute top-4 right-4 text-primary opacity-0 peer-checked:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <label className="flex flex-col w-full gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              GPhC Registration Number
            </span>
            <input
              className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary focus:ring-primary h-11 px-4 placeholder:text-gray-400"
              placeholder="e.g. 2045678"
              type="text"
              value={formData.gphcNumber}
              onChange={(e) => onInputChange('gphcNumber', e.target.value)}
            />
            <span className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">info</span>
              Required for Pharmacist and Technician roles.
            </span>
          </label>
          <label className="flex flex-col w-full gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Home Branch Assignment
            </span>
            <div className="relative">
              <select
                className="form-select w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary focus:ring-primary h-11 px-4 pr-10 appearance-none"
                value={formData.homeBranch}
                onChange={(e) => onInputChange('homeBranch', e.target.value)}
              >
                <option>Boots Pharmacy #4291 (Current)</option>
                <option>Boots Pharmacy #4292 (North Street)</option>
                <option>Boots Pharmacy #4295 (High Road)</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                expand_more
              </span>
            </div>
            <span className="text-xs text-gray-500">
              The user's primary location for inventory and shift tracking.
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

