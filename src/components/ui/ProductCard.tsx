'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { PriceDisplay } from './PriceDisplay';
import { Badge } from './Badge';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Plus, Heart } from 'lucide-react';

export interface ProductCardProps {
  product: Product;
  aspectRatio?: 'portrait' | 'square';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  aspectRatio = 'portrait',
}) => {
  const addItem = useCartStore((state) => state.addItem);
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const wishlisted = isInWishlist(product.id);
  const primaryImage = product.images[0] || {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoB0OYS4ji1Lm2uXIqypv-EFOYiOLSjP4TpYySYzX-ZrbGG4L9-OA-B_Meo2FJPZELvCh4lKjGBIhOGpzEoNEl6IfwvQFZuYRf6sDQsQoZew2CZeEC_BnEU8xjxjEA3zQ_sa6JJ1H_0moB7026rAnvNGe3Epw2FSCvmTdGRGpfq434SKklX9kf8NuU6kZJNQrch2twT71Z_36azMSovz3JDc-DLzQKmYiw1RJbyXw9KgnNz2mn5x4dyuP5xOYropgVdNR0VA14yK0M',
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
    <article className="group relative flex flex-col select-none">
      {/* Image Container with Stitch Minimalist Aspect Ratio */}
      <Link
        href={`/products/${product.handle}`}
        className="relative w-full overflow-hidden bg-neutral-100 block rounded-2xl mb-4 group-hover:opacity-90 transition-opacity duration-500"
        aria-label={`View details for ${product.title}`}
      >
        <div
          className={`relative w-full ${
            aspectRatio === 'portrait' ? 'aspect-[2/3]' : 'aspect-square'
          }`}
        >
          <Image
            src={primaryImage.url}
            alt={primaryImage.altText || product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && <Badge variant="primary">New</Badge>}
          {product.isBestSeller && <Badge variant="default">Best Seller</Badge>}
          {product.isLimitedEdition && <Badge variant="warning">Limited</Badge>}
        </div>

        {/* Wishlist Action Button */}
        <button
          type="button"
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md shadow-sm transition-colors z-10 ${
            wishlisted
              ? 'bg-red-50 text-red-600 border border-red-200'
              : 'bg-white/80 text-neutral-700 hover:bg-black hover:text-white'
          }`}
          aria-label={wishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-red-600 text-red-600' : ''}`} />
        </button>

        {/* Stitch Quick Add Floating (+) Button */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-4 right-4 bg-white/90 hover:bg-black hover:text-white text-neutral-900 backdrop-blur-md p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md z-10"
          aria-label={`Quick add ${product.title} to bag`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </Link>

      {/* Stitch Editorial Typography Details */}
      <div className="flex flex-col gap-1">
        <h5 className="font-sans text-base font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors line-clamp-1">
          <Link href={`/products/${product.handle}`}>{product.title}</Link>
        </h5>
        <div className="flex items-center justify-between">
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
