import { Cart, CartLineItem, Money } from '@/types';
import { MOCK_PRODUCTS } from './mockData';
import { shopifyFetch } from './graphql/client';

export interface Address {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  zip: string;
  country: string;
}

export interface CartLineInput {
  merchandiseId: string;
  quantity: number;
}

export interface ICartService {
  createCart(lines?: CartLineInput[]): Promise<Cart>;
  addLines(cartId: string, lines: CartLineInput[]): Promise<Cart>;
  updateLines(cartId: string, lines: { id: string; quantity: number }[]): Promise<Cart>;
  removeLines(cartId: string, lineIds: string[]): Promise<Cart>;
  getCart(cartId: string): Promise<Cart | null>;
  checkout(cartId: string, shippingAddress?: Address, paymentMethod?: string): Promise<{ checkoutUrl: string }>;
}

const CART_FRAGMENT = `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 50) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              price {
                amount
                currencyCode
              }
              image {
                url
                altText
              }
              product {
                id
                handle
                title
                vendor
              }
            }
          }
        }
      }
    }
  }
`;

const CREATE_CART_MUTATION = `
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        ...CartFields
      }
    }
  }
  ${CART_FRAGMENT}
`;

const ADD_LINES_MUTATION = `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFields
      }
    }
  }
  ${CART_FRAGMENT}
`;

const UPDATE_LINES_MUTATION = `
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFields
      }
    }
  }
  ${CART_FRAGMENT}
`;

const REMOVE_LINES_MUTATION = `
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartFields
      }
    }
  }
  ${CART_FRAGMENT}
`;

const BUYER_IDENTITY_UPDATE_MUTATION = `
  mutation CartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ...CartFields
      }
    }
  }
  ${CART_FRAGMENT}
`;

const GET_CART_QUERY = `
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      ...CartFields
    }
  }
  ${CART_FRAGMENT}
`;

/** Helper transformer converting GraphQL Cart node to domain Cart model */
function transformShopifyCart(node: any): Cart {
  const lines: CartLineItem[] =
    node.lines?.edges?.map((edge: any) => {
      const merchandise = edge.node.merchandise || {};
      const product = merchandise.product || {};

      return {
        id: edge.node.id,
        quantity: edge.node.quantity,
        product: {
          id: product.id || 'prod-1',
          handle: product.handle || 'essential-cashmere-hoodie',
          title: product.title || 'LUXE Garment',
          vendor: product.vendor || 'LUXE Atelier',
        },
        variant: {
          id: merchandise.id || 'var-1',
          title: merchandise.title || 'Default',
          sku: 'SKU-LX',
          price: {
            amount: parseFloat(merchandise.price?.amount || '0'),
            currencyCode: merchandise.price?.currencyCode || 'USD',
          },
          selectedOptions: {},
          availableForSale: true,
          image: merchandise.image ? { url: merchandise.image.url, altText: merchandise.image.altText } : undefined,
        },
      };
    }) || [];

  return {
    id: node.id,
    lines,
    totalQuantity: node.totalQuantity || 0,
    subtotal: {
      amount: parseFloat(node.cost?.subtotalAmount?.amount || '0'),
      currencyCode: node.cost?.subtotalAmount?.currencyCode || 'USD',
    },
    tax: {
      amount: parseFloat(node.cost?.totalTaxAmount?.amount || '0'),
      currencyCode: node.cost?.totalTaxAmount?.currencyCode || 'USD',
    },
    total: {
      amount: parseFloat(node.cost?.totalAmount?.amount || '0'),
      currencyCode: node.cost?.totalAmount?.currencyCode || 'USD',
    },
  };
}

class ShopifyCartService implements ICartService {
  private mockFallback = new MockCartService();

