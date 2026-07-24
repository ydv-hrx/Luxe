'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { PriceDisplay } from './PriceDisplay';
import { Badge } from './Badge';
import { useCartStore } from '@/store/useCartStore';
import { ShoppingBag, Heart } from 'lucide-react';

export interface ProductCardProps {
  product: Product;
  aspectRatio?: 'portrait' | 'square';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  aspectRatio = 'portrait',
}) => {
  const addItem = useCartStore((state) => state.addItem);
  const primaryImage = product.images[0] || {
    url: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    altText: product.title,
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.variants && product.variants.length > 0) {
      addItem(product, product.variants[0]);
    }
  };

  return (
    <article className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-200/60 shadow-lumina-level1 hover:shadow-lumina-level2 transition-all duration-300">
      {/* Image Wrapper */}
      <Link
        href={`/products/${product.handle}`}
        className="relative w-full overflow-hidden bg-neutral-100 block"
        tabIndex={0}
        aria-label={`View details for ${product.title}`}
      >
        <div
          className={`relative w-full ${
            aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
          }`}
        >
          <Image
            src={primaryImage.url}
            alt={primaryImage.altText || product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && <Badge variant="primary">New</Badge>}
          {product.isBestSeller && <Badge variant="default">Best Seller</Badge>}
          {product.isLimitedEdition && <Badge variant="warning">Limited</Badge>}
        </div>

        {/* Quick Actions Hover Overlay */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            type="button"
            className="p-2.5 rounded-full bg-white/90 text-neutral-800 backdrop-blur-md shadow-md hover:bg-black hover:text-white transition-colors"
            aria-label="Save to Wishlist"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Add Bottom Bar */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full py-2.5 px-4 bg-black/90 text-white backdrop-blur-md text-xs font-semibold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg"
            aria-label={`Quick add ${product.title} to bag`}
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Details Section */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-3 bg-white">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
            {product.vendor}
          </span>
          <h3 className="text-base font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            <Link href={`/products/${product.handle}`}>{product.title}</Link>
          </h3>
          {product.subtitle && (
            <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
              {product.subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
          <PriceDisplay price={product.price} compareAtPrice={product.compareAtPrice} size="sm" />
          {product.rating && (
            <span className="text-xs font-medium text-neutral-500 flex items-center gap-1">
              <span className="text-amber-500">★</span> {product.rating}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
