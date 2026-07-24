import React from 'react';
import { Metadata } from 'next';
import { commerceService } from '@/lib/services/commerce';
import { ProductCard } from '@/components/ui/ProductCard';
import { Badge } from '@/components/ui/Badge';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Search Hub & Discovery | LUXE Catalog',
  description: 'Search architectural cashmere, wool outerwear, leather totes, and silk gala dresses.',
};

interface SearchPageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { query = '' } = await searchParams;
  const products = query ? await commerceService.searchProducts(query) : await commerceService.getProducts();

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-10">
      <div className="flex flex-col gap-3 pb-8 border-b border-neutral-200">
        <Badge variant="outline" className="w-fit">
          Catalog Search
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-semibold font-serif text-neutral-900">
          {query ? `Search Results for "${query}"` : 'Explore Product Catalog'}
        </h1>
        <p className="text-sm text-neutral-600">
          {products.length} garments and accessories matching your search query.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center gap-3">
          <Search className="w-8 h-8 text-neutral-300" />
          <h3 className="text-lg font-semibold text-neutral-800">No items found</h3>
          <p className="text-xs text-neutral-500">Try searching for "cashmere", "hoodie", or "trench".</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
