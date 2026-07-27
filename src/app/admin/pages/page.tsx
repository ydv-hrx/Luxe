import { Metadata } from 'next';
import { LandingPageBuilderClient } from '@/features/admin/pages/LandingPageBuilderClient';

export const metadata: Metadata = {
  title: 'Landing Page Builder | Luxora Admin Architecture Workspace',
  description: 'Enterprise Landing Page & CMS Architecture Builder for Luxora Atelier',
};

export default function AdminPagesPage() {
  return <LandingPageBuilderClient />;
}
