import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { commerceService } from '@/lib/services/commerce';
import { ProductGallery } from '@/features/product/ProductGallery';
import { ProductInformation } from '@/features/product/ProductInformation';
import { VariantSelector } from '@/features/product/VariantSelector';
import { ProductStoryAccordions } from '@/features/product/ProductStoryAccordions';
import { CompleteTheLook } from '@/features/product/CompleteTheLook';
import { ProductReviewsSection } from '@/features/reviews/ProductReviewsSection';
import { CompareTray } from '@/features/compare/CompareTray';
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await commerceService.getProductByHandle(handle);

  if (!product) {
    return {
      title: 'Product Not Found | LUXE',
    };
  }

  return {
    title: `${product.title} | LUXE Atelier`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await commerceService.getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  // Fetch related products for "Complete the Look"
  const allProducts = await commerceService.getProducts();
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 3);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.images[0]?.url,
    offers: {
      '@type': 'Offer',
      priceCurrency: product.price.currencyCode,
      price: product.price.amount,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating || 4.9,
      reviewCount: product.reviewCount || 24,
    },
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 sm:py-12 flex flex-col gap-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* 55% / 45% Desktop Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column (55%): Gallery & Craftsmanship Accordions */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          <ProductGallery images={product.images} title={product.title} />
          <ProductStoryAccordions />
        </div>

        {/* Right Column (45%): Sticky Purchase Panel */}
        <div className="lg:col-span-5 flex flex-col gap-8 sticky top-28">
          <ProductInformation product={product} />
          <VariantSelector product={product} />

          {/* Value Props Strip */}
          <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-semibold text-neutral-600 pt-4 border-t border-neutral-200/80">
            <div className="flex flex-col items-center gap-1">
              <Truck className="w-4 h-4 text-blue-600" />
              <span>Express Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <RotateCcw className="w-4 h-4 text-blue-600" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>RFID Authenticity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews & Ratings Section */}
      <div id="reviews">
        <ProductReviewsSection productId={product.id} productTitle={product.title} />
      </div>

      {/* Complete The Look / Related Products Section */}
      <Suspense fallback={<div className="h-40 bg-neutral-100 rounded-2xl animate-pulse" />}>
        <CompleteTheLook relatedProducts={relatedProducts} />
      </Suspense>

      {/* Global Compare Tray */}
      <CompareTray />
    </div>
  );
}
