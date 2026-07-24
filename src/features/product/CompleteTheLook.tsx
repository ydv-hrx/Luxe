import React from 'react';
import { Product } from '@/types';
import { ProductCard } from '@/components/ui/ProductCard';
import { Sparkles } from 'lucide-react';

export interface CompleteTheLookProps {
  relatedProducts: Product[];
}

export const CompleteTheLook: React.FC<CompleteTheLookProps> = ({ relatedProducts }) => {
  if (!relatedProducts || relatedProducts.length === 0) return null;

  return (
    <section className="flex flex-col gap-6 pt-12 border-t border-neutral-200">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" />
          AI Stylist Curation
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold font-serif text-neutral-900">
          Complete The Look
        </h2>
        <p className="text-xs text-neutral-500">
          Pieces styled together by our Milan atelier for effortless harmony.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </section>
  );
};
