'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SupplierIdentitySection from './create/SupplierIdentitySection';
import ContactInfoSection from './create/ContactInfoSection';
import AddressLocationSection from './create/AddressLocationSection';
import FinancialsSection from './create/FinancialsSection';
import AdditionalNotesSection from './create/AdditionalNotesSection';

export default function CreateSupplierPage() {
  const [formData, setFormData] = useState({
    // Identity
    supplierName: '',
    accountReference: '',
    // Contact
    contactPerson: '',
    email: '',
    phone: '',
    // Address
    postcode: '',
    addressLine1: '',
    addressLine2: '',
    townCity: '',
    county: '',
    // Financials
    paymentTerms: '',
    vatNumber: '',
    // Notes
    notes: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <Header showSearch={true} />

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto py-6 px-4 md:px-8">
        <div className="flex flex-col max-w-[1024px] mx-auto flex-1 w-full gap-6">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 px-1">
            <Breadcrumbs
              items={[
                { label: 'Dashboard', href: '/' },
                { label: 'Suppliers', href: '/suppliers' },
                { label: 'Add New', href: null },
              ]}
            />
          </div>

          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            <div className="flex flex-col gap-2">
              <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">
                Add New Supplier
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal max-w-2xl">
                Enter the details for the new pharmaceutical or general supplier to add them to the
                procurement database.
              </p>
            </div>
            <div className="flex gap-3 mt-2 md:mt-0">
              <Link
                href="/suppliers"
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-transparent text-slate-900 dark:text-slate-200 text-sm font-bold leading-normal border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                <span className="truncate">Cancel</span>
              </Link>
              <button
                type="submit"
                form="supplier-form"
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:bg-blue-600 transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px] mr-2">save</span>
                <span className="truncate">Save Supplier</span>
              </button>
            </div>
          </div>

          {/* Form Container */}
          <form
            id="supplier-form"
            onSubmit={handleSubmit}
            className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col"
          >
            <SupplierIdentitySection
              supplierName={formData.supplierName}
              accountReference={formData.accountReference}
              onUpdate={updateField}
            />
            <ContactInfoSection
              contactPerson={formData.contactPerson}
              email={formData.email}
              phone={formData.phone}
              onUpdate={updateField}
            />
            <AddressLocationSection
              postcode={formData.postcode}
              addressLine1={formData.addressLine1}
              addressLine2={formData.addressLine2}
              townCity={formData.townCity}
              county={formData.county}
              onUpdate={updateField}
            />
            <FinancialsSection
              paymentTerms={formData.paymentTerms}
              vatNumber={formData.vatNumber}
              onUpdate={updateField}
            />
            <AdditionalNotesSection notes={formData.notes} onUpdate={updateField} />
          </form>

          {/* Footer Actions Mobile */}
          <div className="flex md:hidden justify-end gap-3 pb-8">
            <Link
              href="/suppliers"
              className="flex flex-1 items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-white dark:bg-transparent text-slate-900 dark:text-slate-200 text-base font-bold border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Cancel
            </Link>
            <button
              type="submit"
              form="supplier-form"
              className="flex flex-1 items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold shadow-sm"
            >
              Save Supplier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

