import { Metadata } from 'next';
import { ProductManagerClient } from '@/features/admin/products/ProductManagerClient';

export const metadata: Metadata = {
  title: 'Product Manager | Luxora Admin Flagship Editorial Studio',
  description: 'Enterprise Product & Inventory Flagship Editorial Studio for Luxora Atelier',
};

export default function AdminProductsPage() {
  return <ProductManagerClient />;
}
