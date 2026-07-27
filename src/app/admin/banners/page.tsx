import { Metadata } from 'next';
import { BannerManagerClient } from '@/features/admin/banners/BannerManagerClient';

export const metadata: Metadata = {
  title: 'Banner Manager | Luxora Admin Campaign System',
  description: 'Enterprise Banner & Campaign Management Studio for Luxora Atelier',
};

export default function AdminBannersPage() {
  return <BannerManagerClient />;
}
