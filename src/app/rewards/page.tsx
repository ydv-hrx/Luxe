import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { loyaltyService } from '@/lib/services/loyalty';
import { Badge } from '@/components/ui/Badge';
import { Gem } from 'lucide-react';

const LoyaltyDashboardClient = dynamic(
  () => import('@/features/loyalty/LoyaltyDashboardClient').then((m) => m.LoyaltyDashboardClient)
);

export const metadata: Metadata = {
  title: 'Diamond Tier VIP Rewards | LUXE Collective',
  description: 'Redeem VIP points for bespoke apparel credit, monogramming vouchers, and private gala passes.',
};

export default async function RewardsPage() {
  const profile = await loyaltyService.getLoyaltyProfile();
  const rewards = await loyaltyService.getAvailableRewards();

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-10">
      {/* Header Banner */}
      <div className="flex flex-col gap-3 pb-8 border-b border-neutral-200">
        <Badge variant="outline" className="w-fit">
          VIP Loyalty & Rewards
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-semibold font-serif text-neutral-900">
          Diamond Tier Rewards
        </h1>
        <p className="text-sm text-neutral-600">
          Exclusive privileges curated for our most distinguished collectors.
        </p>
      </div>

      <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-3xl animate-pulse" />}>
        <LoyaltyDashboardClient profile={profile} rewards={rewards} />
      </Suspense>
    </div>
  );
}
