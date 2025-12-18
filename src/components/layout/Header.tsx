'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  showSearch?: boolean;
}

export default function Header({ showSearch = true }: HeaderProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 px-6 py-3 shadow-sm">
      <div className="flex items-center gap-8 flex-1">
        {/* Brand/Logo */}
        <Link href="/" className="flex items-center gap-3 text-slate-900 dark:text-white hover:opacity-80 transition-opacity">
          <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm">
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">medication_liquid</span>
              <span className="absolute -top-0.5 -right-0.5 material-symbols-outlined text-primary text-sm font-bold">add</span>
            </div>
          </div>
          <h1 className="text-lg font-bold leading-tight tracking-tight">Pharmacy PMR</h1>
        </Link>

        {/* Search Bar */}
        {showSearch && (
          <div className="hidden md:flex flex-1 items-center max-w-md">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input
                className="block w-full rounded-lg border-0 bg-slate-50 dark:bg-slate-800 py-2 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:ring-inset transition-shadow"
                placeholder="Search patients, drugs, pres..."
                type="text"
              />
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isActive('/') && pathname === '/'
                ? 'text-primary'
                : 'text-slate-600 dark:text-slate-300 hover:text-primary'
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/prescriptions"
            className={`text-sm font-medium transition-colors ${
              isActive('/prescriptions')
                ? 'text-primary'
                : 'text-slate-600 dark:text-slate-300 hover:text-primary'
            }`}
          >
            Prescriptions
          </Link>
          <Link
            href="/patients"
            className={`text-sm font-medium transition-colors ${
              isActive('/patients')
                ? 'text-primary'
                : 'text-slate-600 dark:text-slate-300 hover:text-primary'
            }`}
          >
            Patients
          </Link>
          <Link
            href="/inventory"
            className={`text-sm font-medium transition-colors ${
              isActive('/inventory')
                ? 'text-primary'
                : 'text-slate-600 dark:text-slate-300 hover:text-primary'
            }`}
          >
            Stock
          </Link>
          <Link
            href="/suppliers"
            className={`text-sm font-medium transition-colors ${
              isActive('/suppliers')
                ? 'text-primary'
                : 'text-slate-600 dark:text-slate-300 hover:text-primary'
            }`}
          >
            Suppliers
          </Link>
          <Link
            href="/staff"
            className={`text-sm font-medium transition-colors ${
              isActive('/staff')
                ? 'text-primary'
                : 'text-slate-600 dark:text-slate-300 hover:text-primary'
            }`}
          >
            Staff
          </Link>
        </nav>
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-700 pl-6 ml-6">
        <button className="flex items-center justify-center size-9 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors relative">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-slate-850"></span>
        </button>
        <button className="flex items-center justify-center size-9 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
          <span className="material-symbols-outlined text-[20px]">settings</span>
        </button>
        <button className="flex items-center justify-center size-9 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
          <div
            className="size-9 rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-700"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2SMD7ZLlU0CH-Aoa8KnCgNXQvooFJYW6Z9kVJbEwTFTpkkXRYKuq8X_YieCg3-6-W1KIiW1by6IzQEVqqA3E8Yt7kTfi_rG4t1yBCEfWM2LmMq-dU9JyCzsBm2oO2NZcShjndUapkWh3XaARJgKGPih8mW_4nXLsT-88FN8MLy0xOngZdstaf1J-x4iKD_TCJJihYSzlUT5ZmmAaBBItaVhLeI6xCx5ATsf8CX2Vu1feuYdr9_YzqTQxl3GgnB_lZLzzvuvQKgLU")',
            }}
          />
        </button>
      </div>
    </header>
  );
}
