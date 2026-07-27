'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { OrderTimeline, OrderStep } from './OrderTimeline';
import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  
  Truck,
  RotateCcw,
  Download,
  
  ShieldCheck,
  MapPin,
  HelpCircle,
  
  CreditCard,
  
} from 'lucide-react';

export interface OrderItem {
  id: string;
  title: string;
  variantTitle: string;
  price: number;
  quantity: number;
  image: string;
}

export interface OrderDetailClientProps {
  orderId: string;
  orderNumber: string;
  date: string;
  paymentStatus: 'Paid' | 'Pending' | 'Refunded';
  fulfillmentStatus: 'Fulfilled' | 'In Transit' | 'Processing';
  timelineStep: OrderStep;
  items: OrderItem[];
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  billingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  subtotal: number;
  shippingCost: number;
  discounts: number;
  tax: number;
  total: number;
}

export const OrderDetailClient: React.FC<OrderDetailClientProps> = ({
  orderId,
  orderNumber,
  date,
  paymentStatus,
  fulfillmentStatus,
  timelineStep,
  items,
  shippingAddress,
  billingAddress,
  subtotal,
  shippingCost,
  discounts,
  tax,
  total,
}) => {
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const [reordered, setReordered] = useState(false);

  const handleReorderAll = () => {
    items.forEach((item) => {
      addItem(
        {
          id: item.id,
          handle: 'reordered-piece',
          title: item.title,
          description: 'Reordered piece from order ' + orderNumber,
          vendor: 'LUXE Atelier',
          category: 'Apparel',
          tags: [],
          price: { amount: item.price, currencyCode: 'USD' },
          images: [{ url: item.image, altText: item.title }],
          options: [],
          variants: [],
        },
        {
          id: `var-${item.id}`,
          title: item.variantTitle,
          sku: 'SKU-REORDER',
          price: { amount: item.price, currencyCode: 'USD' },
          selectedOptions: {},
          availableForSale: true,
        },
        item.quantity
      );
    });
    setReordered(true);
    openCart();
    setTimeout(() => setReordered(false), 3000);
  };

  return (
    <div className="flex flex-col gap-10 max-w-[1440px] mx-auto px-6 sm:px-8 py-10 sm:py-12">
      {/* Top Header Card */}
      <div className="p-8 sm:p-10 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col md:flex-row md:items-center justify-between gap-6 animate-in fade-in duration-300">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Order Reference</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
              {fulfillmentStatus}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              {paymentStatus}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-neutral-900 tracking-tight">
            Order #{orderNumber}
          </h1>

          <p className="text-sm text-neutral-500">
            Placed on <span className="font-semibold text-neutral-900">{date}</span> • White-Glove Dispatch
          </p>
        </div>

        {/* Total Price Callout Box */}
        <div className="flex flex-col md:items-end justify-center p-6 bg-neutral-50 rounded-2xl border border-neutral-200/60 shrink-0">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Grand Total</span>
          <span className="text-3xl font-bold font-serif text-neutral-900 mt-0.5">${total.toFixed(0)} USD</span>
          <span className="text-[11px] text-neutral-500 mt-0.5">{items.length} {items.length === 1 ? 'Garment' : 'Garments'} Included</span>
        </div>
      </div>

      {/* Main Two-Column Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column (70%): Timeline, Line Items, Notes */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
          {/* Order Timeline */}
          <OrderTimeline currentStep={timelineStep} />

          {/* Purchased Products Cards */}
          <div className="p-8 sm:p-10 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold font-serif text-neutral-900 tracking-tight">
                Purchased Garments ({items.length})
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Authenticated atelier luxury garments and accessories.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-lumina-level2 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-5">
                    <div className="relative w-20 h-26 bg-neutral-100 rounded-2xl overflow-hidden flex-shrink-0 border border-neutral-200/60 shadow-sm">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold font-serif text-neutral-900">{item.title}</h4>
                      <span className="text-xs text-neutral-500 block font-medium">{item.variantTitle}</span>
                      <div className="flex items-center gap-4 pt-1 text-xs text-neutral-600">
                        <span>Quantity: <strong className="text-neutral-900 font-bold">{item.quantity}</strong></span>
                        <span>•</span>
                        <span>Unit Price: <strong className="text-neutral-900 font-bold">${item.price} USD</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="self-end sm:self-center text-right">
                    <span className="text-xs text-neutral-400 block uppercase tracking-wider font-bold">Line Subtotal</span>
                    <span className="text-lg font-bold font-serif text-neutral-900 mt-0.5 block">
                      ${(item.price * item.quantity).toFixed(0)} USD
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Handling / Notes Card */}
          <div className="p-8 bg-neutral-50/60 rounded-3xl border border-neutral-200/80 flex items-start gap-4 text-xs">
            <Truck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-neutral-900 text-sm">White-Glove Courier Logistics</h4>
              <p className="text-neutral-600 mt-1 leading-relaxed">
                This order has been prepared with custom monogrammed tissue, magnetic presentation casing, and RFID provenance verification. Courier delivery is climate-controlled and insured up to $10,000 USD.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (30%): Sticky Order Summary & Addresses */}
        <div className="lg:col-span-5 xl:col-span-4 sticky top-28 flex flex-col gap-6">
          {/* Order Financial Summary Card */}
          <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-6 text-sm">
            <h3 className="text-xl font-bold font-serif text-neutral-900 pb-4 border-b border-neutral-100">
              Financial Breakdown
            </h3>

            <div className="flex flex-col gap-3 pb-6 border-b border-neutral-100">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span className="font-bold text-neutral-900">${subtotal.toFixed(0)} USD</span>
              </div>

              {discounts > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>VIP Member Discount</span>
                  <span>-${discounts.toFixed(0)} USD</span>
                </div>
              )}

              <div className="flex justify-between text-neutral-600">
                <span>White-Glove Courier Shipping</span>
                <span className="font-bold text-neutral-900">
                  {shippingCost === 0 ? 'Complimentary' : `$${shippingCost.toFixed(0)} USD`}
                </span>
              </div>

              <div className="flex justify-between text-neutral-600">
                <span>Estimated Taxes</span>
                <span className="font-bold text-neutral-900">${tax.toFixed(0)} USD</span>
              </div>
            </div>

            {/* Total Callout */}
            <div className="flex justify-between items-baseline pt-2">
              <span className="text-base font-bold text-neutral-900">Total Paid</span>
              <span className="text-3xl font-bold font-serif text-neutral-900">${total.toFixed(0)} USD</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleReorderAll}
                fullWidth
                className="gap-2 shadow-md py-4 text-sm font-bold"
              >
                <RotateCcw className="w-4 h-4" />
                {reordered ? 'Items Added to Bag!' : 'Reorder Entire Order'}
              </Button>

              <Button variant="secondary" size="lg" fullWidth className="gap-2 text-sm font-bold">
                <HelpCircle className="w-4 h-4" /> Need Concierge Help
              </Button>
            </div>
          </div>

          {/* Address Cards Grid */}
          <div className="flex flex-col gap-4">
            {/* Shipping Address */}
            <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm text-xs space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <span className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" /> Shipping Residence
                </span>
                <Badge variant="primary" size="sm">Primary</Badge>
              </div>
              <p className="font-semibold text-neutral-900 text-sm">{shippingAddress.name}</p>
              <p className="text-neutral-600">{shippingAddress.street}</p>
              <p className="text-neutral-600">{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zip}</p>
              <p className="text-neutral-700 font-semibold">{shippingAddress.country}</p>
            </div>

            {/* Billing Address */}
            <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm text-xs space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <span className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" /> Billing Residence
                </span>
              </div>
              <p className="font-semibold text-neutral-900 text-sm">{billingAddress.name}</p>
              <p className="text-neutral-600">{billingAddress.street}</p>
              <p className="text-neutral-600">{billingAddress.city}, {billingAddress.state} {billingAddress.zip}</p>
              <p className="text-neutral-700 font-semibold">{billingAddress.country}</p>
            </div>

            {/* Payment Details Card */}
            <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm text-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <span className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-blue-600" /> Payment & Invoice
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Confirmed
                </span>
              </div>
              <div className="space-y-1 text-neutral-600">
                <div className="flex justify-between">
                  <span>Method:</span>
                  <strong className="text-neutral-900">Shopify Encrypted 256-Bit</strong>
                </div>
                <div className="flex justify-between">
                  <span>Transaction ID:</span>
                  <strong className="text-neutral-900">tx_{orderId.replace(/[^a-zA-Z0-9]/g, '')}948</strong>
                </div>
                <div className="flex justify-between">
                  <span>Invoice Ref:</span>
                  <strong className="text-neutral-900">INV-2026-{orderNumber}</strong>
                </div>
              </div>

              <Button variant="outline" size="sm" fullWidth className="gap-2 text-xs font-bold mt-2">
                <Download className="w-3.5 h-3.5" /> Download Official Invoice PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
