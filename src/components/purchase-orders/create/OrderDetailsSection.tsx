'use client';

import { ChevronDown } from 'lucide-react';

interface OrderDetailsSectionProps {
  orderData: {
    supplier: string;
    orderDate: string;
    expectedDelivery: string;
  };
  onOrderDataChange: (field: string, value: string) => void;
}

export default function OrderDetailsSection({
  orderData,
  onOrderDataChange,
}: OrderDetailsSectionProps) {
  return (
    <div className="p-6 border-b border-slate-200 dark:border-slate-700">
      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Order Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Supplier Select */}
        <div className="col-span-1 lg:col-span-2">
          <label className="flex flex-col gap-1.5 w-full">
            <p className="text-slate-900 dark:text-slate-300 text-sm font-medium leading-normal">
              Supplier
            </p>
            <div className="relative">
              <select
                className="flex w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 focus:border-primary border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 h-11 px-4 pr-10 text-sm font-normal leading-normal appearance-none cursor-pointer"
                value={orderData.supplier}
                onChange={(e) => onOrderDataChange('supplier', e.target.value)}
              >
                <option disabled value="">
                  Select a supplier...
                </option>
                <option value="AAH">AAH Pharmaceuticals</option>
                <option value="Alliance">Alliance Healthcare</option>
                <option value="Phoenix">Phoenix Medical Supplies</option>
                <option value="Sigma">Sigma Pharmaceuticals</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <ChevronDown className="size-5" />
              </div>
            </div>
          </label>
        </div>
        {/* Order Date */}
        <div className="col-span-1">
          <label className="flex flex-col gap-1.5 w-full">
            <p className="text-slate-900 dark:text-slate-300 text-sm font-medium leading-normal">
              Order Date
            </p>
            <input
              className="flex w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 focus:border-primary border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 h-11 px-4 text-sm font-normal leading-normal"
              type="date"
              value={orderData.orderDate}
              onChange={(e) => onOrderDataChange('orderDate', e.target.value)}
            />
          </label>
        </div>
        {/* Expected Delivery */}
        <div className="col-span-1">
          <label className="flex flex-col gap-1.5 w-full">
            <p className="text-slate-900 dark:text-slate-300 text-sm font-medium leading-normal">
              Expected Delivery
            </p>
            <input
              className="flex w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 focus:border-primary border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 h-11 px-4 text-sm font-normal leading-normal"
              type="date"
              value={orderData.expectedDelivery}
              onChange={(e) => onOrderDataChange('expectedDelivery', e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

