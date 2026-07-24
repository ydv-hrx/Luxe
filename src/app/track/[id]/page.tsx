import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Truck, CheckCircle2, Clock, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

interface TrackPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: TrackPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Track Order #${id} | LUXE Logistics`,
    description: `Live courier tracking for LUXE order #${id}.`,
  };
}

export default async function OrderTrackingPage({ params }: TrackPageProps) {
  const { id } = await params;

  const trackingSteps = [
    { title: 'Order Confirmed', time: 'Today, 2:15 PM', done: true },
    { title: 'Bespoke Packaging & RFID Tagged', time: 'Today, 4:30 PM', done: true },
    { title: 'In Transit — White-Glove Air Flight', time: 'In Progress', active: true },
    { title: 'Out For Residence Delivery', time: 'Expected Tomorrow', done: false },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-10">
      <div className="flex flex-col gap-3 pb-8 border-b border-neutral-200">
        <Badge variant="outline" className="w-fit">
          Logistics Tracking
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-semibold font-serif text-neutral-900">
          Tracking Order #{id}
        </h1>
        <p className="text-sm text-neutral-600">
          Live status updates from your assigned white-glove courier team.
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-8">
        {/* Status Map Banner */}
        <div className="p-6 bg-neutral-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600 rounded-xl">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-400">Current Status</span>
              <h3 className="text-lg font-bold">In Transit — White-Glove Air Courier</h3>
            </div>
          </div>
          <span className="text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
            ETA: Tomorrow by 4:00 PM
          </span>
        </div>

        {/* Tracking Timeline */}
        <div className="flex flex-col gap-6 pl-4 border-l-2 border-neutral-200">
          {trackingSteps.map((step, idx) => (
            <div key={idx} className="relative flex items-start gap-4">
              <div
                className={`absolute -left-[25px] top-0 w-4 h-4 rounded-full border-2 ${
                  step.done
                    ? 'bg-emerald-600 border-emerald-600'
                    : step.active
                    ? 'bg-blue-600 border-blue-600 animate-pulse'
                    : 'bg-white border-neutral-300'
                }`}
              />
              <div className="flex flex-col gap-0.5">
                <h4 className={`text-sm font-bold ${step.done || step.active ? 'text-neutral-900' : 'text-neutral-400'}`}>
                  {step.title}
                </h4>
                <span className="text-xs text-neutral-500">{step.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
