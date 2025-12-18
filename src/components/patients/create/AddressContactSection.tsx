'use client';

import { MapPin, Search } from 'lucide-react';

interface AddressContactSectionProps {
  postcode: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postcodeFinal: string;
  phone: string;
  email: string;
  onUpdate: (field: string, value: string | boolean) => void;
}

export default function AddressContactSection({
  postcode,
  addressLine1,
  addressLine2,
  city,
  postcodeFinal,
  phone,
  email,
  onUpdate,
}: AddressContactSectionProps) {
  const handlePostcodeSearch = () => {
    // Placeholder for postcode lookup functionality
    console.log('Searching for postcode:', postcode);
    // In a real implementation, this would call an API to fetch address details
  };

  return (
    <section className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">home_pin</span>
          Address & Contact
        </h2>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Postcode Lookup */}
        <div className="md:col-span-12">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Address Lookup
          </label>
          <div className="flex gap-2">
            <input
              className="flex-1 rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary uppercase placeholder:normal-case"
              placeholder="Enter Postcode (e.g. SW1A 1AA)"
              type="text"
              value={postcode}
              onChange={(e) => onUpdate('postcode', e.target.value.toUpperCase())}
            />
            <button
              className="bg-primary hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
              type="button"
              onClick={handlePostcodeSearch}
            >
              <Search className="size-5" />
              Find
            </button>
          </div>
        </div>
        <div className="md:col-span-12 h-px bg-slate-100 dark:bg-slate-700 my-1"></div>
        <div className="md:col-span-12">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="address-1">
            Address Line 1 <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
            id="address-1"
            type="text"
            required
            value={addressLine1}
            onChange={(e) => onUpdate('addressLine1', e.target.value)}
          />
        </div>
        <div className="md:col-span-12">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="address-2">
            Address Line 2
          </label>
          <input
            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
            id="address-2"
            type="text"
            value={addressLine2}
            onChange={(e) => onUpdate('addressLine2', e.target.value)}
          />
        </div>
        <div className="md:col-span-6">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="city">
            City / Town <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
            id="city"
            type="text"
            required
            value={city}
            onChange={(e) => onUpdate('city', e.target.value)}
          />
        </div>
        <div className="md:col-span-6">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="postcode">
            Postcode <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary uppercase"
            id="postcode"
            type="text"
            required
            value={postcodeFinal}
            onChange={(e) => onUpdate('postcodeFinal', e.target.value.toUpperCase())}
          />
        </div>
        <div className="md:col-span-6">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => onUpdate('phone', e.target.value)}
          />
        </div>
        <div className="md:col-span-6">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="email">
            Email Address
          </label>
          <input
            className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
            id="email"
            type="email"
            value={email}
            onChange={(e) => onUpdate('email', e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

