import { Metadata } from 'next';
import { CollectionManagerClient } from '@/features/admin/collections/CollectionManagerClient';

export const metadata: Metadata = {
  title: 'Collection Manager | Luxora Admin Editorial Workspace',
  description: 'Enterprise Collection & Campaign Editorial Workspace for Luxora Atelier',
};

export default function AdminCollectionsPage() {
  return <CollectionManagerClient />;
}
