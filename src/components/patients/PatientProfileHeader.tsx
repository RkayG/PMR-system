'use client';

import { Edit, EyeOff } from 'lucide-react';

interface PatientProfileHeaderProps {
  patientId: string;
}

export default function PatientProfileHeader({ patientId }: PatientProfileHeaderProps) {
  // Mock data - will be replaced with API call
  const patient = {
    id: patientId,
    name: 'John Smith',
    age: 43,
    gender: 'Male',
    nhsNumber: '123 456 7890',
    photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbzSrA2gDIO2TwlcTHPbPBfxBz-RmviBmNKkSp2NVfNQTJyQp1eHKdJdQecIOUiyryZan1ozPqRmhoLAL9IRaXmJM5y0Qg7uKhgFvE1rHc5-AISINiCc27NDOetaka_chit9V4OkPyNqaF3SoiNZiahopluCPFRF_esJg_t5GjGiA748HslplbLEYix9MtyUxf_KTKsekTyHzoBgWFAbouze8ksRJLACcvezMuuiqvCF6sITJzLo68VuZsyuVldRIGVm2AoIW0vtE',
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
      <div className="flex gap-5 items-center">
        <div
          className="size-20 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover shadow-sm ring-4 ring-white dark:ring-slate-800"
          style={{
            backgroundImage: `url("${patient.photo}")`,
          }}
        />
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{patient.name}</h1>
            <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-0.5 rounded text-sm font-medium">
              {patient.gender}
            </span>
            <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-0.5 rounded text-sm font-medium">
              {patient.age} Years
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-slate-500 dark:text-slate-400 text-sm">NHS Number:</span>
            <span className="font-mono text-slate-900 dark:text-white font-medium bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded text-sm tracking-wide">
              {patient.nhsNumber}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center justify-center rounded-full size-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-500 hover:text-primary hover:border-primary transition-colors">
          <Edit className="size-5" />
        </button>
        <button className="flex items-center justify-center rounded-full size-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-500 hover:text-primary hover:border-primary transition-colors">
          <EyeOff className="size-5" />
        </button>
      </div>
    </div>
  );
}

