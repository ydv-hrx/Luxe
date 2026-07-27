'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Button } from '@/components/ui/Button';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  Heart,
  ArrowRight,
  Sparkles,
  Truck,
  RotateCcw,
  Lock,
} from 'lucide-react';
import { cartService } from '@/lib/services/cart';

export const CartDrawer: React.FC = () => {
  const { isOpen, closeCart, items, updateQuantity, removeItem, getSubtotal, clearCart } = useCartStore();
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [_movedToWishlist, setMovedToWishlist] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const subtotal = getSubtotal();
  const freeShippingThreshold = 500;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = freeShippingThreshold - subtotal;
  const totalItemCount = items.reduce((acc, i) => acc + i.quantity, 0);

  const handleCheckout = async () => {
    setIsRedirecting(true);
    try {
      const cart = await cartService.createCart(
        items.map((i) => ({ merchandiseId: i.variant.id, quantity: i.quantity }))
      );
      const result = await cartService.checkout(cart.id);
      clearCart();
      closeCart();

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
    const fullProduct = {
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
    setMovedToWishlist((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setMovedToWishlist((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  return (
    <div className="lg:hidden fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Cart Drawer">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-xl sm:max-w-2xl bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header Bar */}
          <div className="p-6 sm:p-8 border-b border-neutral-100 bg-white flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Atelier Shopping Bag</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-neutral-900 tracking-tight">
                Shopping Bag ({totalItemCount})
              </h2>
              <p className="text-xs text-neutral-500">
                Review your curated luxury collection before proceeding to checkout.
              </p>
            </div>

            <button
              type="button"
              onClick={closeCart}
              className="p-2.5 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-full transition-colors shrink-0"
              aria-label="Close shopping bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Progress Banner */}
          <div className="px-6 sm:px-8 py-3.5 bg-blue-50/70 border-b border-blue-100 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-semibold text-blue-900">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-blue-600" />
                {remainingForFreeShipping <= 0 ? (
                  <span className="font-bold text-emerald-700">🎉 Unlocked Complimentary White-Glove Shipping!</span>
                ) : (
                  <>Add <strong className="text-black font-bold">${remainingForFreeShipping.toFixed(0)} USD</strong> more for complimentary shipping</>
                )}
              </span>
              <span className="text-[11px] font-bold text-blue-700">{progressPercent.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-blue-200/60 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-neutral-900 h-full transition-all duration-700 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Scrollable Cart Line Items List */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 flex flex-col gap-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center gap-5 my-auto">
                <div className="p-6 bg-neutral-100 text-neutral-400 rounded-full border border-neutral-200/80 shadow-sm">
                  <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div className="space-y-2 max-w-sm">
                  <h3 className="text-2xl font-semibold font-serif text-neutral-900">Your Shopping Bag Is Empty</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Curate your wardrobe with Grade-A Mongolian cashmere, architectural coats, and bespoke accessories.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full max-w-xs">
                  <Button variant="primary" size="lg" onClick={closeCart} fullWidth className="gap-2 font-bold shadow-md">
                    <Link href="/shop" className="flex items-center gap-2 justify-center">
                      Continue Shopping <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="group p-5 bg-white rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-lumina-level2 transition-all duration-300 flex gap-5 items-start"
                  >
                    <div className="relative w-20 h-26 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0 border border-neutral-200/60">
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

                    <div className="flex-1 flex flex-col justify-between min-h-[104px]">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                              {item.product.vendor}
                            </span>
                            <h4 className="text-base font-bold font-serif text-neutral-900 line-clamp-1">
                              {item.product.title}
                            </h4>
                          </div>

                          <span className="text-base font-bold font-serif text-neutral-900 shrink-0">
                            ${(item.variant.price.amount * item.quantity).toFixed(0)} USD
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {item.variant.title}
                        </p>
                      </div>

                      {/* Controls Footer */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-100 mt-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-neutral-200 rounded-xl bg-neutral-50/80">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-neutral-600 hover:text-black transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-bold text-neutral-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-neutral-600 hover:text-black transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 text-xs">
                          <button
                            type="button"
                            onClick={() => handleMoveToWishlist(item)}
                            className="text-neutral-500 hover:text-red-600 transition-colors flex items-center gap-1 font-medium"
                          >
                            <Heart className="w-3.5 h-3.5" />
                            <span>Save to Wishlist</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                            aria-label={`Remove ${item.product.title} from cart`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sticky Financial Summary & Checkout Footer */}
          {items.length > 0 && (
            <div className="p-6 sm:p-8 border-t border-neutral-200/80 bg-neutral-50/80 backdrop-blur-md flex flex-col gap-5">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-neutral-900">${subtotal.toFixed(0)} USD</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-600">
                  <span>White-Glove Delivery</span>
                  <span className="font-bold text-emerald-700">
                    {remainingForFreeShipping <= 0 ? 'Complimentary' : '$25 USD'}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-neutral-200/60">
                  <span className="text-base font-bold text-neutral-900">Estimated Total</span>
                  <span className="text-3xl font-bold font-serif text-neutral-900">${subtotal.toFixed(0)} USD</span>
                </div>
              </div>

              {/* Primary Action Button */}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isRedirecting}
                onClick={handleCheckout}
                className="gap-2 text-sm font-bold shadow-xl py-4"
              >
                <Lock className="w-4 h-4 text-emerald-400" />
                Continue to Secure Shopify Checkout
              </Button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-neutral-500 pt-2 border-t border-neutral-200/60">
                <div className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>256-Bit Encrypted</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-blue-600" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Insured Transit</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
