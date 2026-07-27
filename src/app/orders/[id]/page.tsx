import React from 'react';
import { Metadata } from 'next';
import { customerService } from '@/lib/services/customer';
import { OrderDetailClient } from '@/features/orders/OrderDetailClient';
import { notFound } from 'next/navigation';

interface OrderPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: OrderPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Order Details #${id} | LUXORA Atelier`,
    description: `View complete order breakdown, tracking timeline, and receipt for order #${id}.`,
  };
}

export default async function OrderDetailPage({ params }: OrderPageProps) {
  const { id } = await params;

  const order = await customerService.getOrderDetail(id);

  if (!order) {
    notFound();
  }

  return <OrderDetailClient {...order} />;
}
