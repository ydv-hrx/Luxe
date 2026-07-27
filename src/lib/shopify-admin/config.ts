import 'server-only';
import { z } from 'zod';

const envSchema = z.object({
  SHOPIFY_ADMIN_API_ACCESS_TOKEN: z.string().min(1, 'SHOPIFY_ADMIN_API_ACCESS_TOKEN is missing'),
  SHOPIFY_STORE_DOMAIN: z.string().min(1, 'SHOPIFY_STORE_DOMAIN is missing'),
  SHOPIFY_API_VERSION: z.string().default('2025-07'),
});

/**
 * Validated Shopify Admin Environment Configuration
 */
function getShopifyAdminConfig() {
  const rawEnv = {
    SHOPIFY_ADMIN_API_ACCESS_TOKEN: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN || '',
    SHOPIFY_STORE_DOMAIN:
      process.env.SHOPIFY_STORE_DOMAIN || process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'shopforge-ai.myshopify.com',
    SHOPIFY_API_VERSION: process.env.SHOPIFY_API_VERSION || '2025-07',
  };

  const parsed = envSchema.safeParse(rawEnv);

  if (!parsed.success) {
    console.warn(
      '⚠️ [Shopify Admin Config Warning] Environment validation issues:',
      parsed.error.flatten().fieldErrors
    );
  }

  const domain = rawEnv.SHOPIFY_STORE_DOMAIN.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const graphqlEndpoint = `https://${domain}/admin/api/${rawEnv.SHOPIFY_API_VERSION}/graphql.json`;

  return {
    accessToken: rawEnv.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
    storeDomain: domain,
    apiVersion: rawEnv.SHOPIFY_API_VERSION,
    graphqlEndpoint,
    isValid: parsed.success && Boolean(rawEnv.SHOPIFY_ADMIN_API_ACCESS_TOKEN),
  };
}

export const shopifyAdminConfig = getShopifyAdminConfig();
