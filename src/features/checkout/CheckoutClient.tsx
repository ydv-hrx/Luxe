'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';
import { cartService } from '@/lib/services/cart';
import { OrderSummary } from './OrderSummary';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Lock, ShoppingBag, ArrowRight } from 'lucide-react';

export const CheckoutClient: React.FC = () => {
  const router = useRouter();
  const { items, clearCart } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckoutRedirect = async () => {
    setIsLoading(true);
    try {
      const cart = await cartService.createCart(
        items.map((i) => ({ merchandiseId: i.variant.id, quantity: i.quantity }))
      );

      const result = await cartService.checkout(cart.id);
      clearCart();

      if (result.checkoutUrl && result.checkoutUrl.startsWith('http')) {
        window.location.href = result.checkoutUrl;
      } else {
        router.push(result.checkoutUrl || '/orders/LX-1001');
      }
    } catch (err) {
      console.error('Checkout redirect error:', err);
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Direct Shopify Checkout Hand-off */}
      <div className="lg:col-span-7 flex flex-col gap-8">
        <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-neutral-900 pb-4 border-b border-neutral-100">
            <ShoppingBag className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold font-serif">Instant Shopify Checkout</h2>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed">
            You are ready to finalize your order. You will be securely redirected to Shopify’s encrypted checkout to select your shipping address, delivery options, and payment method.
          </p>

          <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100 flex items-center gap-3 text-xs text-blue-900">
            <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span>256-Bit SSL Encrypted & Direct PCI-DSS Compliant Shopify Order Processing.</span>
          </div>

          <Button
            variant="secondary"
            size="lg"
            fullWidth
            isLoading={isLoading}
            onClick={handleCheckoutRedirect}
            className="gap-2 text-base font-bold shadow-xl py-4"
          >
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Continue to Secure Shopify Checkout
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Right Column: Order Summary Sidebar */}
      <div className="lg:col-span-5">
        <OrderSummary items={items} shippingCost={0} />
      </div>
    </div>
  );
};
