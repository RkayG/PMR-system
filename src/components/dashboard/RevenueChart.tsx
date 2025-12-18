'use client';

import { ArrowRight } from 'lucide-react';

export default function RevenueChart() {
  return (
    <div className="xl:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Revenue Analysis</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Revenue & Prescriptions Dispensed over time</p>
        </div>
        <button className="text-primary hover:text-blue-600 text-sm font-medium flex items-center gap-1">
          Full Report <ArrowRight className="size-4" />
        </button>
      </div>
      {/* Chart Container */}
      <div className="h-64 w-full">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 300">
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#197fe6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#197fe6" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid Lines */}
          <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="1000" y1="0" y2="0" />
          <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="1000" y1="75" y2="75" />
          <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="1000" y1="150" y2="150" />
          <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="1000" y1="225" y2="225" />
          <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="1000" y1="300" y2="300" />
          {/* Area Path */}
          <path
            d="M0,250 C100,240 150,180 250,190 C350,200 400,120 500,100 C600,80 650,140 750,120 C850,100 900,40 1000,60 L1000,300 L0,300 Z"
            fill="url(#chartGradient)"
          />
          {/* Line Path */}
          <path
            d="M0,250 C100,240 150,180 250,190 C350,200 400,120 500,100 C600,80 650,140 750,120 C850,100 900,40 1000,60"
            fill="none"
            stroke="#197fe6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          {/* Tooltip Point */}
          <circle
            className="dark:stroke-surface-dark"
            cx="750"
            cy="120"
            fill="#197fe6"
            r="6"
            stroke="white"
            strokeWidth="2"
          />
          {/* X Axis Labels */}
          <text className="text-xs fill-slate-400" textAnchor="start" x="0" y="320">
            08:00
          </text>
          <text className="text-xs fill-slate-400" textAnchor="middle" x="250" y="320">
            10:00
          </text>
          <text className="text-xs fill-slate-400" textAnchor="middle" x="500" y="320">
            12:00
          </text>
          <text className="text-xs fill-slate-400" textAnchor="middle" x="750" y="320">
            14:00
          </text>
          <text className="text-xs fill-slate-400" textAnchor="end" x="1000" y="320">
            16:00
          </text>
        </svg>
      </div>
    </div>
  );
}

