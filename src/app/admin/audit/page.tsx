import { Metadata } from 'next';
import { AuditCenterClient } from '@/features/admin/audit/AuditCenterClient';

export const metadata: Metadata = {
  title: 'Audit Center & Activity Timeline | Luxora Admin Enterprise Studio',
  description: 'Enterprise Activity Explorer & Security Investigation Workspace for Luxora Atelier',
};

export default function AdminAuditPage() {
  return <AuditCenterClient />;
}
