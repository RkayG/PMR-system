'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string | null;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="flex flex-wrap gap-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <span className="text-slate-400 dark:text-slate-600 mx-2">/</span>
          )}
          {item.href ? (
            <Link
              className="text-slate-500 dark:text-slate-400 font-medium hover:text-primary transition-colors"
              href={item.href}
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-900 dark:text-white font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
}
