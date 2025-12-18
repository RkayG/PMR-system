'use client';

import { useState } from 'react';
import OrderHistoryTab from './OrderHistoryTab';
import LinkedProductsTab from './LinkedProductsTab';
import DocumentsNotesTab from './DocumentsNotesTab';

interface SupplierTabsProps {
  supplierId: string;
}

type TabType = 'order-history' | 'linked-products' | 'documents-notes';

export default function SupplierTabs({ supplierId }: SupplierTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('order-history');

  const tabs = [
    { id: 'order-history' as TabType, label: 'Order History' },
    { id: 'linked-products' as TabType, label: 'Linked Products' },
    { id: 'documents-notes' as TabType, label: 'Documents & Notes' },
  ];

  return (
    <div className="rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-slate-200 dark:border-slate-700">
      {/* Tab Headers */}
      <div className="border-b border-slate-200 dark:border-slate-700 px-2">
        <nav aria-label="Tabs" className="-mb-px flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`border-b-2 px-4 py-4 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:border-slate-200 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'order-history' && <OrderHistoryTab supplierId={supplierId} />}
        {activeTab === 'linked-products' && <LinkedProductsTab supplierId={supplierId} />}
        {activeTab === 'documents-notes' && <DocumentsNotesTab supplierId={supplierId} />}
      </div>
    </div>
  );
}

