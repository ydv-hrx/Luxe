import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, Truck, ShieldCheck, ArrowRight, Download, Package } from 'lucide-react';

interface OrderPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: OrderPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Order Confirmation #${id} | LUXE Atelier`,
    description: `Thank you for your order. Track order #${id} status and delivery updates.`,
  };
}

export default async function OrderConfirmationPage({ params }: OrderPageProps) {
  const { id } = await params;

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-16 flex flex-col items-center justify-center text-center gap-10">
      {/* Success Badge & Header */}
      <div className="flex flex-col items-center gap-4 max-w-2xl">
        <div className="p-4 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-200">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <Badge variant="success">Order Confirmed</Badge>

        <h1 className="text-3xl sm:text-5xl font-semibold font-serif text-neutral-900 leading-tight">
          Thank You For Your Order
        </h1>

        <p className="text-sm text-neutral-600 leading-relaxed">
          Order reference <span className="font-bold text-neutral-900">#{id}</span> has been confirmed. A confirmation receipt with digital RFID provenance certificate has been sent to your email.
        </p>
      </div>

      {/* Details Box */}
      <div className="max-w-2xl w-full p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-6 text-left">
        <div className="flex justify-between items-center pb-4 border-b border-neutral-100 text-xs">
          <span className="font-semibold text-neutral-500 uppercase tracking-wider">Status:</span>
          <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Preparing White-Glove Dispatch
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
          <div>
            <span className="font-semibold text-neutral-500 uppercase tracking-wider block mb-1">
              Estimated Delivery
            </span>
            <span className="text-base font-bold text-neutral-900">1 - 2 Business Days</span>
            <span className="text-neutral-500 block mt-0.5">Complimentary Express Courier</span>
          </div>

          <div>
            <span className="font-semibold text-neutral-500 uppercase tracking-wider block mb-1">
              Digital Authenticity
            </span>
            <span className="text-base font-bold text-neutral-900">RFID Passport Generated</span>
            <span className="text-neutral-500 block mt-0.5">Stored securely on the ledger</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-100">
          <Button variant="primary" size="md" fullWidth className="gap-2">
            <Link href={`/track/${id}`} className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Track Delivery Live
            </Link>
          </Button>
          <Button variant="outline" size="md" fullWidth className="gap-2">
            <Download className="w-4 h-4" />
            Download Receipt PDF
          </Button>
        </div>
      </div>

      <Link href="/shop" className="text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-black flex items-center gap-1">
        Continue Shopping <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
