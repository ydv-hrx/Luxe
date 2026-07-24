'use client';

import React from 'react';
import Link from 'next/link';
import { useWishlistStore } from '@/store/useWishlistStore';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';
import { Heart, Trash2, ArrowRight } from 'lucide-react';

export const WishlistClient: React.FC = () => {
  const { items, clearWishlist } = useWishlistStore();

  if (items.length === 0) {
    return (
      <div className="py-24 text-center flex flex-col items-center justify-center gap-5 max-w-md mx-auto">
        <div className="p-5 bg-red-50 text-red-600 rounded-full border border-red-100 shadow-sm">
          <Heart className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold font-serif text-neutral-900">Your Wishlist is Empty</h2>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Curate your personal collection of Grade-A cashmere and architectural outerwear by clicking the heart icon on any piece.
          </p>
        </div>
        <Button variant="primary" size="lg" className="mt-2 gap-2">
          <Link href="/shop" className="flex items-center gap-2">
            Explore Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-neutral-200">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold font-serif text-neutral-900">
            Saved Atelier Collection
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            {items.length} {items.length === 1 ? 'piece' : 'pieces'} saved in your personal wishlist.
          </p>
        </div>

        <button
          type="button"
          onClick={clearWishlist}
          className="text-xs font-semibold text-neutral-400 hover:text-red-600 transition-colors flex items-center gap-1.5"
        >
          <Trash2 className="w-4 h-4" /> Clear All Saved
        </button>
      </div>

      {/* Wishlist Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
