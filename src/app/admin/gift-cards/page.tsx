import { Metadata } from 'next';
import { GiftStudioClient } from '@/features/admin/gift-cards/GiftStudioClient';

export const metadata: Metadata = {
  title: 'Gift Card & Store Credit Manager | Luxora Admin Gifting Studio',
  description: 'Enterprise Gift Card & Store Credit Workspace for Luxora Atelier',
};

export default function AdminGiftCardsPage() {
  return <GiftStudioClient />;
}
