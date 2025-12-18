import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          PMR System
        </h1>
        <p className="text-center text-lg mb-8">
          Patient Medication Record System for UK Pharmacies
        </p>
        <div className="text-center flex gap-4 justify-center flex-wrap">
          <Link
            href="/prescriptions/new"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors"
          >
            New Prescription
          </Link>
          <Link
            href="/prescriptions/Rx-293849"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 transition-colors"
          >
            View Prescription Details
          </Link>
          <Link
            href="/inventory"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
          >
            Inventory
          </Link>
        </div>
      </div>
    </main>
  );
}
