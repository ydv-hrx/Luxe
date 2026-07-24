import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { conciergeService } from '@/lib/services/concierge';
import { Badge } from '@/components/ui/Badge';
import { Headset, MessageSquare, ShieldCheck } from 'lucide-react';

const ConciergeWidget = dynamic(
  () => import('@/features/concierge/ConciergeWidget').then((mod) => mod.ConciergeWidget)
);

export const metadata: Metadata = {
  title: 'LUXE Concierge | Private Client Support & Advisory',
  description: 'Connect with senior stylists and private concierges for bespoke fitting and assistance.',
};

export default async function ConciergePage() {
  const tickets = await conciergeService.getTickets();

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-10">
      {/* Header Banner */}
      <div className="flex flex-col gap-3 pb-8 border-b border-neutral-200">
        <Badge variant="outline" className="w-fit">
          Client Advisory
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-semibold font-serif text-neutral-900">
          LUXE Private Concierge
        </h1>
        <p className="text-sm text-neutral-600 max-w-xl">
          Direct access to our Milan & Paris master tailors, private styling advisors, and white-glove logistics.
        </p>
      </div>

      {/* Concierge Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <Headset className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-serif text-neutral-900">24/7 Live Concierge</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Instant guidance on cashmere weight, suit shoulders, and private event wardrobe requirements.
          </p>
        </div>

        <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-serif text-neutral-900">Active Inquiry Tickets ({tickets.length})</h3>
          <div className="flex flex-col gap-2 pt-2 border-t border-neutral-100 text-xs">
            {tickets.map((t) => (
              <div key={t.id} className="flex justify-between items-center py-1">
                <span className="font-semibold text-neutral-900">{t.subject}</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold">
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-serif text-neutral-900">Lifetime Repair Guarantee</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Send your cashmere or leather piece back to our atelier at any time for re-spinning or conditioning.
          </p>
        </div>
      </div>

      {/* Dynamic Lazy-Loaded Live Concierge Widget */}
      <Suspense fallback={<div className="h-12 w-12 bg-neutral-200 rounded-full animate-pulse fixed bottom-6 right-6" />}>
        <ConciergeWidget />
      </Suspense>
    </div>
  );
}
