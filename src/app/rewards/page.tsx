import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { loyaltyService } from '@/lib/services/loyalty';
import { Badge } from '@/components/ui/Badge';
import { Gem } from 'lucide-react';

const LoyaltyDashboardClient = dynamic(
  () => import('@/features/loyalty/LoyaltyDashboardClient').then((m) => m.LoyaltyDashboardClient)
);

import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Diamond Tier VIP Rewards | LUXE Collective',
  description: 'Redeem VIP points for bespoke apparel credit, monogramming vouchers, and private gala passes.',
};

export default async function RewardsPage() {
  const profile = await loyaltyService.getLoyaltyProfile();
  const rewards = await loyaltyService.getAvailableRewards();

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 sm:py-12 flex flex-col gap-10">
      <PageHeader
        badge="VIP Loyalty & Rewards"
        title="Diamond Tier Rewards"
        subtitle="Exclusive privileges curated for our most distinguished collectors."
      />

      <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-3xl animate-pulse" />}>
        <LoyaltyDashboardClient profile={profile} rewards={rewards} />
      </Suspense>
    </div>
  );
}
