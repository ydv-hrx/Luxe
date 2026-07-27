import { Metadata } from 'next';
import { PromotionStudioClient } from '@/features/admin/promotions/PromotionStudioClient';

export const metadata: Metadata = {
  title: 'Discount & Promotions Manager | Luxora Admin Promotion Studio',
  description: 'Enterprise Campaign Workspace & Promotion Studio for Luxora Atelier',
};

export default function AdminPromotionsPage() {
  return <PromotionStudioClient />;
}
