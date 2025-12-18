'use client';

import { MapPin } from 'lucide-react';

export default function LocationsCard() {
  return (
    <div className="flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark p-5 shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold text-slate-900 dark:text-white">Locations</h3>
        <div className="rounded-full bg-purple-50 dark:bg-purple-900/20 p-2 text-purple-600 dark:text-purple-400">
          <MapPin className="size-5" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Warehouse & Billing
          </p>
          <p className="text-sm leading-relaxed text-slate-900 dark:text-white">
            Unit 5, Industrial Park
            <br />
            Birmingham, West Midlands
            <br />
            B2 5JS, United Kingdom
          </p>
        </div>
        <div className="mt-auto h-32 w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 bg-cover bg-center">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBUp8y0BNq4ifj-mbdcRCDw8LjHYHyiiGz3Nq3rBpVx7g0ytM3zDdfm2JMaUsXSRTy-5ZUCiRc_Tba2cTT4aU0NYBMnE3zUdxlAf1c1feTYE_mbk4tV46N9aXREsPKQtNaLiGA1Fha2zgjsI1nwzOjypr9Qvd3BOmJJA2zfypHHaXInNPd5Br6tSKxka7OfdmtBIQ1Y5ZLw75XUYmWqbQe8FoqxP749ZEt2IBJztM93LkA0Soecf0qnUFQ3bAgLlbDXczZTKEklIs")',
            }}
          />
        </div>
      </div>
    </div>
  );
}

