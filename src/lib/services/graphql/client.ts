/**
 * Shopify Storefront GraphQL Fetch Client
 * Handles authenticated POST requests to Shopify's Storefront API endpoint with full error handling.
 */

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'luxe-atelier.myshopify.com';
const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';
const apiVersion = process.env.SHOPIFY_STOREFRONT_API_VERSION || '2026-04';

const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

export async function shopifyFetch<T>({
  query,
  variables = {},
  headers = {},
  cache = 'force-cache',
}: {
  query: string;
  variables?: Record<string, any>;
  headers?: HeadersInit;
  cache?: RequestCache;
}): Promise<T> {
  if (!accessToken) {
    throw new Error('Shopify Storefront Access Token is not defined in environment variables.');
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': accessToken,
        ...headers,
      },
      body: JSON.stringify({ query, variables }),
      cache,
    });

    const body = await response.json();

    if (body.errors) {
      console.error('Shopify GraphQL Errors:', body.errors);
      throw new Error(body.errors[0]?.message || 'GraphQL Query Error');
    }

    return body.data as T;
  } catch (error) {
    console.error('shopifyFetch Network or Parse Error:', error);
    throw error;
  }
}
