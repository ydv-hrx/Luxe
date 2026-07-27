import { Metadata } from 'next';
import { HomepageBuilderClient } from '@/features/admin/cms/HomepageBuilderClient';

export const metadata: Metadata = {
  title: 'Homepage Builder | Luxora Admin CMS',
  description: 'Refined Homepage Builder CMS Studio for Luxora Atelier',
};

export default function AdminCmsPage() {
  return <HomepageBuilderClient />;
}
