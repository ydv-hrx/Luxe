import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { giftService } from '@/lib/services/gifting';
import { notFound } from 'next/navigation';

const DigitalUnboxing = dynamic(
  () => import('@/features/gifting/DigitalUnboxing').then((mod) => mod.DigitalUnboxing)
);

interface RevealPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: RevealPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Digital Gift Reveal #${id} | LUXE Studio`,
    description: 'Touch to reveal your personalized LUXE gift box presentation.',
  };
}

export default async function GiftRevealPage({ params }: RevealPageProps) {
  const { id } = await params;
  const gift = await giftService.getGiftReveal(id);

  if (!gift) {
    notFound();
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-12 flex flex-col justify-center items-center min-h-[70vh]">
      <Suspense fallback={<div className="h-96 w-full max-w-xl bg-neutral-900 rounded-3xl animate-pulse" />}>
        <DigitalUnboxing gift={gift} />
      </Suspense>
    </div>
  );
}
