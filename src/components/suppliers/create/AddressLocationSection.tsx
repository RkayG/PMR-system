'use client';

import { MapPin, Search } from 'lucide-react';

interface AddressLocationSectionProps {
  postcode: string;
  addressLine1: string;
  addressLine2: string;
  townCity: string;
  county: string;
  onUpdate: (field: string, value: string) => void;
}

export default function AddressLocationSection({
  postcode,
  addressLine1,
  addressLine2,
  townCity,
  county,
  onUpdate,
}: AddressLocationSectionProps) {
  const handlePostcodeSearch = () => {
    // Placeholder for postcode lookup functionality
    console.log('Searching for postcode:', postcode);
  };

  return (
    <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700/50">
      <h3 className="flex items-center gap-2 text-slate-900 dark:text-white text-lg font-bold leading-tight mb-6">
        <MapPin className="text-primary size-5" />
        Address & Location
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <label className="flex flex-col w-full md:col-span-2 max-w-sm">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
            Postcode Search
          </p>
          <div className="flex gap-2">
            <input
              className="form-input flex-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 uppercase placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base transition-all"
              placeholder="e.g. SW1A 1AA"
              value={postcode}
              onChange={(e) => onUpdate('postcode', e.target.value.toUpperCase())}
            />
            <button
              type="button"
              className="flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium px-4 h-12 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
              onClick={handlePostcodeSearch}
            >
              <Search className="mr-1 size-5" />
              Find
            </button>
          </div>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
            Address Line 1 <span className="text-red-500">*</span>
          </p>
          <input
            className="flex w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base transition-all"
            placeholder="Unit / Building Name"
            required
            value={addressLine1}
            onChange={(e) => onUpdate('addressLine1', e.target.value)}
          />
        </label>
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
            Address Line 2
          </p>
          <input
            className="flex w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base transition-all"
            placeholder="Street Name"
            value={addressLine2}
            onChange={(e) => onUpdate('addressLine2', e.target.value)}
          />
        </label>
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
            Town / City <span className="text-red-500">*</span>
          </p>
          <input
            className="flex w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base transition-all"
            placeholder="e.g. London"
            required
            value={townCity}
            onChange={(e) => onUpdate('townCity', e.target.value)}
          />
        </label>
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
            County
          </p>
          <input
            className="flex w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base transition-all"
            placeholder="e.g. Greater London"
            value={county}
            onChange={(e) => onUpdate('county', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

