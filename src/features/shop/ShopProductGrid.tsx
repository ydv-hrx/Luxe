'use client';

import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';

interface ShopProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
}

export const ShopProductGrid: React.FC<ShopProductGridProps> = ({ products, viewMode }) => {
  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist);

  const handleQuickAdd = (p: Product) => {
    const variant = p.variants?.[0] || {
      id: p.id + '-v1',
      title: 'Default',
      sku: p.id + '-sku',
      price: p.price,
      selectedOptions: { Style: 'Default' },
      availableForSale: true,
    };
    addItem(p, variant, 1);
  };

  if (!products || products.length === 0) {
    return (
      <div className="flex-1 p-8 sm:p-12 text-center text-neutral-500 font-sans">
        <p className="text-base sm:text-lg">No products found matching your current selection.</p>
        <p className="text-xs uppercase tracking-widest mt-2 text-neutral-400">
          Try clearing your filters or changing your category.
        </p>
      </div>
    );
  }

  return (
    <section id="catalog" className="flex-1 p-3 sm:p-6 w-full">
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 gap-y-8 sm:gap-y-12'
            : 'flex flex-col gap-4 sm:gap-6'
        }
      >
        {products.map((p) => {
          const isWishlisted = isInWishlist(p.id);
          return (
            <div key={p.id} className="product-card group cursor-pointer font-sans flex flex-col justify-between h-full">
              <div>
                <div className="relative bg-[#F9F8F6] aspect-[4/5] mb-3 sm:mb-4 overflow-hidden">
                  <Link href={`/products/${p.handle}`}>
                    <img
                      src={p.images?.[0]?.url || 'https://via.placeholder.com/600x750'}
                      alt={p.images?.[0]?.altText || p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(p)}
                    className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-white/90 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm z-10"
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'text-red-600 fill-red-600' : 'text-neutral-800'}`}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickAdd(p)}
                    className="quick-add absolute bottom-0 left-0 w-full bg-black text-white text-[9px] sm:text-[10px] font-sans font-semibold uppercase tracking-widest py-2.5 sm:py-4 hover:bg-neutral-800 transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#717171] font-medium">{p.vendor || 'Luxora'}</p>
                  <Link href={`/products/${p.handle}`}>
                    <h3 className="text-xs sm:text-sm font-medium text-black group-hover:underline underline-offset-4 decoration-neutral-300 line-clamp-1">
                      {p.title}
                    </h3>
                  </Link>
                </div>
              </div>

              <div className="flex gap-2 items-baseline mt-1">
                <p className="text-xs sm:text-sm font-medium text-black">${p.price.amount.toLocaleString()}</p>
                {p.compareAtPrice && (
                  <p className="text-[9px] sm:text-[10px] text-[#717171] line-through">
                    ${p.compareAtPrice.amount.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
