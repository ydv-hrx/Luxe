import React from 'react';
import { Metadata } from 'next';
import { CartPageClient } from '@/features/cart/CartPageClient';

export const metadata: Metadata = {
  title: 'Shopping Bag | LUXE Atelier',
  description: 'Review your curated luxury collection, bespoke cashmere garments, and accessories before proceeding to secure checkout.',
};

export default function CartPage() {
  return <CartPageClient />;
}
