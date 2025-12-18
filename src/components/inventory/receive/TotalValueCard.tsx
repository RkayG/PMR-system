'use client';

interface TotalValueCardProps {
  totalValue: number;
}

export default function TotalValueCard({ totalValue }: TotalValueCardProps) {
  return (
    <div className="bg-primary rounded-xl p-5 shadow-lg text-white relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-blue-100 text-sm font-medium mb-1">Total Value Added Today</p>
        <h4 className="text-3xl font-bold tracking-tight">£{totalValue.toFixed(2)}</h4>
      </div>
      <div className="absolute -right-4 -bottom-4 text-white/10">
        <span className="material-symbols-outlined text-[100px]">payments</span>
      </div>
    </div>
  );
}

