'use client';

interface PatientInfoGridProps {
  patientId: string;
}

export default function PatientInfoGrid({ patientId }: PatientInfoGridProps) {
  // Mock data - will be replaced with API call
  const patientInfo = {
    address: {
      line1: '12 High Street',
      line2: 'Kensington',
      line3: 'London',
      postcode: 'SW1 4BB',
    },
    contact: {
      mobile: '07700 900123',
      email: 'john.smith@example.com',
    },
    gp: {
      name: 'Dr. A. Jones',
      practice: 'The Royal Surgery',
      phone: '020 7946 0000',
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Address */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex items-center gap-2 mb-3 text-slate-500 dark:text-slate-400">
          <span className="material-symbols-outlined text-[20px]">home</span>
          <span className="text-xs font-semibold uppercase tracking-wider">Address</span>
        </div>
        <p className="text-slate-900 dark:text-white text-sm font-medium leading-relaxed">
          {patientInfo.address.line1}<br />
          {patientInfo.address.line2}<br />
          {patientInfo.address.line3}<br />
          {patientInfo.address.postcode}
        </p>
      </div>

      {/* Contact */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex items-center gap-2 mb-3 text-slate-500 dark:text-slate-400">
          <span className="material-symbols-outlined text-[20px]">call</span>
          <span className="text-xs font-semibold uppercase tracking-wider">Contact</span>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-slate-500">Mobile</p>
            <p className="text-slate-900 dark:text-white text-sm font-medium">{patientInfo.contact.mobile}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Email</p>
            <a
              className="text-primary text-sm font-medium hover:underline"
              href={`mailto:${patientInfo.contact.email}`}
            >
              {patientInfo.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* GP Details */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex items-center gap-2 mb-3 text-slate-500 dark:text-slate-400">
          <span className="material-symbols-outlined text-[20px]">medical_services</span>
          <span className="text-xs font-semibold uppercase tracking-wider">GP Practice</span>
        </div>
        <p className="text-slate-900 dark:text-white text-sm font-medium">{patientInfo.gp.name}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{patientInfo.gp.practice}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm">{patientInfo.gp.phone}</p>
      </div>
    </div>
  );
}

