'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { commerceService } from '@/lib/services/commerce';
import { cartService } from '@/lib/services/cart';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Product } from '@/types';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Heart,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Lock,
  ExternalLink,
} from 'lucide-react';

export const CartPageClient: React.FC = () => {
  const { items, updateQuantity, removeItem, getSubtotal, clearCart } = useCartStore();
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);

  const [isRedirecting, setIsRedirecting] = useState(false);
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [addedToWishlist, setAddedToWishlist] = useState<Record<string, boolean>>({});

  const subtotal = getSubtotal();
  const freeShippingThreshold = 500;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = freeShippingThreshold - subtotal;
  const totalItemCount = items.reduce((acc, i) => acc + i.quantity, 0);

  useEffect(() => {
    commerceService.getProducts().then((all) => {
      setRecommendations(all.slice(0, 3));
    });
  }, []);

  const handleCheckout = async () => {
    setIsRedirecting(true);
    try {
      const cart = await cartService.createCart(
        items.map((i) => ({ merchandiseId: i.variant.id, quantity: i.quantity }))
      );
      const result = await cartService.checkout(cart.id);
      clearCart();

      if (result.checkoutUrl && result.checkoutUrl.startsWith('http')) {
        window.location.href = result.checkoutUrl;
      } else {
        window.location.href = result.checkoutUrl || '/checkout';
      }
    } catch (err) {
      console.error('Cart checkout redirect error:', err);
      setIsRedirecting(false);
    }
  };

  const handleMoveToWishlist = (item: typeof items[0]) => {
    const fullProduct: Product = {
      id: item.product.id,
      handle: item.product.handle,
      title: item.product.title,
      vendor: item.product.vendor,
      description: item.product.title,
      category: 'Apparel',
      tags: [],
      price: item.variant.price,
      images: item.variant.image ? [item.variant.image] : [],
      options: [],
      variants: [item.variant],
    };
    toggleWishlist(fullProduct);
    removeItem(item.id);
    setAddedToWishlist((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedToWishlist((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  // Luxury Empty State
  if (items.length === 0) {
    return (
      <div className="py-20 sm:py-28 text-center flex flex-col items-center justify-center gap-6 max-w-xl mx-auto px-6 animate-in fade-in duration-300">
        <div className="p-6 bg-neutral-100 text-neutral-400 rounded-full border border-neutral-200/80 shadow-md">
          <ShoppingBag className="w-12 h-12 stroke-[1.5]" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Atelier Shopping Bag</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-neutral-900 tracking-tight leading-tight">
            Your Shopping Bag Is Empty
          </h1>
          <p className="text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
            Curate your wardrobe with Grade-A Mongolian cashmere knits, architectural coats, and bespoke accessories.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full sm:w-auto">
          <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 shadow-md py-4 font-bold">
            <Link href="/shop" className="flex items-center gap-2">
              Continue Shopping <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 py-4 font-bold">
            <Link href="/collections" className="flex items-center gap-2">
              Explore New Arrivals <ExternalLink className="w-4 h-4" />
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
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Curated Collection</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-neutral-900 tracking-tight">
            Shopping Bag
          </h1>
          <p className="text-sm text-neutral-500">
            Review your curated luxury garments and accessories before checkout.
          </p>
        </div>

        {/* Header Metric Cards */}
        <div className="grid grid-cols-2 gap-4 shrink-0">
          <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/60 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Total Items</span>
            <span className="text-xl font-bold font-serif text-neutral-900 mt-0.5 block">{totalItemCount} Pieces</span>
          </div>
          <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/60 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Estimated Total</span>
            <span className="text-xl font-bold font-serif text-neutral-900 mt-0.5 block">${subtotal.toFixed(0)} USD</span>
          </div>
        </div>
      </div>

      {/* Complimentary Courier Progress Banner */}
      <div className="p-6 bg-blue-50/70 rounded-3xl border border-blue-100 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs font-semibold text-blue-900">
          <span className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-blue-600" />
            {remainingForFreeShipping <= 0 ? (
              <span className="font-bold text-emerald-700 text-sm">🎉 You Have Unlocked Complimentary White-Glove Courier Delivery!</span>
            ) : (
              <span>Add <strong className="text-black font-bold">${remainingForFreeShipping.toFixed(0)} USD</strong> more for complimentary courier delivery</span>
            )}
          </span>
          <span className="text-xs font-bold text-blue-700">{progressPercent.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-blue-200/60 h-2 rounded-full overflow-hidden">
          <div
            className="bg-neutral-900 h-full transition-all duration-700 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Grid Layout: Left 70% (Cart Items + Carousel) & Right 30% (Sticky Order Summary) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column (70%): Line Items List & Recommendations */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-10">
          {/* Cart Line Items List */}
          <div className="flex flex-col gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="group p-6 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 hover:shadow-lumina-level2 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-6">
                  <div className="relative w-28 h-36 bg-neutral-100 rounded-2xl overflow-hidden flex-shrink-0 border border-neutral-200/60 shadow-sm">
                    <Image
                      src={
                        item.variant.image?.url ||
                        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300&q=80'
                      }
                      alt={item.product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                        {item.product.vendor}
                      </span>
                      <Badge variant="primary" size="sm">In Stock</Badge>
                    </div>

                    <Link href={`/products/${item.product.handle}`} className="block">
                      <h3 className="text-xl font-bold font-serif text-neutral-900 group-hover:text-blue-900 transition-colors">
                        {item.product.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-neutral-500 font-medium">
                      Variant: {item.variant.title}
                    </p>

                    <p className="text-xs text-neutral-400">
                      Estimated Dispatch: <strong className="text-neutral-700">1 - 2 Business Days</strong>
                    </p>

                    <div className="pt-2 flex items-baseline gap-3">
                      <span className="text-base font-bold font-serif text-neutral-900">
                        ${(item.variant.price.amount * item.quantity).toFixed(0)} USD
                      </span>
                      <span className="text-xs text-neutral-400">
                        (${item.variant.price.amount} each)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quantity Controls & Item Actions */}
                <div className="flex flex-col sm:items-end justify-between gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-neutral-100">
                  <div className="flex items-center border border-neutral-200 rounded-2xl bg-neutral-50/80 p-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 text-neutral-600 hover:text-black transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-sm font-bold text-neutral-900">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-neutral-600 hover:text-black transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => handleMoveToWishlist(item)}
                      className="text-neutral-500 hover:text-red-600 transition-colors flex items-center gap-1.5"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Save to Wishlist</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                      aria-label={`Remove ${item.product.title} from cart`}
                    >
                      <Trash2 className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* You May Also Like / Recommendations Carousel */}
          {recommendations.length > 0 && (
            <div className="flex flex-col gap-6 pt-6 border-t border-neutral-200/80">
              <div>
                <h2 className="text-2xl font-bold font-serif text-neutral-900">You May Also Like</h2>
                <p className="text-xs text-neutral-500 mt-0.5">Complementary luxury garments curated for your wardrobe.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {recommendations.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column (30%): Sticky Order Summary & Trust Badges */}
        <div className="lg:col-span-5 xl:col-span-4 sticky top-28 flex flex-col gap-6">
          <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-6 text-sm">
            <h3 className="text-xl font-bold font-serif text-neutral-900 pb-4 border-b border-neutral-100">
              Order Financial Summary
            </h3>

            <div className="flex flex-col gap-3 pb-6 border-b border-neutral-100">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span className="font-bold text-neutral-900">${subtotal.toFixed(0)} USD</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>White-Glove Courier Delivery</span>
                <span className="font-bold text-emerald-700">
                  {remainingForFreeShipping <= 0 ? 'Complimentary' : '$25 USD'}
                </span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Estimated Taxes</span>
                <span className="font-semibold text-neutral-900">Calculated at Checkout</span>
              </div>
            </div>

            {/* Total Callout */}
            <div className="flex justify-between items-baseline pt-2">
              <span className="text-base font-bold text-neutral-900">Estimated Total</span>
              <span className="text-3xl font-bold font-serif text-neutral-900">${subtotal.toFixed(0)} USD</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-4">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isRedirecting}
                onClick={handleCheckout}
                className="gap-2 shadow-xl py-4 text-sm font-bold"
              >
                <Lock className="w-4 h-4 text-emerald-400" /> Continue to Secure Shopify Checkout
              </Button>

              <Button variant="outline" size="lg" fullWidth className="gap-2 font-bold py-3.5 text-xs">
                <Link href="/shop" className="flex items-center gap-2 justify-center">
                  Continue Shopping <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Trust Badges Card */}
          <div className="p-6 bg-neutral-50/60 rounded-3xl border border-neutral-200/80 flex flex-col gap-4 text-xs">
            <h4 className="font-bold text-neutral-900 text-sm border-b border-neutral-200/60 pb-3">
              Atelier Guarantee & Encryption
            </h4>
            <div className="grid grid-cols-2 gap-4 text-neutral-700 font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>256-Bit Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-blue-600 shrink-0" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Insured Transit</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                <span>RFID Authenticated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
