'use client';

interface OrderHistoryTabProps {
  supplierId: string;
}

interface PurchaseOrder {
  id: string;
  poNumber: string;
  date: string;
  status: 'received' | 'pending' | 'cancelled';
  items: number;
  totalValue: string;
}

const purchaseOrders: PurchaseOrder[] = [
  {
    id: '1',
    poNumber: 'PO-2023-001',
    date: 'Oct 20, 2023',
    status: 'received',
    items: 24,
    totalValue: '£2,450.00',
  },
  {
    id: '2',
    poNumber: 'PO-2023-005',
    date: 'Oct 18, 2023',
    status: 'pending',
    items: 12,
    totalValue: '£890.50',
  },
  {
    id: '3',
    poNumber: 'PO-2023-009',
    date: 'Oct 10, 2023',
    status: 'received',
    items: 156,
    totalValue: '£12,300.25',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'received':
      return (
        <span className="inline-flex rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 text-xs font-semibold leading-5 text-emerald-800 dark:text-emerald-400">
          Received
        </span>
      );
    case 'pending':
      return (
        <span className="inline-flex rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 text-xs font-semibold leading-5 text-yellow-800 dark:text-yellow-400">
          Pending
        </span>
      );
    case 'cancelled':
      return (
        <span className="inline-flex rounded-full bg-red-100 dark:bg-red-900/30 px-2 py-1 text-xs font-semibold leading-5 text-red-800 dark:text-red-400">
          Cancelled
        </span>
      );
    default:
      return null;
  }
};

export default function OrderHistoryTab({ supplierId }: OrderHistoryTabProps) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Recent Purchase Orders</h4>
        <button className="text-sm font-medium text-primary hover:text-blue-600">View All Orders</button>
      </div>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                scope="col"
              >
                PO Number
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                scope="col"
              >
                Date
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                scope="col"
              >
                Status
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                scope="col"
              >
                Items
              </th>
              <th
                className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                scope="col"
              >
                Total Value
              </th>
              <th className="relative px-6 py-3" scope="col">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-surface-light dark:bg-surface-dark">
            {purchaseOrders.map((order) => (
              <tr key={order.id}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                  {order.poNumber}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                  {order.date}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">{getStatusBadge(order.status)}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                  {order.items}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-slate-900 dark:text-white">
                  {order.totalValue}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <a className="text-primary hover:text-blue-600" href="#">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

