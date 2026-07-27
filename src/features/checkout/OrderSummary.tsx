'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CartLineItem } from '@/types';
import { Button } from '@/components/ui/Button';
import { ShoppingBag, Tag, X, Truck, AlertCircle } from 'lucide-react';

export interface OrderSummaryProps {
  items: CartLineItem[];
  onShippingChange?: (cost: number, methodTitle: string) => void;
  onDiscountChange?: (discountAmount: number, code: string) => void;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  onShippingChange,
  onDiscountChange,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);

  // Shipping Estimator State
  const [country, setCountry] = useState('United States');
  const [stateProv, setStateProv] = useState('NY');
  const [zip, setZip] = useState('10021');
  const [shippingMethod, setShippingMethod] = useState<'express' | 'priority' | 'concierge'>('express');

  const shippingRates = {
    express: { price: 0, title: 'Complimentary White-Glove (2-3 Days)' },
    priority: { price: 25, title: 'Priority Air Express (1-2 Days)' },
    concierge: { price: 45, title: 'Same-Day Concierge Courier' },
  };

  const currentShippingCost = shippingRates[shippingMethod].price;

  const subtotal = items.reduce((acc, item) => acc + item.variant.price.amount * item.quantity, 0);
  const estimatedTax = subtotal * 0.08;
  const total = Math.max(0, subtotal + estimatedTax + currentShippingCost - appliedDiscount);

  // Cart Validation checks
  const outOfStockItems = items.filter((item) => item.variant.availableForSale === false);
  const _priceChangedItems = items.filter(
    (item) => item.variant.compareAtPrice && item.variant.compareAtPrice.amount > item.variant.price.amount
  );

  const VALID_PROMOS: Record<string, number> = {
    WELCOME10: 0.1,
    LUXE20: 0.2,
    VIP15: 0.15,
    COLLECTIVE: 0.1,
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();

    if (!code) {
      setPromoError('Please enter a discount code.');
      return;
    }

    if (appliedCode === code) {
      setPromoError('This discount code is already applied.');
      return;
    }

    setIsApplyingPromo(true);

    setTimeout(() => {
      setIsApplyingPromo(false);
      if (VALID_PROMOS[code]) {
        const rate = VALID_PROMOS[code];
        const discountVal = subtotal * rate;
        setAppliedDiscount(discountVal);
        setAppliedCode(code);
        setPromoCode('');
        if (onDiscountChange) onDiscountChange(discountVal, code);
      } else {
        setPromoError('Invalid discount code. Try WELCOME10, LUXE20, or VIP15.');
      }
    }, 400);
  };

  const handleRemovePromo = () => {
    setAppliedDiscount(0);
    setAppliedCode(null);
    setPromoError('');
    if (onDiscountChange) onDiscountChange(0, '');
  };

  const handleShippingSelect = (method: 'express' | 'priority' | 'concierge') => {
    setShippingMethod(method);
    if (onShippingChange) onShippingChange(shippingRates[method].price, shippingRates[method].title);
  };

  return (
    <div className="p-6 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-6 sticky top-28">
      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
        <h3 className="text-base font-semibold font-serif text-neutral-900 flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-neutral-800" />
          Order Summary ({items.reduce((acc, i) => acc + i.quantity, 0)})
        </h3>
      </div>

      {/* Cart Validation Alerts */}
      {outOfStockItems.length > 0 && (
        <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-800 flex items-start gap-2" role="alert" aria-live="polite">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Inventory Notice:</span> {outOfStockItems.length} item(s) in your bag have limited stock.
          </div>
        </div>
      )}

      {/* Cart Items List */}
      <div className="flex flex-col gap-4 max-h-72 overflow-y-auto pr-1 divide-y divide-neutral-100">
        {items.map((item) => (
          <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-16 bg-neutral-100 rounded-xl overflow-hidden shrink-0 border border-neutral-200">
                <Image
                  src={item.variant.image?.url || 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=200&q=80'}
                  alt={item.product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-xs font-semibold text-neutral-900 line-clamp-1">{item.product.title}</h4>
                <span className="text-[11px] text-neutral-500">{item.variant.title}</span>
                <span className="text-[11px] font-medium text-neutral-600 mt-0.5">Qty: {item.quantity}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-neutral-900 whitespace-nowrap block">
                ${(item.variant.price.amount * item.quantity).toFixed(0)} USD
              </span>
              {item.variant.compareAtPrice && item.variant.compareAtPrice.amount > item.variant.price.amount && (
                <span className="text-[10px] text-neutral-400 line-through">
                  ${(item.variant.compareAtPrice.amount * item.quantity).toFixed(0)} USD
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Shipping Estimator Drawer */}
      <div className="p-4 bg-neutral-50/80 rounded-2xl border border-neutral-200/80 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-neutral-900">
          <Truck className="w-4 h-4 text-blue-600" />
          <span>Estimate Shipping & Delivery</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
            className="p-2 bg-white border border-neutral-200 rounded-lg text-[11px] text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="text"
            value={stateProv}
            onChange={(e) => setStateProv(e.target.value)}
            placeholder="State"
            className="p-2 bg-white border border-neutral-200 rounded-lg text-[11px] text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="ZIP"
            className="p-2 bg-white border border-neutral-200 rounded-lg text-[11px] text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Shipping Method Selector */}
        <div className="flex flex-col gap-1.5 pt-1">
          {(['express', 'priority', 'concierge'] as const).map((method) => {
            const rate = shippingRates[method];
            const isSelected = shippingMethod === method;
            return (
              <label
                key={method}
                onClick={() => handleShippingSelect(method)}
                className={`p-2.5 rounded-xl border text-[11px] flex items-center justify-between cursor-pointer transition-all ${
                  isSelected ? 'bg-black text-white border-black shadow-sm' : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <input type="radio" checked={isSelected} onChange={() => {}} className="accent-white" />
                  <span>{rate.title}</span>
                </div>
                <span className="font-bold">{rate.price === 0 ? 'Free' : `$${rate.price}`}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Promo Code Form */}
      <div className="flex flex-col gap-2 pt-2 border-t border-neutral-100">
        {appliedCode ? (
          <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs flex items-center justify-between font-medium">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-emerald-600" />
              <span>Discount Code <strong>{appliedCode}</strong> Applied (-${appliedDiscount.toFixed(0)} USD)</span>
            </div>
            <button
              type="button"
              onClick={handleRemovePromo}
              className="p-1 text-emerald-700 hover:text-emerald-900"
              aria-label="Remove discount code"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleApplyPromo} className="flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Discount code (e.g. WELCOME10)"
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2 text-xs uppercase text-neutral-900 focus:outline-none focus:border-black"
            />
            <Button variant="outline" size="sm" type="submit" isLoading={isApplyingPromo} className="text-xs whitespace-nowrap">
              Apply
            </Button>
          </form>
        )}

        {promoError && (
          <span className="text-[11px] text-red-600 font-medium px-1" role="alert">
            {promoError}
          </span>
        )}
      </div>

      {/* Totals Breakdown */}
      <div className="flex flex-col gap-2.5 text-xs text-neutral-600 pt-4 border-t border-neutral-100">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-semibold text-neutral-900">${subtotal.toFixed(0)} USD</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping ({shippingRates[shippingMethod].title.split(' ')[0]})</span>
          <span className="font-semibold text-neutral-900">
            {currentShippingCost === 0 ? 'Complimentary' : `$${currentShippingCost} USD`}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax (8%)</span>
          <span className="font-semibold text-neutral-900">${estimatedTax.toFixed(0)} USD</span>
        </div>

        {appliedDiscount > 0 && (
          <div className="flex justify-between text-emerald-700 font-semibold">
            <span>VIP Discount ({appliedCode})</span>
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
