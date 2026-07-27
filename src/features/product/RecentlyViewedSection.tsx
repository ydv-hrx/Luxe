'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Product } from '@/types';
import { ProductCard } from '@/components/ui/ProductCard';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

export const RECENTLY_VIEWED_KEY = 'luxe_recently_viewed_products';

export function trackRecentlyViewedProduct(product: Product) {
  if (typeof window === 'undefined') return;

  try {
    const stored = localStorage.getItem(RECENTLY_VIEWED_KEY);
    let items: Product[] = stored ? JSON.parse(stored) : [];

    // Filter out existing occurrence of same product ID
    items = items.filter((p) => p.id !== product.id);

    // Prepend current product
    items.unshift(product);

    // Limit to max 8 items
    items = items.slice(0, 8);

    localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(items));
  } catch (err) {
    console.error('Error tracking recently viewed product:', err);
  }
}

export const RecentlyViewedTracker: React.FC<{ product: Product }> = ({ product }) => {
  useEffect(() => {
    trackRecentlyViewedProduct(product);
  }, [product]);

  return null;
};

export const RecentlyViewedSection: React.FC<{ currentProductId?: string }> = ({ currentProductId }) => {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(RECENTLY_VIEWED_KEY);
      if (stored) {
        let items: Product[] = JSON.parse(stored);
        if (currentProductId) {
          items = items.filter((p) => p.id !== currentProductId);
        }
        const timer = setTimeout(() => {
          setRecentProducts(items.slice(0, 8));
        }, 0);
        return () => clearTimeout(timer);
      }
    } catch (_err) {
      // Ignore storage error
    }
  }, [currentProductId]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = direction === 'left' ? -320 : 320;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  if (recentProducts.length === 0) return null;

  return (
    <section className="flex flex-col gap-6 pt-8 border-t border-neutral-200/80">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-neutral-900" />
          <h2 className="text-2xl font-semibold font-serif text-neutral-900 tracking-tight">
            Recently Viewed
          </h2>
        </div>

        {recentProducts.length > 3 && (
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="p-2 rounded-full border border-neutral-200 hover:bg-black hover:text-white transition-colors"
              aria-label="Scroll recently viewed left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="p-2 rounded-full border border-neutral-200 hover:bg-black hover:text-white transition-colors"
              aria-label="Scroll recently viewed right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
        tabIndex={0}
        aria-label="Recently viewed products carousel"
      >
        {recentProducts.map((prod) => (
          <div key={prod.id} className="w-[260px] sm:w-[280px] shrink-0 snap-start">
            <ProductCard product={prod} />
          </div>
        ))}
      </div>
    </section>
  );
};
