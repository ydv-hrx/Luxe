import { Metadata } from 'next';
import { DashboardOverviewClient } from '@/features/admin/DashboardOverviewClient';

export const metadata: Metadata = {
  title: 'Dashboard Overview | Luxora Admin',
  description: 'Enterprise Director Overview Dashboard for Luxora Atelier',
};

export default function AdminDashboardPage() {
  return <DashboardOverviewClient />;
}
