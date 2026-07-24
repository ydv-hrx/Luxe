import React from 'react';
import { Metadata } from 'next';
import { CheckoutClient } from '@/features/checkout/CheckoutClient';
import { Badge } from '@/components/ui/Badge';
import { Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Secure Checkout | LUXE Atelier',
  description: 'Complete your purchase with white-glove shipping and 256-bit encrypted security.',
};

export default function CheckoutPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-10">
      {/* Header Banner */}
      <div className="flex flex-col gap-3 pb-8 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="w-fit">
            Client Checkout
          </Badge>
          <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
            <Lock className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold font-serif text-neutral-900">
          Complete Your Selection
        </h1>
      </div>

      {/* Interactive Multi-Step Checkout Client */}
      <CheckoutClient />
    </div>
  );
}
