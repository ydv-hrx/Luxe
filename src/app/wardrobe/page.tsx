import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { recommendationService } from '@/lib/services/recommendation';
import { WardrobeAnalytics } from '@/features/wardrobe/WardrobeAnalytics';
import { Badge } from '@/components/ui/Badge';

const AIStylistDashboard = dynamic(
  () => import('@/features/stylist/AIStylistDashboard').then((mod) => mod.AIStylistDashboard)
);

export const metadata: Metadata = {
  title: 'Personal Digital Wardrobe & AI Stylist | LUXE Atelier',
  description: 'Track your garment wear frequency, RFID passports, and AI fashion identity.',
};

export default async function WardrobePage() {
  const dna = await recommendationService.getStyleDNA();
  const recommendations = await recommendationService.getStylistRecommendations();

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-12">
      {/* Header Banner */}
      <div className="flex flex-col gap-3 pb-8 border-b border-neutral-200">
        <Badge variant="outline" className="w-fit">
          Style Intelligence
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-semibold font-serif text-neutral-900">
          Digital Closet & AI Stylist
        </h1>
        <p className="text-sm text-neutral-600 max-w-xl">
          Track wear frequency, RFID authenticity passports, and receive personalized outfit recommendations.
        </p>
      </div>

      {/* Wardrobe Analytics (Server Component) */}
      <Suspense fallback={<div className="h-40 bg-neutral-100 rounded-2xl animate-pulse" />}>
        <WardrobeAnalytics />
      </Suspense>

      {/* AI Stylist Dashboard (Dynamic Import Client Component) */}
      <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-2xl animate-pulse" />}>
        <AIStylistDashboard dna={dna} recommendations={recommendations} />
      </Suspense>
    </div>
  );
}
