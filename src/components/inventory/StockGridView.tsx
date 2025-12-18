'use client';

import StockCard from './StockCard';
import type { StockItem } from './StockTable';

interface StockGridViewProps {
  items: StockItem[];
}

export default function StockGridView({ items }: StockGridViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <StockCard key={item.id} item={item} />
      ))}
    </div>
  );
}

