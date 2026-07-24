'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/ui/Button';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { isOpen, closeCart, items, updateQuantity, removeItem, getSubtotal } = useCartStore();

  if (!isOpen) return null;

  const subtotal = getSubtotal();
  const freeShippingThreshold = 500;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = freeShippingThreshold - subtotal;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Cart">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Cart Header */}
          <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-neutral-900" />
              <h2 className="text-base font-semibold uppercase tracking-wider text-neutral-900">
                Your Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              type="button"
              onClick={closeCart}
              className="p-2 text-neutral-400 hover:text-black rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-6 py-3 bg-blue-50/60 border-b border-blue-100 flex flex-col gap-1.5">
            <p className="text-xs font-medium text-blue-900">
              {remainingForFreeShipping <= 0 ? (
                <span className="font-semibold text-emerald-700">🎉 You have unlocked complimentary white-glove shipping!</span>
              ) : (
                <>Add <span className="font-bold">${remainingForFreeShipping.toFixed(0)}</span> more for complimentary shipping</>
              )}
            </p>
            <div className="w-full bg-blue-200/60 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Line Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4 divide-y divide-neutral-100">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <div className="p-4 bg-neutral-100 rounded-full text-neutral-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900">Your bag is empty</h3>
                <p className="text-xs text-neutral-500 max-w-xs">
                  Discover our architectural cashmeres and leather accessories to begin your collection.
                </p>
                <Button variant="primary" size="md" onClick={closeCart} className="mt-2">
                  <Link href="/shop">Explore Collection</Link>
                </Button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-start">
                  <div className="relative w-20 h-24 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0 border border-neutral-200/60">
                    <Image
                      src={
                        item.variant.image?.url ||
                        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300&q=80'
                      }
                      alt={item.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between h-24">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-semibold text-neutral-900 line-clamp-1">
                          {item.product.title}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                          aria-label={`Remove ${item.product.title} from cart`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {item.variant.title}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-neutral-200 rounded-lg bg-neutral-50">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-neutral-600 hover:text-black"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-neutral-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-neutral-600 hover:text-black"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-sm font-bold text-neutral-900">
                        ${(item.variant.price.amount * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-neutral-100 bg-neutral-50/50 flex flex-col gap-4">
              <div className="flex justify-between items-baseline text-sm">
                <span className="text-neutral-600 font-medium">Subtotal</span>
                <span className="text-xl font-bold text-neutral-900">${subtotal.toFixed(0)} USD</span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Taxes and white-glove shipping calculated at checkout.
              </p>

              <Link href="/checkout" onClick={closeCart} className="w-full">
                <Button variant="primary" size="lg" fullWidth className="gap-2">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit Encrypted Secure Checkout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
