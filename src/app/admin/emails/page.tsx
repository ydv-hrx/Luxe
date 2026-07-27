import { Metadata } from 'next';
import { EmailStudioClient } from '@/features/admin/emails/EmailStudioClient';

export const metadata: Metadata = {
  title: 'Email Campaign Studio | Luxora Admin Editorial Studio',
  description: 'Enterprise Email Campaign & Editorial Workspace for Luxora Atelier',
};

export default function AdminEmailsPage() {
  return <EmailStudioClient />;
}
