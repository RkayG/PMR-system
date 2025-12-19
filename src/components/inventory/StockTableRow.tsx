'use client';

import { ChevronDown, EllipsisVertical } from 'lucide-react';

interface StockItem {
  id: string;
  medicineName: string;
  category: string;
  packSize: string;
  quantityOnHand: number;
  minimumLevel: number;
  batchNumber: string;
  expiry: string;
  supplier: string;
  status: 'low' | 'expiring' | 'in_stock';
  hasMultipleBatches?: boolean;
  batches?: Array<{
    batchNumber: string;
    quantity: number;
    expiry: string;
    location: string;
  }>;
}

interface StockTableRowProps {
  item: StockItem;
  isExpanded: boolean;
  isSelected: boolean;
  onToggleExpand: () => void;
  onToggleSelect: () => void;
}

export default function StockTableRow({
  item,
  isExpanded,
  isSelected,
  onToggleExpand,
  onToggleSelect,
}: StockTableRowProps) {
  const getStatusBadge = () => {
    switch (item.status) {
      case 'low':
        return (
          <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300">
            Low Stock
          </span>
        );
      case 'expiring':
        return (
          <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
            Expiring
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            In Stock
          </span>
        );
    }
  };

  const getBorderColor = () => {
    switch (item.status) {
      case 'low':
        return 'border-l-red-500';
      case 'expiring':
        return 'border-l-amber-500';
      default:
        return 'border-l-transparent';
    }
  };

  const getIconColor = () => {
    if (item.category.includes('Brand')) {
      return 'bg-purple-50 dark:bg-purple-900/20 text-purple-600';
    }
    return 'bg-slate-100 dark:bg-slate-700';
  };

  const getIcon = () => {
    if (item.category.includes('Brand')) {
      return 'vaccines';
    }
    return 'pill';
  };

  const isLowStock = item.quantityOnHand < item.minimumLevel;

  return (
    <>
      <tr
        className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group border-l-4 ${getBorderColor()} ${
          item.hasMultipleBatches ? 'cursor-pointer' : ''
        }`}
        onClick={item.hasMultipleBatches ? onToggleExpand : undefined}
      >
        <td className="px-6 py-4 whitespace-nowrap">
          {item.hasMultipleBatches ? (
              <ChevronDown className="size-5 text-slate-400" />
          ) : (
            <input
              className="rounded border-slate-300 text-primary focus:ring-primary size-4"
              type="checkbox"
              checked={isSelected}
              onChange={onToggleSelect}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className={`flex-shrink-0 size-8 ${getIconColor()} rounded-lg flex items-center justify-center text-slate-500`}>
              <span className={`text-lg ${item.category.includes('Brand') ? 'text-purple-600' : ''}`}>
                {getIcon()}
              </span>
            </div>
            <div className="ml-4">
              <div className="text-sm font-bold text-slate-900 dark:text-white">{item.medicineName}</div>
              <div className="text-xs text-slate-500">{item.category}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">
          {item.packSize}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-baseline gap-1">
            <span className={`text-sm font-bold ${isLowStock ? 'text-red-600 dark:text-red-400' : 'text-slate-900 dark:text-white'}`}>
              {item.quantityOnHand}
            </span>
            <span className="text-xs text-slate-400">/ {item.minimumLevel}</span>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-primary cursor-pointer hover:underline">
          {item.batchNumber}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {item.status === 'expiring' ? (
            <div className="flex flex-col">
              <span className="text-sm font-bold text-amber-600 dark:text-amber-400">20 Days</span>
              <span className="text-xs text-slate-400">{item.expiry}</span>
            </div>
          ) : (
            <span className="text-sm text-slate-700 dark:text-slate-300">{item.expiry}</span>
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">
          {item.supplier}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge()}</td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <EllipsisVertical className="size-5" />
          </button>
        </td>
      </tr>
      
      {/* Expanded Content Row */}
      {item.hasMultipleBatches && isExpanded && item.batches && (
        <tr className="bg-slate-50 dark:bg-slate-800/30">
          <td className="px-6 py-4 pl-16" colSpan={9}>
            <div className="text-xs font-semibold text-slate-500 uppercase mb-2">
              Detailed Batch View - {item.medicineName}
            </div>
            <table className="w-full text-sm">
              <thead className="text-slate-400 text-xs text-left">
                <tr>
                  <th className="font-normal py-1">Batch #</th>
                  <th className="font-normal py-1">Quantity</th>
                  <th className="font-normal py-1">Expiry</th>
                  <th className="font-normal py-1">Location</th>
                </tr>
              </thead>
              <tbody className="text-slate-600 dark:text-slate-300">
                {item.batches.map((batch, idx) => (
                  <tr key={idx}>
                    <td className="py-1 font-mono">{batch.batchNumber}</td>
                    <td className="py-1">{batch.quantity}</td>
                    <td className="py-1">{batch.expiry}</td>
                    <td className="py-1">{batch.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
}


