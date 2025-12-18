'use client';

interface DocumentsNotesTabProps {
  supplierId: string;
}

export default function DocumentsNotesTab({ supplierId }: DocumentsNotesTabProps) {
  return (
    <div className="text-center py-12">
      <p className="text-slate-500 dark:text-slate-400">Documents & Notes content coming soon...</p>
    </div>
  );
}

