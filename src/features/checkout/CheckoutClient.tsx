'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';
import { cartService, Address } from '@/lib/services/cart';
import { OrderSummary } from './OrderSummary';
import { Button } from '@/components/ui/Button';
import { GlassInput } from '@/components/ui/GlassInput';
import { ShieldCheck, Lock, ShoppingBag, ArrowRight, AlertTriangle } from 'lucide-react';

export const CheckoutClient: React.FC = () => {
  const router = useRouter();
  const { items, clearCart } = useCartStore();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [_shippingCost, setShippingCost] = useState(0);
  const [_discountCode, setDiscountCode] = useState('');

  // Shipping Address State
  const [shippingAddr, setShippingAddr] = useState<Address>({
    firstName: 'Julian',
    lastName: 'Vane',
    email: 'julian.vane@luxe.com',
    phone: '+1 (555) 234-5678',
    address1: '740 Park Avenue, Apt 14B',
    address2: '',
    city: 'New York',
    province: 'NY',
    zip: '10021',
    country: 'United States',
  });

  // Cart Validation check
  const unavailableItems = items.filter((i) => i.variant.availableForSale === false);

  const handleCheckoutRedirect = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (items.length === 0) {
      setErrorMsg('Your shopping bag is empty.');
      return;
    }

    if (unavailableItems.length > 0) {
      setErrorMsg('Please remove unavailable items before proceeding.');
      return;
    }

    setIsLoading(true);
    try {
      // 1. Create Shopify Cart
      const cart = await cartService.createCart(
        items.map((i) => ({ merchandiseId: i.variant.id, quantity: i.quantity }))
      );

      // 2. Perform Shopify Checkout Redirect
      const result = await cartService.checkout(cart.id, shippingAddr);
      clearCart();

      if (result.checkoutUrl && result.checkoutUrl.startsWith('http')) {
        window.location.href = result.checkoutUrl;
      } else {
        router.push(result.checkoutUrl || '/orders/LX-1001');
      }
    } catch (err: unknown) {
      console.error('Checkout redirect error:', err);
      setErrorMsg('Failed to initialize Shopify checkout. Please try again.');
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="py-20 text-center flex flex-col items-center gap-4">
        <Lock className="w-10 h-10 text-neutral-300" />
        <h2 className="text-2xl font-bold font-serif text-neutral-900">Your Checkout Bag is Empty</h2>
        <p className="text-xs text-neutral-500 max-w-sm">
          Please add items to your shopping bag before proceeding to checkout.
        </p>
        <Button variant="primary" size="md" onClick={() => router.push('/shop')}>
          Return to Shop
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleCheckoutRedirect} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Express Shipping Information & Hand-off */}
      <div className="lg:col-span-7 flex flex-col gap-8">
        {/* Step 1: Shipping Residence Details */}
        <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-neutral-900 pb-4 border-b border-neutral-100">
            <ShoppingBag className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold font-serif">1. Delivery Residence</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <GlassInput
              label="First Name"
              value={shippingAddr.firstName}
              onChange={(e) => setShippingAddr((p) => ({ ...p, firstName: e.target.value }))}
              required
            />
            <GlassInput
              label="Last Name"
              value={shippingAddr.lastName}
              onChange={(e) => setShippingAddr((p) => ({ ...p, lastName: e.target.value }))}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <GlassInput
              label="Email Address"
              type="email"
              value={shippingAddr.email}
              onChange={(e) => setShippingAddr((p) => ({ ...p, email: e.target.value }))}
              required
            />
            <GlassInput
              label="Phone Contact"
              value={shippingAddr.phone || ''}
              onChange={(e) => setShippingAddr((p) => ({ ...p, phone: e.target.value }))}
              placeholder="+1 (555) 234-5678"
            />
          </div>

          <GlassInput
            label="Street Address"
            value={shippingAddr.address1}
            onChange={(e) => setShippingAddr((p) => ({ ...p, address1: e.target.value }))}
            required
          />

          <div className="grid grid-cols-3 gap-4">
            <GlassInput
              label="City"
              value={shippingAddr.city}
              onChange={(e) => setShippingAddr((p) => ({ ...p, city: e.target.value }))}
              required
            />
            <GlassInput
              label="State / Province"
              value={shippingAddr.province}
              onChange={(e) => setShippingAddr((p) => ({ ...p, province: e.target.value }))}
              required
            />
            <GlassInput
              label="ZIP Code"
              value={shippingAddr.zip}
              onChange={(e) => setShippingAddr((p) => ({ ...p, zip: e.target.value }))}
              required
            />
          </div>
        </div>

        {/* Step 2: Instant Shopify Redirect */}
        <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-neutral-900 pb-4 border-b border-neutral-100">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold font-serif">2. Secure Shopify Checkout</h2>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed">
            Finalize payment and complete order authorization directly on Shopify’s PCI-DSS compliant checkout server.
          </p>

          {errorMsg && (
            <div className="p-3.5 bg-red-50 text-red-700 border border-red-200 rounded-2xl text-xs font-semibold flex items-center gap-2" role="alert">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100 flex items-center gap-3 text-xs text-blue-900">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
            <span>256-Bit SSL Encrypted & Direct PCI-DSS Compliant Shopify Order Processing.</span>
          </div>

          <Button
            variant="secondary"
            size="lg"
            type="submit"
            fullWidth
            isLoading={isLoading}
            className="gap-2 text-base font-bold shadow-xl py-4"
          >
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Proceed to Shopify Encrypted Checkout
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Right Column: Order Summary Sidebar */}
      <div className="lg:col-span-5">
        <OrderSummary
          items={items}
          onShippingChange={(cost) => setShippingCost(cost)}
          onDiscountChange={(_, code) => setDiscountCode(code)}
        />
      </div>
    </form>
  );
};
