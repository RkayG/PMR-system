'use client';

import { User, Mail, Phone, Info } from 'lucide-react';

interface PersonalInformationSectionProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gphcNumber: string;
  onUpdate: (field: string, value: string | boolean) => void;
}

export default function PersonalInformationSection({
  firstName,
  lastName,
  email,
  phone,
  gphcNumber,
  onUpdate,
}: PersonalInformationSectionProps) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 dark:bg-slate-700 p-2 rounded-lg text-primary">
            <User className="size-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Personal Information</h3>
        </div>
        <button className="text-sm text-primary font-medium hover:underline">Edit Details</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
            First Name
          </label>
          <input
            className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary text-sm font-medium"
            type="text"
            value={firstName}
            onChange={(e) => onUpdate('firstName', e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
            Last Name
          </label>
          <input
            className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary text-sm font-medium"
            type="text"
            value={lastName}
            onChange={(e) => onUpdate('lastName', e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 text-slate-400 size-4.5" />
            <input
              className="w-full pl-10 rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary text-sm font-medium"
              type="email"
              value={email}
              onChange={(e) => onUpdate('email', e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 text-slate-400 size-4.5" />
            <input
              className="w-full pl-10 rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary text-sm font-medium"
              type="tel"
              value={phone}
              onChange={(e) => onUpdate('phone', e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase flex items-center gap-1">
            GPhC Registration Number
            <Info
              className="text-slate-400 size-3.5"
              title="Required for Pharmacists and Technicians"
            />
          </label>
          <input
            className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary text-sm font-medium font-mono tracking-wide"
            type="text"
            value={gphcNumber}
            onChange={(e) => onUpdate('gphcNumber', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

