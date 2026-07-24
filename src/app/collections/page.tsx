import React from 'react';
import { Metadata } from 'next';
import { commerceService } from '@/lib/services/commerce';
import { CollectionCard } from '@/features/catalog/CollectionCard';
import { Badge } from '@/components/ui/Badge';
import { Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Curated Collections | LUXE Atelier',
  description: 'Explore our capsule collections: Grade-A Mongolian Cashmere, Tailored Virgin Wool Outerwear, and Artisan Italian Leather Goods.',
};

export default async function CollectionsIndexPage() {
  const collections = await commerceService.getCollections();

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-10">
      {/* Header Banner */}
      <div className="flex flex-col gap-3 pb-8 border-b border-neutral-200">
        <Badge variant="outline" className="w-fit">
          Curated Catalog Capsules
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-semibold font-serif text-neutral-900">
          Atelier Collections
        </h1>
        <p className="text-sm text-neutral-600 max-w-xl">
          Discover themed luxury capsule edits, meticulously designed with architectural cuts, Grade-A cashmere, and bespoke Italian leather craftsmanship.
        </p>
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((col) => (
          <CollectionCard key={col.id} collection={col} />
        ))}
      </div>
    </div>
  );
}
