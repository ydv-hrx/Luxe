import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';
import './globals.css';
import { TopNavBar } from '@/components/layout/TopNavBar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { WishlistToast } from '@/components/ui/WishlistToast';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luxe-atelier.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'LUXE | Premium E-Commerce Suite',
    template: '%s | LUXE Atelier',
  },
  description: 'Architectural luxury apparel, Grade-A Mongolian cashmere, and bespoke Italian leather goods.',
  openGraph: {
    title: 'LUXE Atelier | Premium E-Commerce Suite',
    description: 'Architectural luxury apparel, Grade-A Mongolian cashmere, and bespoke Italian leather goods.',
    url: baseUrl,
    siteName: 'LUXE Atelier',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'LUXE Atelier Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUXE Atelier | Premium Headless E-Commerce',
    description: 'Architectural luxury apparel, Grade-A Mongolian cashmere, and bespoke Italian leather goods.',
    images: ['https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LUXE Atelier',
  url: baseUrl,
  logo: `${baseUrl}/favicon.ico`,
  sameAs: ['https://instagram.com/luxeatelier', 'https://twitter.com/luxeatelier'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#f8f9fa] text-[#191c1d] min-h-screen flex flex-col justify-between">
        <TopNavBar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <CartDrawer />
        <WishlistToast />
      </body>
    </html>
  );
}
