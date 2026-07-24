import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Badge } from '@/components/ui/Badge';
import { RefreshCw } from 'lucide-react';

const ReturnsPortalClient = dynamic(
  () => import('@/features/returns/ReturnsPortalClient').then((m) => m.ReturnsPortalClient)
);

export const metadata: Metadata = {
  title: 'Returns & Exchanges Portal | LUXE Concierge',
  description: 'Schedule 30-day complimentary concierge home pickup for returns and exchanges.',
};

export default function ReturnsPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-10">
      {/* Header Banner */}
      <div className="flex flex-col gap-3 pb-8 border-b border-neutral-200">
        <Badge variant="outline" className="w-fit">
          Concierge Services
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-semibold font-serif text-neutral-900">
          30-Day Concierge Returns Portal
        </h1>
        <p className="text-sm text-neutral-600 max-w-xl">
          Schedule complimentary home pickup. Our private courier collects your items directly with zero printing required.
        </p>
      </div>

      <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-3xl animate-pulse" />}>
        <ReturnsPortalClient />
      </Suspense>
    </div>
  );
}
