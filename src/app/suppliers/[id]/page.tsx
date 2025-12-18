import SupplierDetailPage from '@/components/suppliers/SupplierDetailPage';

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return <SupplierDetailPage supplierId={params.id} />;
}

