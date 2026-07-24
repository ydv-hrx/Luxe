import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Badge } from '@/components/ui/Badge';
import { RefreshCw } from 'lucide-react';

const ReturnsPortalClient = dynamic(
  () => import('@/features/returns/ReturnsPortalClient').then((m) => m.ReturnsPortalClient)
);

import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Returns & Exchanges Portal | LUXE Concierge',
  description: 'Schedule 30-day complimentary concierge home pickup for returns and exchanges.',
};

export default function ReturnsPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 sm:py-12 flex flex-col gap-10">
      <PageHeader
        badge="Concierge Services"
        title="30-Day Concierge Returns Portal"
        subtitle="Schedule complimentary home pickup. Our private courier collects your items directly with zero printing required."
      />

      <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-3xl animate-pulse" />}>
        <ReturnsPortalClient />
      </Suspense>
    </div>
  );
}
