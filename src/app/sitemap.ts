import { MetadataRoute } from 'next';
import { commerceService } from '@/lib/services/commerce';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luxe-atelier.vercel.app';

  const products = await commerceService.getProducts();
  const collections = await commerceService.getCollections();

  const routes = [
    '',
    '/shop',
    '/collections',
    '/gifting',
    '/concierge',
    '/wardrobe',
    '/rewards',
    '/wishlist',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${baseUrl}/products/${p.handle}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const collectionRoutes = collections.map((c) => ({
    url: `${baseUrl}/collections/${c.handle}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...productRoutes, ...collectionRoutes];
}
