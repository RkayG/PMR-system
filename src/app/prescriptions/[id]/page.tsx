import PrescriptionDetails from '@/components/prescriptions/PrescriptionDetails';

export default function PrescriptionPage({
  params,
}: {
  params: { id: string };
}) {
  return <PrescriptionDetails prescriptionId={params.id} />;
}
