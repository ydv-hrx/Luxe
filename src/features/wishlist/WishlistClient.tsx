'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useWishlistStore } from '@/store/useWishlistStore';
import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  Heart,
  Trash2,
  ArrowRight,
  ShoppingBag,
  Share2,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

export const WishlistClient: React.FC = () => {
  const { items, clearWishlist, toggleWishlist } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  const [shareCopied, setShareCopied] = useState(false);
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const calculatedTotalValue = items.reduce((acc, p) => acc + p.price.amount, 0);

  const handleMoveToBag = (product: typeof items[0]) => {
    const variant = product.variants[0] || {
      id: `var-${product.id}`,
      title: 'Default',
      sku: 'SKU-DEFAULT',
      price: product.price,
      selectedOptions: {},
      availableForSale: true,
    };
    addItem(product, variant, 1);
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    openCart();
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  const handleAddAllToBag = () => {
    items.forEach((product) => {
      const variant = product.variants[0] || {
        id: `var-${product.id}`,
        title: 'Default',
        sku: 'SKU-DEFAULT',
        price: product.price,
        selectedOptions: {},
        availableForSale: true,
      };
      addItem(product, variant, 1);
    });
    openCart();
  };

  const handleShareWishlist = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 3000);
    }
  };

  // Luxury Empty State
  if (items.length === 0) {
    return (
      <div className="py-20 sm:py-28 text-center flex flex-col items-center justify-center gap-6 max-w-xl mx-auto px-6 animate-in fade-in duration-300">
        <div className="p-6 bg-red-50 text-red-600 rounded-full border border-red-100 shadow-md">
          <Heart className="w-12 h-12 stroke-[1.5]" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Private Gallery</span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-neutral-900 tracking-tight leading-tight">
            Your Curated Collection Is Waiting
          </h2>
          <p className="text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
            Save your favorite Grade-A cashmere knits, architectural outerwear, and bespoke accessories while exploring our seasonal drop releases.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full sm:w-auto">
          <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 shadow-md py-4 font-bold">
            <Link href="/shop" className="flex items-center gap-2">
              Explore Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 py-4 font-bold">
            <Link href="/collections" className="flex items-center gap-2">
              Discover VIP Drops <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 max-w-[1440px] mx-auto px-6 sm:px-8 py-10 sm:py-12">
      {/* Header Bar Card */}
      <div className="p-8 sm:p-10 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col md:flex-row md:items-center justify-between gap-6 animate-in fade-in duration-300">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Private Gallery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-neutral-900 tracking-tight">
            Saved Wishlist
          </h1>
          <p className="text-sm text-neutral-500">
            Curated selection of luxury pieces held in your personal atelier vault.
          </p>
        </div>

        {/* Wishlist Statistics Cards */}
        <div className="grid grid-cols-2 gap-4 shrink-0">
          <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/60 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Saved Items</span>
            <span className="text-xl font-bold font-serif text-neutral-900 mt-0.5 block">{items.length} Pieces</span>
          </div>
          <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/60 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Est. Vault Value</span>
            <span className="text-xl font-bold font-serif text-neutral-900 mt-0.5 block">${calculatedTotalValue.toFixed(0)} USD</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Products (Left) + Sticky Summary Panel (Right) */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left Column: Wishlist Product Grid */}
        <div className="flex-1 min-w-0 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {items.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 hover:shadow-lumina-level2 transition-all duration-300 p-5 flex flex-col justify-between gap-5 hover:-translate-y-1"
              >
                {/* Product Thumbnail Container */}
                <div className="relative w-full h-72 bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200/60">
                  <Image
                    src={product.images[0]?.url || ''}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <Badge variant="primary" size="sm" className="bg-white/90 backdrop-blur-md text-black border-none shadow-sm font-semibold">
                      In Stock
                    </Badge>

                    <button
                      type="button"
                      onClick={() => toggleWishlist(product)}
                      className="pointer-events-auto p-2.5 bg-white/90 backdrop-blur-md rounded-full text-red-600 hover:bg-red-50 hover:scale-110 transition-all shadow-sm"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Meta Details */}
                <div className="space-y-1.5 px-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    {product.vendor} • {product.category}
                  </span>
                  <Link href={`/products/${product.handle}`} className="block">
                    <h3 className="text-lg font-bold font-serif text-neutral-900 group-hover:text-blue-900 transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">{product.description}</p>

                  <div className="flex items-baseline justify-between pt-2 border-t border-neutral-100">
                    <span className="text-lg font-bold font-serif text-neutral-900">
                      ${product.price.amount} {product.price.currencyCode}
                    </span>
                    <Link
                      href={`/products/${product.handle}`}
                      className="text-xs font-semibold text-neutral-500 hover:text-black flex items-center gap-1"
                    >
                      View Piece <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Move to Bag Action Button */}
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleMoveToBag(product)}
                  fullWidth
                  className="gap-2 shadow-md font-bold py-3 text-xs"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {addedItems[product.id] ? 'Added to Bag!' : 'Move to Shopping Bag'}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Summary Panel Card */}
        <div className="w-full lg:w-[320px] xl:w-[340px] shrink-0 sticky top-28 flex flex-col gap-6">
          <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-8 flex flex-col gap-6 text-sm">
            <h3 className="text-xl font-bold font-serif text-neutral-900 pb-4 border-b border-neutral-100">
              Vault Overview
            </h3>

            <div className="flex flex-col gap-3 pb-6 border-b border-neutral-100">
              <div className="flex justify-between text-neutral-600">
                <span>Items Saved</span>
                <span className="font-bold text-neutral-900">{items.length} Pieces</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Estimated Vault Value</span>
                <span className="font-bold text-neutral-900">${calculatedTotalValue.toFixed(0)} USD</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Complimentary Shipping</span>
                <span className="font-bold text-emerald-700">Eligible</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAddAllToBag}
                fullWidth
                className="gap-2 shadow-md py-4 text-sm font-bold"
              >
                <ShoppingBag className="w-4 h-4" /> Add All Pieces to Bag
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={handleShareWishlist}
                fullWidth
                className="gap-2 text-xs font-bold py-3"
              >
                {shareCopied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                {shareCopied ? 'Wishlist Link Copied!' : 'Share Curated Wishlist'}
              </Button>

              <button
                type="button"
                onClick={clearWishlist}
                className="w-full p-3 rounded-2xl text-xs font-bold text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear All Saved Pieces
              </button>
            </div>
          </div>

          {/* Guarantee Card */}
          <div className="p-6 bg-neutral-50/60 rounded-3xl border border-neutral-200/80 flex items-center gap-3 text-xs text-neutral-600">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
            <span>Wishlist pieces are automatically synchronized across all client sessions.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
