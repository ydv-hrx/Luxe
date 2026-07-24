import React from 'react';
import Link from 'next/link';
import { NewsletterForm } from '@/components/ui/NewsletterForm';
import { Sparkles, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-neutral-800 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Truck className="w-6 h-6 text-blue-400" />
            <h4 className="text-sm font-semibold uppercase tracking-wider">Complimentary Express Shipping</h4>
            <p className="text-xs text-neutral-400">On all global orders over $500 with white-glove packaging.</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <RefreshCw className="w-6 h-6 text-blue-400" />
            <h4 className="text-sm font-semibold uppercase tracking-wider">30-Day Concierge Returns</h4>
            <p className="text-xs text-neutral-400">Home pickup scheduled at your convenience with zero fee.</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <ShieldCheck className="w-6 h-6 text-blue-400" />
            <h4 className="text-sm font-semibold uppercase tracking-wider">Authenticity & Lifetime Guarantee</h4>
            <p className="text-xs text-neutral-400">Every garment features digital RFID provenance verification.</p>
          </div>
        </div>

        {/* Navigation & Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          {/* Brand Philosophy Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold tracking-widest uppercase font-serif text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>LUXE</span>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed">
              LUXE represents the architectural fusion of rare materials, atmospheric minimalism, and bespoke digital commerce. Curated for discerning collectors worldwide.
            </p>
          </div>

          {/* Quick Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-xs font-medium">
            <div className="flex flex-col gap-3">
              <span className="font-semibold uppercase text-white tracking-wider">Navigation</span>
              <Link href="/shop" className="text-neutral-400 hover:text-white transition-colors">Shop All</Link>
              <Link href="/collections" className="text-neutral-400 hover:text-white transition-colors">Collections</Link>
              <Link href="/gifting" className="text-neutral-400 hover:text-white transition-colors">Gifting Studio</Link>
              <Link href="/wardrobe" className="text-neutral-400 hover:text-white transition-colors">AI Wardrobe</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold uppercase text-white tracking-wider">Client Services</span>
              <Link href="/concierge" className="text-neutral-400 hover:text-white transition-colors">LUXE Concierge</Link>
              <Link href="/orders" className="text-neutral-400 hover:text-white transition-colors">Order Tracking</Link>
              <Link href="/returns" className="text-neutral-400 hover:text-white transition-colors">Returns & Exchanges</Link>
              <Link href="/help" className="text-neutral-400 hover:text-white transition-colors">Help Center</Link>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="font-semibold uppercase text-xs text-white tracking-wider">Join The Collective</span>
            <p className="text-xs text-neutral-400">
              Subscribe to receive private collection previews, private gala invitations, and personal stylist insights.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} LUXE Atelier Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-neutral-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-neutral-300">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-neutral-300">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
