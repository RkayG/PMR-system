'use client';

interface PersonalInformationSectionProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export default function PersonalInformationSection({
  formData,
  onInputChange,
}: PersonalInformationSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="border-b border-gray-100 dark:border-gray-700 px-6 py-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">person</span>
        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">
          Personal Information
        </h3>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col w-full gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            First Name <span className="text-red-500">*</span>
          </span>
          <input
            className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary focus:ring-primary h-11 px-4 placeholder:text-gray-400"
            placeholder="e.g. Sarah"
            required
            type="text"
            value={formData.firstName}
            onChange={(e) => onInputChange('firstName', e.target.value)}
          />
        </label>
        <label className="flex flex-col w-full gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Last Name <span className="text-red-500">*</span>
          </span>
          <input
            className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary focus:ring-primary h-11 px-4 placeholder:text-gray-400"
            placeholder="e.g. Jenkins"
            required
            type="text"
            value={formData.lastName}
            onChange={(e) => onInputChange('lastName', e.target.value)}
          />
        </label>
        <label className="flex flex-col w-full gap-2 md:col-span-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email Address <span className="text-red-500">*</span>
          </span>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
              mail
            </span>
            <input
              className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary focus:ring-primary h-11 pl-10 pr-4 placeholder:text-gray-400"
              placeholder="sarah.jenkins@pharmacy.co.uk"
              required
              type="email"
              value={formData.email}
              onChange={(e) => onInputChange('email', e.target.value)}
            />
          </div>
          <span className="text-xs text-gray-500">Used for login and notifications.</span>
        </label>
        <label className="flex flex-col w-full gap-2 md:col-span-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mobile Number</span>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
              smartphone
            </span>
            <input
              className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary focus:ring-primary h-11 pl-10 pr-4 placeholder:text-gray-400"
              placeholder="+44 7700 900000"
              type="tel"
              value={formData.mobile}
              onChange={(e) => onInputChange('mobile', e.target.value)}
            />
          </div>
          <span className="text-xs text-gray-500">Required for 2FA security codes.</span>
        </label>
      </div>
    </div>
  );
}

