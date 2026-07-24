import React from 'react';
import { Metadata } from 'next';
import { WishlistClient } from '@/features/wishlist/WishlistClient';

export const metadata: Metadata = {
  title: 'Your Wishlist | LUXE Atelier',
  description: 'View and manage your curated collection of luxury Grade-A cashmere and architectural outerwear.',
};

export default function WishlistPage() {
  return (
    <main className="max-w-[1440px] mx-auto px-6 sm:px-8 py-12">
      <WishlistClient />
    </main>
  );
}
