'use client';

import { useState } from 'react';

interface StockItem {
  id: string;
  medicineName: string;
  batchNumber: string;
  quantity: number;
}

interface StockReceivingFormProps {
  onAddItem: (item: StockItem) => void;
}

export default function StockReceivingForm({ onAddItem }: StockReceivingFormProps) {
  const [formData, setFormData] = useState({
    medicine: '',
    supplier: 'AAH Pharmaceuticals',
    costPrice: '',
    quantity: 1,
    batchNumber: '',
    expiryDate: '',
  });
  const [showStockPreview, setShowStockPreview] = useState(false);
  const [currentStock, setCurrentStock] = useState(14);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Show stock preview when medicine is entered
    if (field === 'medicine' && value) {
      setShowStockPreview(true);
    }
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, formData.quantity + delta);
    setFormData((prev) => ({ ...prev, quantity: newQuantity }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.medicine && formData.batchNumber) {
      onAddItem({
        id: Date.now().toString(),
        medicineName: formData.medicine,
        batchNumber: formData.batchNumber,
        quantity: formData.quantity,
      });
      // Reset form
      setFormData({
        medicine: '',
        supplier: 'AAH Pharmaceuticals',
        costPrice: '',
        quantity: 1,
        batchNumber: '',
        expiryDate: '',
      });
      setShowStockPreview(false);
    }
  };

  const handleClear = () => {
    setFormData({
      medicine: '',
      supplier: 'AAH Pharmaceuticals',
      costPrice: '',
      quantity: 1,
      batchNumber: '',
      expiryDate: '',
    });
    setShowStockPreview(false);
  };

  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">add_box</span>
          New Entry
        </h3>
        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
          REF-2023-X92
        </span>
      </div>
      <form onSubmit={handleSubmit} className="p-6 lg:p-8 flex flex-col gap-6">
        {/* Row 1: Medicine Search */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Select Medicine
          </label>
          <div className="relative flex w-full items-center rounded-lg shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400">medication</span>
            </div>
            <input
              autoFocus
              className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 pl-10 pr-12 py-3 text-base focus:border-primary focus:ring-primary dark:text-white placeholder:text-slate-400"
              placeholder="Scan barcode or type to search DM+d..."
              type="text"
              value={formData.medicine}
              onChange={(e) => handleInputChange('medicine', e.target.value)}
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-primary cursor-pointer"
              title="Use Scanner"
              type="button"
            >
              <span className="material-symbols-outlined">qr_code_scanner</span>
            </button>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Supports EAN-13, UPC-A, and DataMatrix codes.
          </p>
        </div>

        {/* Live Stock Preview Alert (Conditional) */}
        {showStockPreview && formData.medicine && (
          <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <span className="material-symbols-outlined text-primary mt-0.5 text-[20px]">info</span>
            <div className="flex flex-col text-sm">
              <span className="font-medium text-slate-900 dark:text-blue-100">
                {formData.medicine} (21 Pack)
              </span>
              <span className="text-slate-600 dark:text-blue-200/80">
                Current Stock: <strong className="text-slate-900 dark:text-white">{currentStock}</strong> → New Level will be:{' '}
                <strong className="text-primary">{currentStock + formData.quantity}</strong>
              </span>
            </div>
          </div>
        )}

        {/* Row 2: Supplier */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Supplier</label>
          <div className="relative">
            <select
              className="form-select block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2.5 pl-3 pr-10 text-sm focus:border-primary focus:ring-primary dark:text-white"
              value={formData.supplier}
              onChange={(e) => handleInputChange('supplier', e.target.value)}
            >
              <option>AAH Pharmaceuticals</option>
              <option>Alliance Healthcare</option>
              <option>Phoenix Medical Supplies</option>
              <option>Sigma Pharmaceuticals</option>
            </select>
          </div>
        </div>

        {/* Row 3: Cost & Qty */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Cost Price (Ex. VAT)
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-slate-500 sm:text-sm">£</span>
              </div>
              <input
                className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 pl-7 py-2.5 sm:text-sm focus:border-primary focus:ring-primary dark:text-white placeholder:text-slate-400"
                placeholder="0.00"
                step="0.01"
                type="number"
                value={formData.costPrice}
                onChange={(e) => handleInputChange('costPrice', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Quantity Received
            </label>
            <div className="flex items-center rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 overflow-hidden shadow-sm focus-within:ring-1 focus-within:ring-primary focus-within:border-primary">
              <button
                type="button"
                className="px-3 py-2.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary transition-colors border-r border-slate-200 dark:border-slate-700"
                onClick={() => handleQuantityChange(-1)}
              >
                <span className="material-symbols-outlined text-[18px]">remove</span>
              </button>
              <input
                className="form-input flex-1 border-none bg-transparent text-center p-0 text-slate-900 dark:text-white focus:ring-0 sm:text-sm h-full"
                type="number"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 1)}
                min="1"
              />
              <button
                type="button"
                className="px-3 py-2.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary transition-colors border-l border-slate-200 dark:border-slate-700"
                onClick={() => handleQuantityChange(1)}
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
              </button>
            </div>
          </div>
        </div>

        {/* Row 4: Batch & Expiry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Batch Number
            </label>
            <input
              className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 py-2.5 text-sm focus:border-primary focus:ring-primary dark:text-white uppercase tracking-wide placeholder:text-slate-400"
              placeholder="e.g. BN-3928X"
              type="text"
              value={formData.batchNumber}
              onChange={(e) => handleInputChange('batchNumber', e.target.value.toUpperCase())}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Expiry Date
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="material-symbols-outlined text-slate-400 text-[18px]">
                  calendar_today
                </span>
              </div>
              <input
                className="form-input block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 pl-10 py-2.5 text-sm focus:border-primary focus:ring-primary dark:text-white text-slate-500"
                type="date"
                value={formData.expiryDate}
                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
          <button
            type="button"
            className="flex-1 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            onClick={handleClear}
          >
            Clear Form
          </button>
          <button
            type="submit"
            className="flex-[2] px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 flex justify-center items-center gap-2"
          >
            <span className="material-symbols-outlined">save_alt</span>
            Receive Stock
          </button>
        </div>
      </form>
    </div>
  );
}

