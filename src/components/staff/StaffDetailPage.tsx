'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Save } from 'lucide-react';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import StaffProfileCard from './detail/StaffProfileCard';
import AccountStatusCard from './detail/AccountStatusCard';
import PersonalInformationSection from './detail/PersonalInformationSection';
import RolePermissionsSection from './detail/RolePermissionsSection';
import RecentActivitySection from './detail/RecentActivitySection';

interface StaffDetailPageProps {
  staffId: string;
}

export default function StaffDetailPage({ staffId }: StaffDetailPageProps) {
  // Mock data - replace with API call
  const staff = {
    id: staffId,
    firstName: 'Sarah',
    lastName: 'Jenkins',
    email: 's.jenkins@pharmacy.co.uk',
    phone: '07700 900456',
    gphcNumber: '2045678',
    role: 'superintendent',
    memberSince: 'Jan 12, 2021',
    lastLogin: 'Today, 08:30 AM',
    status: 'active',
    photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0KcgnbSW3e15yL3vXYd7Ai66_bvx-iVVAc4zNWEeGGfaJsdnjM3fgGt8nY-gOGpBdscOk3nrI_Sq15hg3t-fZ5ORdx8kflvWg-u6dlHBnkm9k1PK4APpUB5zS96_xhwEcIC1j96BUVjdKcdwBY-bP5ODjFn7RBQKmwiXvQoaXIUbjWEVv3eyIsfbApWmvv_EP09djzA4FwwE9ZOb5Ot0zOmelm5OKGwFLUh-EGNRt9wRD5Bil6d7B1d7FStuyrF78mJ_8YDqprOU',
  };

  const [formData, setFormData] = useState({
    firstName: staff.firstName,
    lastName: staff.lastName,
    email: staff.email,
    phone: staff.phone,
    gphcNumber: staff.gphcNumber,
    role: staff.role,
    accountStatus: staff.status === 'active',
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    // Handle save functionality
    console.log('Saving staff details:', formData);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <Header showSearch={true} />

      {/* Scrollable Page Content */}
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 lg:p-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Staff Management', href: '/staff' },
              { label: `${staff.firstName} ${staff.lastName}`, href: null },
            ]}
          />

          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {staff.firstName} {staff.lastName}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Manage profile, roles, and system permissions.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/staff"
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                Cancel
              </Link>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-600 shadow-sm shadow-blue-200 dark:shadow-none transition-colors flex items-center gap-2"
              >
                <Save className="size-4.5" />
                Save Changes
              </button>
            </div>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Left Column: Identity & Status */}
            <div className="flex flex-col gap-6 lg:col-span-1">
              <StaffProfileCard
                firstName={staff.firstName}
                lastName={staff.lastName}
                role={staff.role}
                memberSince={staff.memberSince}
                lastLogin={staff.lastLogin}
                photo={staff.photo}
              />
              <AccountStatusCard
                accountStatus={formData.accountStatus}
                onStatusChange={(status) => updateField('accountStatus', status)}
              />
            </div>

            {/* Right Column: Details & Forms */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <PersonalInformationSection
                firstName={formData.firstName}
                lastName={formData.lastName}
                email={formData.email}
                phone={formData.phone}
                gphcNumber={formData.gphcNumber}
                onUpdate={updateField}
              />
              <RolePermissionsSection
                role={formData.role}
                onRoleChange={(role) => updateField('role', role)}
              />
              <RecentActivitySection staffId={staffId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

