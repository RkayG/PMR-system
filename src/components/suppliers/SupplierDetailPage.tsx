'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SupplierHeader from './detail/SupplierHeader';
import ContactInfoCard from './detail/ContactInfoCard';
import LocationsCard from './detail/LocationsCard';
import FinancialDetailsCard from './detail/FinancialDetailsCard';
import SupplierTabs from './detail/SupplierTabs';

interface SupplierDetailPageProps {
  supplierId: string;
}

export default function SupplierDetailPage({ supplierId }: SupplierDetailPageProps) {
  // Mock data - replace with API call
  const supplier = {
    id: supplierId,
    name: 'Phoenix Medical Supplies Ltd',
    status: 'active' as const,
    supplierId: 'SUP-2049',
    lastUpdated: 'Oct 24, 2023',
    lastUpdatedBy: 'J. Doe',
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <Header showSearch={true} />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-4 py-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: 'Suppliers', href: '/suppliers' },
                { label: supplier.name, href: null },
              ]}
            />
          </div>

          {/* Page Header */}
          <SupplierHeader supplier={supplier} />

          {/* Top Grid: Details */}
          <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <ContactInfoCard />
            <LocationsCard />
            <FinancialDetailsCard />
          </div>

          {/* Tabbed Section */}
          <SupplierTabs supplierId={supplierId} />
        </div>
      </div>
    </div>
  );
}

