import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, ArrowRight, ShieldCheck, Gem } from 'lucide-react';

export const metadata: Metadata = {
  title: 'LUXE Collective Manifesto | Sourcing & Provenance',
  description: 'Learn about LUXE atmospheric design philosophy, Grade-A Mongolian cashmere, and digital RFID provenance verification.',
};

export default function WelcomePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-16 flex flex-col gap-16">
      {/* Hero Header */}
      <div className="relative rounded-3xl bg-neutral-900 text-white p-10 sm:p-20 overflow-hidden border border-neutral-800 flex flex-col items-center text-center gap-6">
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80"
          alt="LUXE Collective Heritage"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-md">
            <Gem className="w-3.5 h-3.5 mr-1 text-blue-400" />
            The LUXE Collective Manifesto
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-semibold font-serif leading-tight">
            Quiet Luxury. <br />
            Architectural Precision.
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            We reject mass production and seasonal excess. LUXE exists to produce timeless, limited-edition garments that age with grace and carry verifiable digital authenticity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button variant="secondary" size="lg">
              <Link href="/shop" className="flex items-center gap-2">
                Explore The Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
              <Link href="/gifting">Gifting Studio</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-2xl border border-neutral-200/60 shadow-lumina-level1 flex flex-col gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold font-serif text-neutral-900">Grade-A Cashmere</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Harvested exclusively from free-roaming goats in the high plateaus of Mongolia. Double-spun for maximum durability and featherweight softness.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl border border-neutral-200/60 shadow-lumina-level1 flex flex-col gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold font-serif text-neutral-900">Digital RFID Provenance</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Each garment features an embedded micro-chip verifying its artisan origin, batch number, and lifetime repair guarantee on the blockchain.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl border border-neutral-200/60 shadow-lumina-level1 flex flex-col gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <Gem className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold font-serif text-neutral-900">Atmospheric Design</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Restrained monochrome palette, zero loud branding, and uncompressed high-density tailored cuts designed to command quiet respect.
          </p>
        </div>
      </div>
    </div>
  );
}
