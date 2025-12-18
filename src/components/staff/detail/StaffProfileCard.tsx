'use client';

interface StaffProfileCardProps {
  firstName: string;
  lastName: string;
  role: string;
  memberSince: string;
  lastLogin: string;
  photo: string;
}

const getRoleLabel = (role: string) => {
  switch (role) {
    case 'superintendent':
      return 'Superintendent Pharmacist';
    case 'pharmacist':
      return 'Pharmacist / Locum';
    case 'technician':
      return 'Dispenser / Technician';
    case 'counter_staff':
      return 'Counter Staff';
    default:
      return role;
  }
};

export default function StaffProfileCard({
  firstName,
  lastName,
  role,
  memberSince,
  lastLogin,
  photo,
}: StaffProfileCardProps) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center text-center">
      <div className="relative mb-4 group">
        <div
          className="w-32 h-32 rounded-full bg-cover bg-center border-4 border-white dark:border-slate-700 shadow-md"
          style={{ backgroundImage: `url("${photo}")` }}
        />
        <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors">
          <span className="material-symbols-outlined block text-[16px]">edit</span>
        </button>
      </div>
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        {firstName} {lastName}
      </h2>
      <span className="inline-flex items-center gap-1.5 px-3 py-1 mt-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-bold border border-blue-100 dark:border-blue-800">
        <span className="material-symbols-outlined text-[14px]">medical_services</span>
        {getRoleLabel(role)}
      </span>
      <div className="w-full mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-between text-sm">
        <span className="text-slate-500 dark:text-slate-400">Member since</span>
        <span className="font-medium text-slate-900 dark:text-white">{memberSince}</span>
      </div>
      <div className="w-full mt-3 flex justify-between text-sm">
        <span className="text-slate-500 dark:text-slate-400">Last login</span>
        <span className="font-medium text-slate-900 dark:text-white">{lastLogin}</span>
      </div>
    </div>
  );
}

