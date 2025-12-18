'use client';

interface OrderSummaryProps {
  subtotal: number;
  vat: number;
  grandTotal: number;
  notes: string;
  onNotesChange: (notes: string) => void;
}

export default function OrderSummary({
  subtotal,
  vat,
  grandTotal,
  notes,
  onNotesChange,
}: OrderSummaryProps) {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/30 p-6 border-t border-slate-200 dark:border-slate-700">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        {/* Notes */}
        <div className="flex-1 max-w-lg">
          <label className="flex flex-col gap-2 w-full">
            <p className="text-slate-900 dark:text-slate-300 text-sm font-medium leading-normal">
              Internal Notes / Delivery Instructions
            </p>
            <textarea
              className="flex w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 focus:border-primary border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 p-3 text-sm font-normal leading-normal min-h-[100px]"
              placeholder="Enter any specific instructions for receiving goods..."
              value={notes}
              onChange={(e) => onNotesChange(e.target.value)}
            />
          </label>
        </div>
        {/* Totals */}
        <div className="w-full md:w-80 flex flex-col gap-3">
          <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
            <span>Subtotal</span>
            <span className="font-medium text-slate-900 dark:text-white">£{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
            <span>VAT (20%)</span>
            <span className="font-medium text-slate-900 dark:text-white">£{vat.toFixed(2)}</span>
          </div>
          <div className="h-px bg-slate-200 dark:bg-slate-700 my-1"></div>
          <div className="flex justify-between items-center">
            <span className="text-base font-bold text-slate-900 dark:text-white">Grand Total</span>
            <span className="text-xl font-black text-primary">£{grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

