'use client';

import type { StockItem } from './StockTable';

interface StockCardProps {
  item: StockItem;
}

export default function StockCard({ item }: StockCardProps) {
  const isLowStock = item.quantityOnHand < item.minimumLevel;
  const getTopBorderColor = () => {
    if (item.status === 'low') return 'bg-red-500';
    if (item.status === 'expiring') return 'bg-amber-500';
    return '';
  };

  const getIconColor = () => {
    if (item.category.includes('Brand')) {
      return 'bg-purple-50 dark:bg-purple-900/20 text-purple-600';
    }
    return 'bg-slate-100 dark:bg-slate-700 text-slate-500';
  };

  const getIcon = () => {
    if (item.category.includes('Brand')) {
      return 'vaccines';
    }
    return 'pill';
  };

  const getStatusBadge = () => {
    switch (item.status) {
      case 'low':
        return (
          <div className="bg-red-50 dark:bg-red-900/20 px-5 py-2.5 border-t border-red-100 dark:border-red-900/30 flex items-center gap-2">
            <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-sm">warning</span>
            <span className="text-xs font-bold text-red-700 dark:text-red-300 uppercase tracking-wide">Low Stock</span>
          </div>
        );
      case 'expiring':
        return (
          <div className="bg-amber-50 dark:bg-amber-900/20 px-5 py-2.5 border-t border-amber-100 dark:border-amber-900/30 flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-sm">history_toggle_off</span>
            <span className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wide">Expiring Soon</span>
          </div>
        );
      default:
        return (
          <div className="px-5 py-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
              <span className="size-1.5 rounded-full bg-green-500"></span>
              In Stock
            </span>
            <span className="text-xs text-slate-400">{item.supplier}</span>
          </div>
        );
    }
  };

  const formatExpiry = () => {
    if (item.status === 'expiring') {
      return (
        <div className="flex flex-col items-end">
          <span className="text-amber-600 dark:text-amber-400 font-bold text-xs">20 Days</span>
          <span className="text-[10px] text-slate-400">{item.expiry}</span>
        </div>
      );
    }
    return <span className="text-slate-700 dark:text-slate-300 text-xs font-medium">{item.expiry}</span>;
  };

  return (
    <div className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-shadow relative group overflow-hidden flex flex-col">
      {/* Top border indicator */}
      {getTopBorderColor() && (
        <div className={`absolute top-0 left-0 w-full h-1 ${getTopBorderColor()}`}></div>
      )}
      
      {/* Card Content */}
      <div className="p-5 flex-1">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className={`size-10 rounded-lg ${getIconColor()} flex items-center justify-center flex-shrink-0`}>
              <span className={`material-symbols-outlined ${item.category.includes('Brand') ? 'text-purple-600' : ''}`}>
                {getIcon()}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white leading-tight">{item.medicineName}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{item.category}</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
            <p className="text-xs text-slate-500 mb-1">On Hand</p>
            <div className="flex items-baseline gap-1">
              <span className={`text-xl font-bold ${isLowStock ? 'text-red-600 dark:text-red-400' : 'text-slate-900 dark:text-white'}`}>
                {item.quantityOnHand}
              </span>
              <span className="text-xs text-slate-400">/ {item.minimumLevel}</span>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
            <p className="text-xs text-slate-500 mb-1">Pack Size</p>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item.packSize}</p>
          </div>
        </div>

        {/* Batch & Expiry Info */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
            <span className="text-slate-500 text-xs">Batch</span>
            {item.hasMultipleBatches ? (
              <span className="italic text-slate-600 dark:text-slate-400 text-xs">{item.batchNumber}</span>
            ) : (
              <span className="font-mono text-primary text-xs">{item.batchNumber}</span>
            )}
          </div>
          <div className="flex justify-between py-1 items-center">
            <span className="text-slate-500 text-xs">Expiry</span>
            {formatExpiry()}
          </div>
        </div>
      </div>

      {/* Status Footer */}
      {getStatusBadge()}
    </div>
  );
}


