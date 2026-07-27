import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';
import React, { Suspense } from 'react';
import './globals.css';
import { TopNavBar } from '@/components/layout/TopNavBar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { WishlistToast } from '@/components/ui/WishlistToast';
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';
import { MainLayoutWrapper } from '@/components/layout/MainLayoutWrapper';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
  display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luxora-atelier.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Luxora | High-Fidelity Premium Ecommerce',
    template: '%s | Luxora',
  },
  description: 'Architectural luxury apparel, Grade-A Mongolian cashmere, and bespoke Italian leather goods.',
  openGraph: {
    title: 'Luxora | High-Fidelity Premium Ecommerce',
    description: 'Architectural luxury apparel, Grade-A Mongolian cashmere, and bespoke Italian leather goods.',
    url: baseUrl,
    siteName: 'Luxora',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Luxora Atelier Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxora | Premium Headless E-Commerce',
    description: 'Architectural luxury apparel, Grade-A Mongolian cashmere, and bespoke Italian leather goods.',
    images: ['https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="antialiased bg-[#faf9f9] text-[#1a1c1c] min-h-screen flex flex-col justify-between selection:bg-neutral-900 selection:text-white">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-black focus:text-white focus:rounded-full focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Top Navigation */}
        <TopNavBar />

        {/* Main Content Layout Wrapper */}
        <MainLayoutWrapper>
          <Suspense fallback={null}>
            <AnalyticsProvider>{children}</AnalyticsProvider>
          </Suspense>
        </MainLayoutWrapper>

        {/* Footer */}
        <Footer />
        <CartDrawer />
        <WishlistToast />
      </body>
    </html>
  );
}
