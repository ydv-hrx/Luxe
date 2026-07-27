import React from 'react';
import { Metadata } from 'next';
import { DealsHero } from '@/features/deals/DealsHero';
import { DealsCountdownBanner } from '@/features/deals/DealsCountdownBanner';
import { FeaturedLuxuryOffers } from '@/features/deals/FeaturedLuxuryOffers';
import { EditorialCollections } from '@/features/deals/EditorialCollections';
import { DealsByCategory } from '@/features/deals/DealsByCategory';
import { DealsTrustSection } from '@/features/deals/DealsTrustSection';
import { DealsNewsletter } from '@/features/deals/DealsNewsletter';

export const metadata: Metadata = {
  title: 'LUXORA | Exclusive Deals',
  description:
    'Exceptional pieces. Limited time offers. Curated exclusively for Luxora members. Experience the pinnacle of luxury with our season selected discounts.',
};

export default function DealsPage() {
  return (
    <div className="w-full">
      {/* 1. Editorial Hero */}
      <DealsHero />

      {/* 2. Countdown Banner */}
      <DealsCountdownBanner />

      {/* 3. Featured Luxury Offers */}
      <FeaturedLuxuryOffers />

      {/* 4. Editorial Collection Feature */}
      <EditorialCollections />

      {/* 5. Browse by Discipline */}
      <DealsByCategory />

      {/* 6. Trust Features */}
      <DealsTrustSection />

      {/* 7. Stay Informed Newsletter */}
      <DealsNewsletter />
    </div>
  );
}
