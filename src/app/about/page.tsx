import React from 'react';
import { Metadata } from 'next';
import { AboutHero } from '@/features/about/AboutHero';
import { AboutStory } from '@/features/about/AboutStory';
import { ArtOfCuration } from '@/features/about/ArtOfCuration';
import { CuratedCategories } from '@/features/about/CuratedCategories';
import { OurPrinciples } from '@/features/about/OurPrinciples';
import { TrustSection } from '@/features/about/TrustSection';
import { StatisticsSection } from '@/features/about/StatisticsSection';
import { BrandStatement } from '@/features/about/BrandStatement';
import { CustomerVoices } from '@/features/about/CustomerVoices';
import { AboutNewsletter } from '@/features/about/AboutNewsletter';

export const metadata: Metadata = {
  title: 'About Luxora | The Art of Curation',
  description:
    'Curating exceptional products for modern living through thoughtful design, trusted brands, and timeless craftsmanship across fashion, tech, home, and beauty.',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* 1. Editorial Hero */}
      <AboutHero />

      {/* 2. Our Story */}
      <AboutStory />

      {/* 3. The Art of Curation */}
      <ArtOfCuration />

      {/* 4. What We Curate (Asymmetric Masonry Grid) */}
      <CuratedCategories />

      {/* 5. Our Principles */}
      <OurPrinciples />

      {/* 6. Why Trust Luxora */}
      <TrustSection />

      {/* 7. By The Numbers */}
      <StatisticsSection />

      {/* 8. Brand Statement */}
      <BrandStatement />

      {/* 9. Customer Voices */}
      <CustomerVoices />

      {/* 10. Newsletter */}
      <AboutNewsletter />
    </div>
  );
}
