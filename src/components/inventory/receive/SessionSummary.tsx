'use client';

interface StockItem {
  id: string;
  medicineName: string;
  batchNumber: string;
  quantity: number;
}

interface SessionSummaryProps {
  items: StockItem[];
  onRemoveItem: (id: string) => void;
}

export default function SessionSummary({ items, onRemoveItem }: SessionSummaryProps) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full max-h-[600px]">
      <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
          Session Summary
        </h3>
        <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">
          {items.length} {items.length === 1 ? 'Item' : 'Items'} Added
        </span>
      </div>
      <div className="flex-1 overflow-y-auto p-0">
        {items.length === 0 ? (
          <div className="p-8 text-center text-slate-500 dark:text-slate-400">
            <span className="material-symbols-outlined text-4xl mb-2 block">inventory_2</span>
            <p className="text-sm">No items added yet</p>
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800 sticky top-0 z-10">
              <tr>
                <th
                  className="px-4 py-3 font-medium text-slate-500 dark:text-slate-400 text-xs uppercase"
                  scope="col"
                >
                  Item
                </th>
                <th
                  className="px-4 py-3 font-medium text-slate-500 dark:text-slate-400 text-xs uppercase text-right"
                  scope="col"
                >
                  Qty
                </th>
                <th
                  className="px-4 py-3 font-medium text-slate-500 dark:text-slate-400 text-xs uppercase text-right"
                  scope="col"
                ></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-900 dark:text-white">
                        {item.medicineName}
                      </span>
                      <span className="text-xs text-slate-500">BN: {item.batchNumber}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-slate-900 dark:text-white">
                    {item.quantity}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      className="text-slate-400 hover:text-red-500 transition-colors"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {items.length > 0 && (
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
          <button className="w-full py-2 text-sm text-primary font-medium hover:underline flex items-center justify-center gap-1">
            View Full Intake History
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );
}

