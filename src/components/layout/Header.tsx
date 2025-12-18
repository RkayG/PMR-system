'use client';

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
}

export default function Header({ title, showSearch = true }: HeaderProps) {
  return (
    <header className="flex-shrink-0 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 px-6 py-3 z-10">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <div className="lg:hidden p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
          <span className="material-symbols-outlined">menu</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight">
          {title || 'Pharmacy PMR'}
        </h2>
      </div>
      <div className="flex items-center gap-4">
        {showSearch && (
          <div className="hidden md:flex flex-1 items-center max-w-sm">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input
                className="block w-full rounded-lg border-0 bg-slate-100 dark:bg-slate-800 py-2 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:ring-inset"
                placeholder="Search patients, drugs, prescriptions..."
                type="text"
              />
            </div>
          </div>
        )}
        <button className="flex items-center justify-center p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="flex items-center justify-center p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">help</span>
        </button>
      </div>
    </header>
  );
}
