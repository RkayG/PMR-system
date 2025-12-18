import StaffDetailPage from '@/components/staff/StaffDetailPage';

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return <StaffDetailPage staffId={params.id} />;
}

