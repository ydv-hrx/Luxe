import { Metadata } from 'next';
import { MediaLibraryClient } from '@/features/admin/media/MediaLibraryClient';

export const metadata: Metadata = {
  title: 'Digital Asset Management | Luxora Admin Media Library',
  description: 'Enterprise Media Library DAM Studio for Luxora Atelier',
};

export default function AdminMediaPage() {
  return <MediaLibraryClient />;
}
