import React from 'react';
import { Metadata } from 'next';
import { SupportHero } from '@/features/support/SupportHero';
import { PrimaryActions } from '@/features/support/PrimaryActions';
import { HelpTopics } from '@/features/support/HelpTopics';
import { PersonalShoppingSection } from '@/features/support/PersonalShoppingSection';
import { GiftConciergeSection } from '@/features/support/GiftConciergeSection';
import { SupportFAQ } from '@/features/support/SupportFAQ';
import { ContactOptions } from '@/features/support/ContactOptions';
import { SupportTrustSection } from '@/features/support/SupportTrustSection';
import { SupportNewsletter } from '@/features/support/SupportNewsletter';

export const metadata: Metadata = {
  title: 'Support & Private Concierge | Luxora',
  description:
    'Welcome to the Luxora Concierge. Our specialists are here to provide a seamless, personalized experience with attention to every detail.',
};

export default function SupportPage() {
  return (
    <div className="w-full">
      {/* 1. Editorial Hero */}
      <SupportHero />

      {/* 2. Primary Customer Actions */}
      <PrimaryActions />

      {/* 3. Popular Help Topics */}
      <HelpTopics />

      {/* 4. Personal Shopping Concierge */}
      <PersonalShoppingSection />

      {/* 5. Gift Concierge */}
      <GiftConciergeSection />

      {/* 6. Frequently Asked Questions */}
      <SupportFAQ />

      {/* 7. Contact Options */}
      <ContactOptions />

      {/* 8. Trust Section */}
      <SupportTrustSection />

      {/* 9. Stay Informed Newsletter */}
      <SupportNewsletter />
    </div>
  );
}
