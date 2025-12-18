'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Save, Check } from 'lucide-react';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import OrderDetailsSection from './create/OrderDetailsSection';
import LineItemsTable from './create/LineItemsTable';
import OrderSummary from './create/OrderSummary';

export interface LineItem {
  id: string;
  itemDescription: string;
  packSize: string;
  supplierCode: string;
  quantity: number;
  unitCost: number;
  total: number;
}

export default function CreatePurchaseOrderPage() {
  const searchParams = useSearchParams();
  const supplierId = searchParams.get('supplier');

  const [orderData, setOrderData] = useState({
    supplier: '',
    orderDate: new Date().toISOString().split('T')[0],
    expectedDelivery: '',
    notes: '',
  });

  useEffect(() => {
    if (supplierId) {
      // Map supplier ID to supplier value (in real app, fetch supplier details)
      const supplierMap: Record<string, string> = {
        '1': 'Alliance',
        '2': 'Phoenix',
        '3': 'Sigma',
        '4': 'AAH',
      };
      setOrderData((prev) => ({
        ...prev,
        supplier: supplierMap[supplierId] || supplierId,
      }));
    }
  }, [supplierId]);

  const [lineItems, setLineItems] = useState<LineItem[]>([
    {
      id: '1',
      itemDescription: 'Amoxicillin 500mg Capsules',
      packSize: '21 Caps',
      supplierCode: 'AH-8823',
      quantity: 50,
      unitCost: 0.85,
      total: 42.5,
    },
    {
      id: '2',
      itemDescription: 'Paracetamol 500mg Tablets',
      packSize: '100 Tabs',
      supplierCode: 'AH-1293',
      quantity: 100,
      unitCost: 1.2,
      total: 120.0,
    },
  ]);

  const updateLineItem = (id: string, field: keyof LineItem, value: string | number) => {
    setLineItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [field]: value };
          if (field === 'quantity' || field === 'unitCost') {
            updated.total = updated.quantity * updated.unitCost;
          }
          return updated;
        }
        return item;
      })
    );
  };

  const addLineItem = () => {
    const newItem: LineItem = {
      id: Date.now().toString(),
      itemDescription: '',
      packSize: '',
      supplierCode: '',
      quantity: 1,
      unitCost: 0,
      total: 0,
    };
    setLineItems([...lineItems, newItem]);
  };

  const removeLineItem = (id: string) => {
    setLineItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = lineItems.reduce((sum, item) => sum + item.total, 0);
  const vat = subtotal * 0.2;
  const grandTotal = subtotal + vat;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <Header showSearch={true} />

      {/* Scrollable Page Content */}
      <div className="flex-1 overflow-y-auto p-8 pb-24">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
          {/* Breadcrumbs & Heading */}
          <div className="flex flex-col gap-4">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Procurement', href: '/suppliers' },
                { label: 'Create Purchase Order', href: null },
              ]}
            />
            <div className="flex flex-wrap justify-between items-end gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                  Create Purchase Order
                </h1>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-xs font-bold bg-yellow-100 text-yellow-800 border border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800">
                    DRAFT
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
                    System ID: #PO-2023-8921
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-900 dark:text-white shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <Save className="size-5" />
                  Save Draft
                </button>
              </div>
            </div>
          </div>

          {/* Main Form Card */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            {/* Order Metadata */}
            <OrderDetailsSection
              orderData={orderData}
              onOrderDataChange={(field, value) => setOrderData({ ...orderData, [field]: value })}
            />

            {/* Line Items Table */}
            <LineItemsTable
              lineItems={lineItems}
              onUpdateItem={updateLineItem}
              onAddItem={addLineItem}
              onRemoveItem={removeLineItem}
            />

            {/* Footer Summary */}
            <OrderSummary
              subtotal={subtotal}
              vat={vat}
              grandTotal={grandTotal}
              notes={orderData.notes}
              onNotesChange={(notes) => setOrderData({ ...orderData, notes })}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 mt-2">
            <button className="px-6 py-2.5 rounded-lg text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Cancel
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-md shadow-primary/20 transition-all flex items-center gap-2">
              <Check className="size-5" />
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

