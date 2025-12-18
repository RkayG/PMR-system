'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PersonalInformationSection from './create/PersonalInformationSection';
import RolePermissionsSection from './create/RolePermissionsSection';
import SecuritySection from './create/SecuritySection';

export default function CreateStaffPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    role: 'pharmacist',
    gphcNumber: '',
    homeBranch: 'Boots Pharmacy #4291 (Current)',
    password: 'Password123!',
    confirmPassword: 'Password123!',
    forcePasswordChange: true,
    sendWelcomeEmail: true,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Header showSearch={true} />
      
      <div className="flex flex-1 justify-center py-5 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-col max-w-[1024px] flex-1">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 px-4 py-2 mb-2">
            <Breadcrumbs
              items={[
                { label: 'Dashboard', href: '/' },
                { label: 'Staff Management', href: '/staff' },
                { label: 'Create New', href: null },
              ]}
            />
          </div>

          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 px-4 pb-6">
            <div className="flex min-w-72 flex-col gap-2">
              <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">
                Create New Staff Account
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
                Add a new user to your pharmacy team, assign their specific role, and manage their access permissions securely.
              </p>
            </div>
            <div className="flex items-end">
              <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">
                UK Tenant: Boots Pharmacy #4291
              </span>
            </div>
          </div>

          {/* Main Form Area */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 px-4 pb-20">
            <PersonalInformationSection
              formData={formData}
              onInputChange={handleInputChange}
            />
            <RolePermissionsSection
              formData={formData}
              onInputChange={handleInputChange}
            />
            <SecuritySection
              formData={formData}
              onInputChange={handleInputChange}
            />

            {/* Action Bar */}
            <div className="flex items-center justify-end gap-4 pt-4">
              <Link
                href="/staff"
                className="px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-200 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-blue-600 focus:ring-4 focus:ring-primary/30 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">person_add</span>
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

