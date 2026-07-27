import { Metadata } from 'next';
import { IntegrationsHubClient } from '@/features/admin/integrations/IntegrationsHubClient';

export const metadata: Metadata = {
  title: 'API & Integrations Hub | Luxora Admin World-Class Connectivity Center',
  description: 'Enterprise Integration Stack & Connectivity Hub for Luxora Atelier',
};

export default function AdminIntegrationsPage() {
  return <IntegrationsHubClient />;
}
