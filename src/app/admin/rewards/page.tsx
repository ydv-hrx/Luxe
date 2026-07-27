import { Metadata } from 'next';
import { LoyaltyStudioClient } from '@/features/admin/rewards/LoyaltyStudioClient';

export const metadata: Metadata = {
  title: 'Loyalty & Rewards Manager | Luxora Admin Loyalty Studio',
  description: 'Enterprise Membership & Loyalty Rewards Workspace for Luxora Atelier',
};

export default function AdminRewardsPage() {
  return <LoyaltyStudioClient />;
}
