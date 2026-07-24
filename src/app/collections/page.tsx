import React from 'react';
import { Metadata } from 'next';
import { commerceService } from '@/lib/services/commerce';
import { CollectionCard } from '@/features/catalog/CollectionCard';
import { Badge } from '@/components/ui/Badge';
import { Layers } from 'lucide-react';

import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Curated Collections | LUXE Atelier',
  description: 'Explore our capsule collections: Grade-A Mongolian Cashmere, Tailored Virgin Wool Outerwear, and Artisan Italian Leather Goods.',
};

export default async function CollectionsIndexPage() {
  const collections = await commerceService.getCollections();

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 sm:py-12 flex flex-col gap-10">
      <PageHeader
        badge="Curated Catalog Capsules"
        title="Atelier Collections"
        subtitle="Discover themed luxury capsule edits, meticulously designed with architectural cuts, Grade-A cashmere, and bespoke Italian leather craftsmanship."
      />

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((col) => (
          <CollectionCard key={col.id} collection={col} />
        ))}
      </div>
    </div>
  );
}
