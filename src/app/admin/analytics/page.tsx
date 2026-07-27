import { Metadata } from 'next';
import { AnalyticsCenterClient } from '@/features/admin/analytics/AnalyticsCenterClient';

export const metadata: Metadata = {
  title: 'Marketing Analytics Center | Luxora Admin Executive Studio',
  description: 'Enterprise Marketing Analytics & Executive Intelligence Workspace for Luxora Atelier',
};

export default function AdminAnalyticsPage() {
  return <AnalyticsCenterClient />;
}
