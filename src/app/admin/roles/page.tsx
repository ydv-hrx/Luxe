import { Metadata } from 'next';
import { RolesManagerClient } from '@/features/admin/roles/RolesManagerClient';

export const metadata: Metadata = {
  title: 'Roles & Permissions Manager | Luxora Admin Enterprise Workspace',
  description: 'Role-Based Access Control & Staff Security Management Workspace for Luxora Atelier',
};

export default function AdminRolesPage() {
  return <RolesManagerClient />;
}
