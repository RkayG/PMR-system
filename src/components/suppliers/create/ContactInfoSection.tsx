'use client';

import { Phone, Mail } from 'lucide-react';

interface ContactInfoSectionProps {
  contactPerson: string;
  email: string;
  phone: string;
  onUpdate: (field: string, value: string) => void;
}

export default function ContactInfoSection({
  contactPerson,
  email,
  phone,
  onUpdate,
}: ContactInfoSectionProps) {
  return (
    <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700/50">
      <h3 className="flex items-center gap-2 text-slate-900 dark:text-white text-lg font-bold leading-tight mb-6">
        <Phone className="text-primary size-5" />
        Contact Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
            Main Contact Person
          </p>
          <input
            className="flex w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base transition-all"
            placeholder="Full Name"
            value={contactPerson}
            onChange={(e) => onUpdate('contactPerson', e.target.value)}
          />
        </label>
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
            Email Address <span className="text-red-500">*</span>
          </p>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
            <input
              className="flex w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 pl-11 pr-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base transition-all"
              placeholder="orders@supplier.com"
              required
              type="email"
              value={email}
              onChange={(e) => onUpdate('email', e.target.value)}
            />
          </div>
        </label>
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
            Phone Number <span className="text-red-500">*</span>
          </p>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
            <input
              className="flex w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 pl-11 pr-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base transition-all"
              placeholder="+44 20 7123 4567"
              required
              type="tel"
              value={phone}
              onChange={(e) => onUpdate('phone', e.target.value)}
            />
          </div>
        </label>
      </div>
    </div>
  );
}

