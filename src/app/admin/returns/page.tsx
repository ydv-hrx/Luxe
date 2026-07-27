import { Metadata } from 'next';
import { ReturnsManagerClient } from '@/features/admin/returns/ReturnsManagerClient';

export const metadata: Metadata = {
  title: 'Returns & Exchanges Manager | Luxora Admin Operations Workspace',
  description: 'Enterprise Returns & Exchanges Operations Workspace for Luxora Atelier',
};

export default function AdminReturnsPage() {
  return <ReturnsManagerClient />;
}