  async createCart(lines: CartLineInput[] = []): Promise<Cart> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.createCart(lines);
      }

      const data = await shopifyFetch<any>({
        query: CREATE_CART_MUTATION,
        variables: {
          input: {
            lines: lines.map((l) => ({ merchandiseId: l.merchandiseId, quantity: l.quantity })),
          },
        },
      });

      const resCart = data.cartCreate?.cart;
      if (!resCart) return this.mockFallback.createCart(lines);

      return transformShopifyCart(resCart);
    } catch (err) {
      return this.mockFallback.createCart(lines);
    }
  }

  async addLines(cartId: string, lines: CartLineInput[]): Promise<Cart> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.addLines(cartId, lines);
      }

      const data = await shopifyFetch<any>({
        query: ADD_LINES_MUTATION,
        variables: { cartId, lines },
      });

      const resCart = data.cartLinesAdd?.cart;
      if (!resCart) return this.mockFallback.addLines(cartId, lines);

      return transformShopifyCart(resCart);
    } catch (err) {
      return this.mockFallback.addLines(cartId, lines);
    }
  }

  async updateLines(cartId: string, lines: { id: string; quantity: number }[]): Promise<Cart> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.updateLines(cartId, lines);
      }

      const data = await shopifyFetch<any>({
        query: UPDATE_LINES_MUTATION,
        variables: { cartId, lines },
      });

      const resCart = data.cartLinesUpdate?.cart;
      if (!resCart) return this.mockFallback.updateLines(cartId, lines);

      return transformShopifyCart(resCart);
    } catch (err) {
      return this.mockFallback.updateLines(cartId, lines);
    }
  }

  async removeLines(cartId: string, lineIds: string[]): Promise<Cart> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.removeLines(cartId, lineIds);
      }

      const data = await shopifyFetch<any>({
        query: REMOVE_LINES_MUTATION,
        variables: { cartId, lineIds },
      });

      const resCart = data.cartLinesRemove?.cart;
      if (!resCart) return this.mockFallback.removeLines(cartId, lineIds);

      return transformShopifyCart(resCart);
    } catch (err) {
      return this.mockFallback.removeLines(cartId, lineIds);
    }
  }

  async getCart(cartId: string): Promise<Cart | null> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.getCart(cartId);
      }

      const data = await shopifyFetch<any>({
        query: GET_CART_QUERY,
        variables: { cartId },
      });

      if (!data.cart) return this.mockFallback.getCart(cartId);
      return transformShopifyCart(data.cart);
    } catch (err) {
      return this.mockFallback.getCart(cartId);
    }
  }

  async checkout(cartId: string, shippingAddress?: Address, paymentMethod?: string): Promise<{ checkoutUrl: string }> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.checkout(cartId, shippingAddress, paymentMethod);
      }

      if (shippingAddress) {
        await shopifyFetch<any>({
          query: BUYER_IDENTITY_UPDATE_MUTATION,
          variables: {
            cartId,
            buyerIdentity: {
              email: shippingAddress.email,
              deliveryAddressPreferences: [
                {
                  deliveryAddress: {
                    address1: shippingAddress.address1,
                    address2: shippingAddress.address2 || '',
                    city: shippingAddress.city,
                    province: shippingAddress.province,
                    zip: shippingAddress.zip,
                    country: shippingAddress.country,
                    firstName: shippingAddress.firstName,
                    lastName: shippingAddress.lastName,
                    phone: shippingAddress.phone || '',
                  },
                },
              ],
            },
          },
        });
      }

      const data = await shopifyFetch<any>({
        query: GET_CART_QUERY,
        variables: { cartId },
      });

      const checkoutUrl = data?.cart?.checkoutUrl;
      if (checkoutUrl && checkoutUrl.startsWith('http')) {
        return { checkoutUrl };
      }

      return this.mockFallback.checkout(cartId, shippingAddress, paymentMethod);
    } catch (err) {
      return this.mockFallback.checkout(cartId, shippingAddress, paymentMethod);
    }
  }
}

class MockCartService implements ICartService {
  private mockCart: Cart = {
    id: 'cart-mock-1002',
    lines: [
      {
        id: 'line-1',
        product: MOCK_PRODUCTS[0],
        variant: MOCK_PRODUCTS[0].variants[0],
        quantity: 1,
      },
    ],
    totalQuantity: 1,
    subtotal: { amount: 680, currencyCode: 'USD' },
    tax: { amount: 54.4, currencyCode: 'USD' },
    total: { amount: 734.4, currencyCode: 'USD' },
  };

  async createCart(lines: CartLineInput[] = []): Promise<Cart> {
    return Promise.resolve({ ...this.mockCart, id: `cart-${Date.now()}` });
  }

  async addLines(cartId: string, lines: CartLineInput[]): Promise<Cart> {
    return Promise.resolve({ ...this.mockCart });
  }

  async updateLines(cartId: string, lines: { id: string; quantity: number }[]): Promise<Cart> {
    return Promise.resolve({ ...this.mockCart });
  }

  async removeLines(cartId: string, lineIds: string[]): Promise<Cart> {
    return Promise.resolve({ ...this.mockCart });
  }

  async getCart(cartId?: string): Promise<Cart | null> {
    return Promise.resolve({ ...this.mockCart, id: cartId || this.mockCart.id });
  }

  async checkout(cartId: string, shippingAddress?: Address, paymentMethod?: string): Promise<{ checkoutUrl: string }> {
    const orderId = `LX-${Math.floor(1000 + Math.random() * 9000)}`;
    return Promise.resolve({
      checkoutUrl: `/orders/${orderId}`,
    });
  }
}

export const cartService: ICartService = new ShopifyCartService();
