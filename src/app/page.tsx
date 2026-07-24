import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { commerceService } from '@/lib/services/commerce';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Gift,
  Award,
  Truck,
  RotateCcw,
  CheckCircle2,
  Star,
  Mail,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'LUXE Atelier | Grade-A Mongolian Cashmere & Luxury Outerwear',
  description: 'Explore limited-edition Grade-A Mongolian cashmere knits, architectural trench coats, and bespoke leather goods.',
};

export default async function HomePage() {
  const featuredProducts = await commerceService.getFeaturedProducts();
  const collections = await commerceService.getCollections();

  const reviews = [
    {
      author: 'Elena Rostova',
      location: 'Milan, Italy',
      quote: 'The 12-gauge Mongolian cashmere feels cloud-like against the skin. The slouch fit drape sits perfectly over tailored trousers.',
      rating: 5,
    },
    {
      author: 'Julian Vane',
      location: 'New York, USA',
      quote: 'Exceptional quality and white-glove packaging with custom monogramming. Highly recommended for executive capsule wardrobes.',
      rating: 5,
    },
    {
      author: 'Victoria Sterling',
      location: 'London, UK',
      quote: 'Remarkable weight and hand-feel. One of the finest luxury outerwear pieces in my private collection.',
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* SECTION 1: Luxury Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-900 text-white rounded-3xl mx-4 sm:mx-8 mt-4 border border-neutral-800 shadow-lumina-level2">
        <Image
          src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=2000&q=80"
          alt="LUXE Luxury Hero"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8 animate-in fade-in duration-500">
          <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs">
            <Sparkles className="w-4 h-4 mr-2 text-blue-400 fill-blue-400 inline" />
            Lumina Autumn/Winter 2026 Collection
          </Badge>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white font-serif">
            Atmospheric Luxury. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              Unrivaled Mongolian Cashmere.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Architectural silhouettes crafted from Grade-A Ulaanbaatar cashmere, virgin wool trench coats, and vegetable-tanned Italian leather.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto font-bold py-4 shadow-xl">
              <Link href="/shop" className="flex items-center justify-center gap-2">
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/40 text-white hover:bg-white/20 font-bold py-4">
              <Link href="/collections">New Arrivals</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2: Featured Collections */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Curated Capsules</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 font-serif mt-1 tracking-tight">
              Featured Collections
            </h2>
          </div>
          <Link href="/collections" className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-black flex items-center gap-1.5">
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={`/shop?category=${col.handle}`}
              className="group relative h-[420px] rounded-3xl overflow-hidden border border-neutral-200/80 shadow-lumina-level1 hover:shadow-lumina-level2 transition-all duration-300 block hover:-translate-y-1"
            >
              <Image
                src={col.image.url}
                alt={col.image.altText || col.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col gap-1.5">
                <span className="text-[11px] uppercase font-bold tracking-widest text-blue-300">
                  {col.itemCount} Items
                </span>
                <h3 className="text-2xl font-bold font-serif group-hover:text-blue-300 transition-colors">
                  {col.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">{col.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: Featured Products */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Selected Works</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 font-serif mt-1 tracking-tight">
              Essential Garments
            </h2>
          </div>
          <Link href="/shop" className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-black flex items-center gap-1.5">
            Shop Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* SECTION 4: Brand Story & Atelier Heritage */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-14 rounded-3xl border border-neutral-200/80 shadow-lumina-level1">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Badge variant="primary" className="w-fit">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> Atelier Manifesto
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif leading-tight text-neutral-900 tracking-tight">
              Pure Fibers. Architectural Precision.
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Every LUXE garment begins in the steppes of Ulaanbaatar, where rare Grade-A cashmere goats produce double-ply fibers measuring under 15 microns. Meticulously spun and tailored by master artisans, our pieces are designed to transcend seasonal trends.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs pt-4 border-t border-neutral-100">
              <div>
                <span className="font-bold text-neutral-900 text-sm block">12-Gauge Double Ply</span>
                <span className="text-neutral-500">Unmatched warmth & softness</span>
              </div>
              <div>
                <span className="font-bold text-neutral-900 text-sm block">SFA Certified</span>
                <span className="text-neutral-500">100% Sustainable origin</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[450px] rounded-2xl overflow-hidden border border-neutral-200/80 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80"
              alt="Cashmere Craftsmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: Craftsmanship & Value Props */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-4">
            <div className="p-3 bg-neutral-100 rounded-2xl w-fit text-blue-600">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-neutral-900">Grade-A Mongolian Cashmere</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Double-ply 12-gauge fibers hand-combed during the spring season for cloud-like softness.
            </p>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-4">
            <div className="p-3 bg-neutral-100 rounded-2xl w-fit text-blue-600">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-neutral-900">White-Glove Courier Delivery</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Complimentary express delivery with real-time GPS tracking and signature confirmation.
            </p>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-4">
            <div className="p-3 bg-neutral-100 rounded-2xl w-fit text-blue-600">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-neutral-900">30-Day Effortless Returns</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Complimentary residence pick-up for returns and exchanges within 30 days.
            </p>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-4">
            <div className="p-3 bg-neutral-100 rounded-2xl w-fit text-blue-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-neutral-900">RFID Provenance Ledger</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Digital passport microchips sewn into interior care tags verifying authentic origin.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Customer Reviews */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Verified Feedback</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 font-serif mt-1 tracking-tight">
              Client Evaluations
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-serif italic text-neutral-800 leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-xs">
                <div>
                  <h4 className="font-bold text-neutral-900">{rev.author}</h4>
                  <span className="text-neutral-400">{rev.location}</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: Editorial Masonry Gallery */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Campaign Imagery</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 font-serif mt-1 tracking-tight">
              Editorial Gallery
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative h-96 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm group">
            <Image
              src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
              alt="Editorial 1"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm group">
            <Image
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
              alt="Editorial 2"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm group">
            <Image
              src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80"
              alt="Editorial 3"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm group">
            <Image
              src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80"
              alt="Editorial 4"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </section>

      {/* SECTION 8: Newsletter VIP Invocations */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full">
        <div className="relative rounded-3xl bg-neutral-900 text-white p-10 sm:p-16 overflow-hidden border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lumina-level2">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Private Invitations</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight leading-tight">
              Subscribe to Private Drops
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Receive 24-hour advance access to Grade-A Mongolian cashmere drops and private atelier invitations.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md shrink-0">
            <input
              type="email"
              required
              placeholder="Enter email address..."
              className="p-4 bg-neutral-800 border border-neutral-700 rounded-2xl text-xs text-white placeholder-neutral-400 focus:ring-2 focus:ring-white focus:outline-none flex-1"
            />
            <Button variant="secondary" size="lg" type="submit" className="font-bold shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
