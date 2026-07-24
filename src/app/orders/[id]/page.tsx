import React from 'react';
import { Metadata } from 'next';
import { OrderDetailClient } from '@/features/orders/OrderDetailClient';

interface OrderPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: OrderPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Order Details #${id} | LUXE Atelier`,
    description: `View complete order breakdown, tracking timeline, and receipt for order #${id}.`,
  };
}

export default async function OrderDetailPage({ params }: OrderPageProps) {
  const { id } = await params;

  // Mock order details backing dynamic order ID targets
  const sampleOrder = {
    orderId: id,
    orderNumber: id.startsWith('LX-') ? id : `LX-${id}`,
    date: '2026-07-22',
    paymentStatus: 'Paid' as const,
    fulfillmentStatus: 'In Transit' as const,
    timelineStep: 'shipped' as const,
    items: [
      {
        id: 'p-101',
        title: 'Essential Grade-A Cashmere Hoodie',
        variantTitle: 'Oatmeal / Size Medium',
        price: 680,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'p-102',
        title: 'Architectural Slouch Trench Coat',
        variantTitle: 'Onyx Black / Size 48',
        price: 1450,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
      },
    ],
    shippingAddress: {
      name: 'Julian Vane',
      street: '740 Park Avenue, Apt 14B',
      city: 'New York',
      state: 'NY',
      zip: '10021',
      country: 'United States',
    },
    billingAddress: {
      name: 'Julian Vane',
      street: '740 Park Avenue, Apt 14B',
      city: 'New York',
      state: 'NY',
      zip: '10021',
      country: 'United States',
    },
    subtotal: 2130,
    shippingCost: 0,
    discounts: 0,
    tax: 170.4,
    total: 2300.4,
  };

  return <OrderDetailClient {...sampleOrder} />;
}
