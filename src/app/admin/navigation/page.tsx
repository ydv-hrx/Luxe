import { Metadata } from 'next';
import { NavigationManagerClient } from '@/features/admin/navigation/NavigationManagerClient';

export const metadata: Metadata = {
  title: 'Navigation Manager | Luxora Admin Architecture Workspace',
  description: 'Enterprise Navigation & Menu Architecture Workspace for Luxora Atelier',
};

export default function AdminNavigationPage() {
  return <NavigationManagerClient />;
}
