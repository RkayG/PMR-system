'use client';

interface PersonalDetailsSectionProps {
  title: string;
  firstName: string;
  lastName: string;
  dob: string;
  nhsNumber: string;
  gender: string;
  onUpdate: (field: string, value: string | boolean) => void;
}

export default function PersonalDetailsSection({
  title,
  firstName,
  lastName,
  dob,
  nhsNumber,
  gender,
  onUpdate,
}: PersonalDetailsSectionProps) {
  return (
    <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">person</span>
          Personal Details
        </h2>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="title">
            Title
          </label>
          <select
            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
            id="title"
            value={title}
            onChange={(e) => onUpdate('title', e.target.value)}
          >
            <option value="">Select...</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
            <option value="Mx">Mx</option>
          </select>
        </div>
        <div className="md:col-span-5">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="first-name">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary placeholder-slate-400"
            id="first-name"
            placeholder="e.g. John"
            type="text"
            required
            value={firstName}
            onChange={(e) => onUpdate('firstName', e.target.value)}
          />
        </div>
        <div className="md:col-span-5">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="last-name">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary placeholder-slate-400"
            id="last-name"
            placeholder="e.g. Doe"
            type="text"
            required
            value={lastName}
            onChange={(e) => onUpdate('lastName', e.target.value)}
          />
        </div>
        <div className="md:col-span-6">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="dob">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">calendar_today</span>
            </div>
            <input
              className="pl-10 w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
              id="dob"
              type="date"
              required
              value={dob}
              onChange={(e) => onUpdate('dob', e.target.value)}
            />
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="flex justify-between">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="nhs-number">
              NHS Number
            </label>
            <span className="text-xs text-slate-400 italic mt-1">10 digits</span>
          </div>
          <input
            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary placeholder-slate-400"
            id="nhs-number"
            placeholder="000 000 0000"
            type="text"
            value={nhsNumber}
            onChange={(e) => onUpdate('nhsNumber', e.target.value)}
          />
        </div>
        <div className="md:col-span-6">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="gender">
            Gender Identity
          </label>
          <select
            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
            id="gender"
            value={gender}
            onChange={(e) => onUpdate('gender', e.target.value)}
          >
            <option value="">Select gender...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
      </div>
    </section>
  );
}

