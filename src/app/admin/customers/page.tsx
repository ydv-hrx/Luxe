import { Metadata } from 'next';
import { CustomerManagerClient } from '@/features/admin/customers/CustomerManagerClient';

export const metadata: Metadata = {
  title: 'Customer Manager | Luxora Admin CRM Workspace',
  description: 'Enterprise Customer Relationship & Luxury CRM Workspace for Luxora Atelier',
};

export default function AdminCustomersPage() {
  return <CustomerManagerClient />;
}
