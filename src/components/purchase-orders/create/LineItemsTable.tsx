'use client';

import type { LineItem } from '../CreatePurchaseOrderPage';

interface LineItemsTableProps {
  lineItems: LineItem[];
  onUpdateItem: (id: string, field: keyof LineItem, value: string | number) => void;
  onAddItem: () => void;
  onRemoveItem: (id: string) => void;
}

const getItemIcon = (index: number) => {
  const icons = ['pill', 'vaccines', 'medication', 'syringe'];
  return icons[index % icons.length];
};

export default function LineItemsTable({
  lineItems,
  onUpdateItem,
  onAddItem,
  onRemoveItem,
}: LineItemsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
          <tr>
            <th className="p-4 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase w-12 text-center">
              #
            </th>
            <th className="p-4 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase min-w-[240px]">
              Item Description
            </th>
            <th className="p-4 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase w-32">
              Pack Size
            </th>
            <th className="p-4 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase w-32">
              Supplier Code
            </th>
            <th className="p-4 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase w-24">
              Qty
            </th>
            <th className="p-4 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase w-32 text-right">
              Unit Cost (£)
            </th>
            <th className="p-4 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase w-32 text-right">
              Total (£)
            </th>
            <th className="p-4 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase w-16 text-center"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
          {lineItems.map((item, index) => (
            <tr
              key={item.id}
              className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <td className="p-4 text-sm text-slate-500 dark:text-slate-400 text-center align-middle">
                {index + 1}
              </td>
              <td className="p-3 align-middle">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      {getItemIcon(index)}
                    </span>
                  </div>
                  <input
                    className="w-full bg-transparent border-0 border-b border-transparent focus:border-primary focus:ring-0 p-0 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400"
                    type="text"
                    value={item.itemDescription}
                    onChange={(e) => onUpdateItem(item.id, 'itemDescription', e.target.value)}
                    placeholder="Enter item description..."
                  />
                </div>
              </td>
              <td className="p-3 align-middle">
                <input
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded px-2 py-1.5 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary"
                  type="text"
                  value={item.packSize}
                  onChange={(e) => onUpdateItem(item.id, 'packSize', e.target.value)}
                  placeholder="Pack size..."
                />
              </td>
              <td className="p-3 align-middle">
                <span className="text-sm text-slate-500 dark:text-slate-400">{item.supplierCode}</span>
              </td>
              <td className="p-3 align-middle">
                <input
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary"
                  min="1"
                  type="number"
                  value={item.quantity}
                  onChange={(e) => onUpdateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                />
              </td>
              <td className="p-3 align-middle text-right">
                <input
                  className="w-24 bg-transparent border-0 border-b border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-0 p-0 text-sm text-right text-slate-900 dark:text-white"
                  step="0.01"
                  type="number"
                  value={item.unitCost}
                  onChange={(e) =>
                    onUpdateItem(item.id, 'unitCost', parseFloat(e.target.value) || 0)
                  }
                />
              </td>
              <td className="p-3 align-middle text-right">
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.total.toFixed(2)}
                </span>
              </td>
              <td className="p-3 align-middle text-center">
                <button
                  className="text-slate-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20"
                  onClick={() => onRemoveItem(item.id)}
                >
                  <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </td>
            </tr>
          ))}
          {/* Add Row */}
          <tr>
            <td className="p-3" colSpan={8}>
              <button
                className="flex items-center gap-2 text-primary hover:text-blue-600 font-medium text-sm px-4 py-2 hover:bg-primary/5 rounded-lg w-full justify-start transition-colors border border-dashed border-primary/30 hover:border-primary"
                onClick={onAddItem}
              >
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
                Add Medication Item
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

