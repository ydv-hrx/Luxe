import { Metadata } from 'next';
import { OrdersManagerClient } from '@/features/admin/orders/OrdersManagerClient';

export const metadata: Metadata = {
  title: 'Orders Manager | Luxora Admin Operations Workspace',
  description: 'Enterprise Orders & Fulfillment Operations Workspace for Luxora Atelier',
};

export default function AdminOrdersPage() {
  return <OrdersManagerClient />;
}
