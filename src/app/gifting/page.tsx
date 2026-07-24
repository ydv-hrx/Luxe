import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { commerceService } from '@/lib/services/commerce';
import { giftService } from '@/lib/services/gifting';
import { Badge } from '@/components/ui/Badge';

const GiftBuilderClient = dynamic(
  () => import('@/features/gifting/GiftBuilderClient').then((mod) => mod.GiftBuilderClient)
);

export const metadata: Metadata = {
  title: 'LUXE Gifting Studio | Bespoke Packaging & Custom Messages',
  description: 'Custom monogramming, magnetic black boxes, and digital unboxing reveals.',
};

export default async function GiftingPage() {
  const products = await commerceService.getProducts();
  const packagingOptions = await giftService.getPackagingOptions();

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-10">
      {/* Header Banner */}
      <div className="flex flex-col gap-3 pb-8 border-b border-neutral-200">
        <Badge variant="outline" className="w-fit">
          Bespoke Gifting Studio
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-semibold font-serif text-neutral-900">
          The Art of Luxury Presentation
        </h1>
        <p className="text-sm text-neutral-600 max-w-xl">
          Create unforgettable moments with custom foil embossing, silk ribbon binding, and interactive digital reveals.
        </p>
      </div>

      {/* Lazy-Loaded Interactive Gift Builder */}
      <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-3xl animate-pulse" />}>
        <GiftBuilderClient availableProducts={products} packagingOptions={packagingOptions} />
      </Suspense>
    </div>
  );
}
