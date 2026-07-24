import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { commerceService } from '@/lib/services/commerce';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, ArrowRight, ShieldCheck, Gift, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'LUXE | Atmospheric Luxury & Mongolian Cashmere',
  description: 'Explore limited-edition Grade-A Mongolian cashmere, virgin wool trench coats, and vegetable-tanned leather goods.',
};

export default async function HomePage() {
  // RSC Data fetching from abstract data layer
  const featuredProducts = await commerceService.getFeaturedProducts();
  const collections = await commerceService.getCollections();

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Showcase Banner */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-neutral-900 text-white rounded-3xl mx-4 sm:mx-8 mt-4 border border-neutral-800 shadow-lumina-level2">
        <Image
          src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=2000&q=80"
          alt="LUXE Atmospheric Minimalism Hero"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-blue-400" />
            Lumina Autumn/Winter 2026 Collection
          </Badge>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-tight text-white font-serif">
            Atmospheric Minimalism. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              Unrivaled Luxury.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
            Architectural silhouettes crafted from Mongolian cashmere, vegetable-tanned Italian leather, and Mulberry silk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button variant="secondary" size="lg">
              <Link href="/shop" className="flex items-center gap-2">
                Explore Shop All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/20">
              <Link href="/gifting">Gifting Studio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections Grid */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Curated Capsules</span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-900 font-serif mt-1">
              Explore Collections
            </h2>
          </div>
          <Link href="/collections" className="text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-black flex items-center gap-1">
            View All Categories <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={`/shop?category=${col.handle}`}
              className="group relative h-96 rounded-2xl overflow-hidden border border-neutral-200 shadow-lumina-level1 block"
            >
              <Image
                src={col.image.url}
                alt={col.image.altText || col.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-300">
                  {col.itemCount} Items
                </span>
                <h3 className="text-xl font-bold font-serif group-hover:text-blue-300 transition-colors">
                  {col.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2">{col.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Selected Works</span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-900 font-serif mt-1">
              Essential Garments
            </h2>
          </div>
          <Link href="/shop" className="text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-black flex items-center gap-1">
            Shop Catalog <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Gifting Studio Feature Banner */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full">
        <div className="relative rounded-3xl bg-neutral-900 text-white p-8 sm:p-14 overflow-hidden border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl flex flex-col gap-5 z-10">
            <Badge variant="outline" className="text-blue-400 border-blue-400/40 w-fit">
              <Gift className="w-3.5 h-3.5 mr-1" />
              LUXE Bespoke Gifting
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-semibold font-serif leading-tight">
              Personalized Luxury Gift Packaging & Monogramming
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Elevate every occasion with custom embossing, hand-bound message cards, and signature magnetic reveal boxes.
            </p>
            <Button variant="secondary" size="lg" className="w-fit mt-2">
              <Link href="/gifting" className="flex items-center gap-2">
                Launch Gift Builder
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="relative w-full lg:w-96 h-80 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80"
              alt="LUXE Gift Box Packaging"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
