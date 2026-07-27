import { Metadata } from 'next';
import { ShippingManagerClient } from '@/features/admin/shipping/ShippingManagerClient';

export const metadata: Metadata = {
  title: 'Shipping & Fulfillment Manager | Luxora Admin Operations Workspace',
  description: 'Enterprise Shipping & Fulfillment Logistics Workspace for Luxora Atelier',
};

export default function AdminShippingPage() {
  return <ShippingManagerClient />;
}
