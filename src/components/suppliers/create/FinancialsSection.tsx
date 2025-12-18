'use client';

interface FinancialsSectionProps {
  paymentTerms: string;
  vatNumber: string;
  onUpdate: (field: string, value: string) => void;
}

export default function FinancialsSection({
  paymentTerms,
  vatNumber,
  onUpdate,
}: FinancialsSectionProps) {
  return (
    <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700/50">
      <h3 className="flex items-center gap-2 text-slate-900 dark:text-white text-lg font-bold leading-tight mb-6">
        <span className="material-symbols-outlined text-primary">payments</span>
        Financials & Terms
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
            Payment Terms
          </p>
          <div className="relative">
            <select
              className="flex w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 text-base transition-all appearance-none cursor-pointer"
              value={paymentTerms}
              onChange={(e) => onUpdate('paymentTerms', e.target.value)}
            >
              <option disabled value="">
                Select payment terms
              </option>
              <option value="immediate">Immediate / On Receipt</option>
              <option value="net15">Net 15 Days</option>
              <option value="net30">Net 30 Days</option>
              <option value="net60">Net 60 Days</option>
              <option value="cod">Cash On Delivery (COD)</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 material-symbols-outlined">
              expand_more
            </span>
          </div>
        </label>
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">
            VAT Registration Number
          </p>
          <input
            className="flex w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base transition-all"
            placeholder="GB 123 4567 89"
            value={vatNumber}
            onChange={(e) => onUpdate('vatNumber', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

