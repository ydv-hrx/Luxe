import React from 'react';
import { Metadata } from 'next';
import { commerceService } from '@/lib/services/commerce';
import { StitchHomeHero } from '@/features/home/StitchHomeHero';
import { StitchHomeCategories } from '@/features/home/StitchHomeCategories';
import { StitchHomeNewArrivals } from '@/features/home/StitchHomeNewArrivals';
import { StitchHomeEditorialBanner } from '@/features/home/StitchHomeEditorialBanner';
import { StitchHomeTrustFeatures } from '@/features/home/StitchHomeTrustFeatures';
import { StitchHomeDailyInspiration } from '@/features/home/StitchHomeDailyInspiration';
import { StitchHomeNewsletter } from '@/features/home/StitchHomeNewsletter';
import { FloatingAIAssistant } from '@/features/home/FloatingAIAssistant';

export const metadata: Metadata = {
  title: 'LUXE | Curated for Exceptional Living',
  description:
    'Discover a world of refined pieces, meticulously selected for those who value quality, craftsmanship, and understated elegance.',
};

export default async function HomePage() {
  const featuredProducts = await commerceService.getFeaturedProducts();

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* 1. Editorial Hero Section */}
      <StitchHomeHero />

      {/* 2. Shop by Category */}
      <StitchHomeCategories />

      {/* 3. Featured New Arrivals */}
      <StitchHomeNewArrivals products={featuredProducts} />

      {/* 4. Editorial Banner */}
      <StitchHomeEditorialBanner />

      {/* 5. Trust Features */}
      <StitchHomeTrustFeatures />

      {/* 6. Daily Inspiration */}
      <StitchHomeDailyInspiration />

      {/* 7. Newsletter Section */}
      <StitchHomeNewsletter />

      {/* Floating AI Assistant */}
      <FloatingAIAssistant />
    </div>
  );
}
