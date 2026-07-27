import { Metadata } from 'next';
import { FooterManagerClient } from '@/features/admin/footer/FooterManagerClient';

export const metadata: Metadata = {
  title: 'Footer Manager | Luxora Admin World-Class Visual Studio',
  description: 'Enterprise Footer & Navigation Builder Visual Studio for Luxora Atelier',
};

export default function AdminFooterPage() {
  return <FooterManagerClient />;
}
