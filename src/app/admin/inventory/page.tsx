import { Metadata } from 'next';
import { InventoryManagerClient } from '@/features/admin/inventory/InventoryManagerClient';

export const metadata: Metadata = {
  title: 'Inventory Manager | Luxora Admin Global Operations Workspace',
  description: 'Enterprise Inventory & Warehouse Operations Workspace for Luxora Atelier',
};

export default function AdminInventoryPage() {
  return <InventoryManagerClient />;
}
