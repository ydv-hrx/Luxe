'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CartLineItem } from '@/types';
import { GlassInput } from '@/components/ui/GlassInput';
import { Button } from '@/components/ui/Button';
import { ShoppingBag, Tag, Check } from 'lucide-react';

export interface OrderSummaryProps {
  items: CartLineItem[];
  shippingCost: number;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ items, shippingCost }) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoSuccess, setPromoSuccess] = useState(false);

  const subtotal = items.reduce((acc, item) => acc + item.variant.price.amount * item.quantity, 0);
  const estimatedTax = subtotal * 0.08;
  const total = subtotal + estimatedTax + shippingCost - appliedDiscount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'COLLECTIVE' || promoCode.trim().toUpperCase() === 'LUXE10') {
      setAppliedDiscount(subtotal * 0.1); // 10% discount
      setPromoSuccess(true);
    }
  };

  return (
    <div className="p-6 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-6 sticky top-28">
      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
        <h3 className="text-base font-semibold font-serif text-neutral-900 flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-neutral-800" />
          Order Summary ({items.reduce((acc, i) => acc + i.quantity, 0)})
        </h3>
      </div>

      {/* Cart Items List */}
      <div className="flex flex-col gap-4 max-h-72 overflow-y-auto pr-1 divide-y divide-neutral-100">
        {items.map((item) => (
          <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-16 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0 border border-neutral-200">
                <Image
                  src={item.variant.image?.url || 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=200&q=80'}
                  alt={item.product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-xs font-semibold text-neutral-900 line-clamp-1">{item.product.title}</h4>
                <span className="text-[11px] text-neutral-500">{item.variant.title}</span>
                <span className="text-[11px] font-medium text-neutral-600 mt-0.5">Qty: {item.quantity}</span>
              </div>
            </div>
            <span className="text-xs font-bold text-neutral-900 whitespace-nowrap">
              ${(item.variant.price.amount * item.quantity).toFixed(0)} USD
            </span>
          </div>
        ))}
      </div>

      {/* Promo Code Form */}
      <form onSubmit={handleApplyPromo} className="flex gap-2 pt-2 border-t border-neutral-100">
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Promo code (e.g. COLLECTIVE)"
          className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2 text-xs uppercase text-neutral-900 focus:outline-none focus:border-black"
        />
        <Button variant="outline" size="sm" type="submit" className="text-xs whitespace-nowrap">
          Apply
        </Button>
      </form>

      {promoSuccess && (
        <div className="p-2.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs flex items-center gap-1.5">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>10% VIP Collective Discount Applied!</span>
        </div>
      )}

      {/* Totals Breakdown */}
      <div className="flex flex-col gap-2.5 text-xs text-neutral-600 pt-4 border-t border-neutral-100">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-semibold text-neutral-900">${subtotal.toFixed(0)} USD</span>
        </div>
        <div className="flex justify-between">
          <span>White-Glove Shipping</span>
          <span className="font-semibold text-neutral-900">
            {shippingCost === 0 ? 'Complimentary' : `$${shippingCost}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax (8%)</span>
          <span className="font-semibold text-neutral-900">${estimatedTax.toFixed(0)} USD</span>
        </div>

        {appliedDiscount > 0 && (
          <div className="flex justify-between text-emerald-700 font-semibold">
            <span>VIP Discount</span>
            <span>-${appliedDiscount.toFixed(0)} USD</span>
          </div>
        )}

        <div className="flex justify-between items-baseline pt-4 border-t border-neutral-200 text-sm font-bold text-neutral-900">
          <span>Total</span>
          <span className="text-2xl text-black">${total.toFixed(0)} USD</span>
        </div>
      </div>
    </div>
  );
};
