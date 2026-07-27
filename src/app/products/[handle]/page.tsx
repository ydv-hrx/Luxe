import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { commerceService } from '@/lib/services/commerce';
import { ProductGallery } from '@/features/product/ProductGallery';
import { ProductInformation } from '@/features/product/ProductInformation';
import { VariantSelector } from '@/features/product/VariantSelector';
import { ProductStorySection } from '@/features/product/ProductStorySection';
import { ProductStoryAccordions } from '@/features/product/ProductStoryAccordions';
import { LifestyleGallery } from '@/features/product/LifestyleGallery';
import { CompleteTheLook } from '@/features/product/CompleteTheLook';
import { RecentlyViewedSection, RecentlyViewedTracker } from '@/features/product/RecentlyViewedSection';
import { ProductReviewsSection } from '@/features/reviews/ProductReviewsSection';
import { ProductTrustBar } from '@/features/product/ProductTrustBar';
import { CompareTray } from '@/features/compare/CompareTray';

export const revalidate = 60; // Next.js 60-second Incremental Static Regeneration

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await commerceService.getProductByHandle(handle);

  if (!product) {
    return {
      title: 'Product Not Found | LUXORA Atelier',
    };
  }

  const primaryImage = product.images[0]?.url;

  return {
    title: `${product.title} | LUXORA Atelier`,
    description: product.description || `Discover ${product.title} crafted by ${product.vendor}.`,
    openGraph: {
      title: `${product.title} | LUXORA Atelier`,
      description: product.description,
      images: primaryImage ? [{ url: primaryImage, alt: product.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} | LUXORA Atelier`,
      description: product.description,
      images: primaryImage ? [primaryImage] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await commerceService.getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  // Fetch related product recommendations
  const relatedProducts = await commerceService.getProductRecommendations(product.id);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.images[0]?.url,
    brand: {
      '@type': 'Brand',
      name: product.vendor,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: product.price.currencyCode,
      price: product.price.amount,
      availability: product.variants[0]?.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating || 4.8,
      reviewCount: product.reviewCount || 12,
    },
  };

  return (
    <div className="w-full font-sans bg-[#f9f9f9] text-[#1a1c1c] pb-24 md:pb-0">
      {/* Side effect tracking into localStorage */}
      <RecentlyViewedTracker product={product} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* 1. Main Product Hero Section (Stitch 60%/40% Desktop Split, Mobile Stack) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 pt-4 sm:pt-8 md:pt-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
        {/* Left Gallery (60% desktop: md:col-span-7) */}
        <div className="md:col-span-7 w-full">
          <ProductGallery images={product.images} title={product.title} />
        </div>

        {/* Right Product Purchase Info (40% desktop: md:col-span-5) */}
        <div className="md:col-span-5 w-full flex flex-col gap-6 sm:gap-8">
          <ProductInformation product={product} />
          <VariantSelector product={product} />
        </div>
      </section>

      {/* 2. Product Story Section (Stitch Desktop & Mobile Editorial Story) */}
      <ProductStorySection />

      {/* 3. Product Details Accordion with dynamic Shopify Metafields */}
      <ProductStoryAccordions product={product} />

      {/* 4. Lifestyle Gallery (Editorial Collage) */}
      <LifestyleGallery />

      {/* 5. Complete the Look Carousel */}
      <Suspense fallback={<div className="h-40 bg-neutral-100 animate-pulse" />}>
        <CompleteTheLook relatedProducts={relatedProducts} />
      </Suspense>

      {/* 6. Customer Reviews Section */}
      <div id="reviews" className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 py-12 sm:py-16">
        <ProductReviewsSection productId={product.id} productTitle={product.title} />
      </div>

      {/* 7. Trust Features Strip */}
      <ProductTrustBar />

      {/* 8. Recently Viewed Section */}
      <RecentlyViewedSection currentProductId={product.id} />

      {/* Global Compare Tray */}
      <CompareTray />
    </div>
  );
}
