'use client';

interface SearchAndFiltersProps {
  viewMode: 'list' | 'grid';
  onViewModeChange: (mode: 'list' | 'grid') => void;
}

export default function SearchAndFilters({ viewMode, onViewModeChange }: SearchAndFiltersProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
      {/* Search */}
      <div className="relative w-full lg:w-96 group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary">search</span>
        </div>
        <input
          className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-shadow"
          placeholder="Search by Drug Name, Batch, or Scan Barcode..."
          type="text"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
          <span className="material-symbols-outlined text-slate-400 hover:text-slate-600" title="Scan Barcode">qr_code_scanner</span>
        </div>
      </div>

      {/* Filters & Actions */}
      <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
        {/* View Toggle */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg mr-2 border border-slate-200 dark:border-slate-700">
          <button
            className={`p-1.5 rounded transition-colors ${
              viewMode === 'list'
                ? 'bg-white dark:bg-slate-600 text-primary dark:text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
            title="List View"
            onClick={() => onViewModeChange('list')}
          >
            <span className="material-symbols-outlined text-[20px]">view_list</span>
          </button>
          <button
            className={`p-1.5 rounded transition-colors ${
              viewMode === 'grid'
                ? 'bg-white dark:bg-slate-600 text-primary dark:text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
            title="Grid View"
            onClick={() => onViewModeChange('grid')}
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
          </button>
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <select className="appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 py-2.5 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer">
            <option>All Categories</option>
            <option>Controlled Drugs (CD)</option>
            <option>Fridge Lines</option>
            <option>Generics</option>
            <option>Brands</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </div>
        </div>

        <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-sm font-medium transition-colors">
          <span className="material-symbols-outlined text-lg">tune</span>
          <span>Adjust Stock</span>
        </button>

        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-blue-600 text-white rounded-lg text-sm font-bold shadow-md shadow-blue-500/20 transition-all active:scale-95 ml-auto lg:ml-0">
          <span className="material-symbols-outlined text-lg">add_box</span>
          <span>Receive Stock</span>
        </button>
      </div>
    </div>
  );
}

