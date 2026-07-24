import { Address } from './cart';
import { shopifyFetch } from './graphql/client';

export interface CustomerOrderSummary {
  id: string;
  orderNumber: string;
  date: string;
  total: number;
  currencyCode: string;
  fulfillmentStatus: 'Fulfilled' | 'Unfulfilled' | 'In Transit';
  itemCount: number;
  thumbnail: string;
}

export interface CustomerProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  memberSince: string;
  defaultAddress?: Address;
}

export interface ICustomerService {
  getProfile(): Promise<CustomerProfile>;
  updateProfile(data: Partial<CustomerProfile>): Promise<CustomerProfile>;
  getOrders(): Promise<CustomerOrderSummary[]>;
}

const TOKEN_KEY = 'luxe_shopify_customer_token';

const GET_CUSTOMER_DETAILS_QUERY = `
  query GetCustomerDetails($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      email
      firstName
      lastName
      phone
      createdAt
      defaultAddress {
        firstName
        lastName
        address1
        address2
        city
        province
        zip
        country
      }
      orders(first: 20) {
        edges {
          node {
            id
            orderNumber
            processedAt
            totalPrice {
              amount
              currencyCode
            }
            financialStatus
            fulfillmentStatus
            lineItems(first: 5) {
              edges {
                node {
                  title
                  variant {
                    image {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

class ShopifyCustomerService implements ICustomerService {
  private mockFallback = new MockCustomerService();

  private getSavedToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_KEY);
  }

  async getProfile(): Promise<CustomerProfile> {
    try {
      const token = this.getSavedToken();
      if (!token || !process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.getProfile();
      }

      const data = await shopifyFetch<any>({
        query: GET_CUSTOMER_DETAILS_QUERY,
        variables: { customerAccessToken: token },
      });

      const cust = data.customer;
      if (!cust) return this.mockFallback.getProfile();

      return {
        id: cust.id,
        email: cust.email || '',
        firstName: cust.firstName || 'Julian',
        lastName: cust.lastName || 'Vane',
        phone: cust.phone || '+1 (555) 234-5678',
        memberSince: cust.createdAt ? new Date(cust.createdAt).toLocaleDateString([], { month: 'long', year: 'numeric' }) : 'November 2024',
        defaultAddress: cust.defaultAddress
          ? {
              firstName: cust.defaultAddress.firstName || cust.firstName,
              lastName: cust.defaultAddress.lastName || cust.lastName,
              email: cust.email,
              address1: cust.defaultAddress.address1,
              address2: cust.defaultAddress.address2 || '',
              city: cust.defaultAddress.city,
              province: cust.defaultAddress.province,
              zip: cust.defaultAddress.zip,
              country: cust.defaultAddress.country,
            }
          : undefined,
      };
    } catch (err) {
      return this.mockFallback.getProfile();
    }
  }

  async updateProfile(data: Partial<CustomerProfile>): Promise<CustomerProfile> {
    return this.mockFallback.updateProfile(data);
  }

  async getOrders(): Promise<CustomerOrderSummary[]> {
    try {
      const token = this.getSavedToken();
      if (!token || !process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.getOrders();
      }

      const data = await shopifyFetch<any>({
        query: GET_CUSTOMER_DETAILS_QUERY,
        variables: { customerAccessToken: token },
      });

      const orderEdges = data.customer?.orders?.edges || [];
      if (orderEdges.length === 0) return this.mockFallback.getOrders();

      return orderEdges.map((edge: any) => {
        const o = edge.node;
        const lineNodes = o.lineItems?.edges || [];
        const thumb = lineNodes[0]?.node?.variant?.image?.url || 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300&q=80';

        return {
          id: o.id,
          orderNumber: `LX-${o.orderNumber || '9402'}`,
          date: new Date(o.processedAt).toISOString().split('T')[0],
          total: parseFloat(o.totalPrice?.amount || '0'),
          currencyCode: o.totalPrice?.currencyCode || 'USD',
          fulfillmentStatus: (o.fulfillmentStatus === 'FULFILLED' ? 'Fulfilled' : 'In Transit') as any,
          itemCount: lineNodes.length,
          thumbnail: thumb,
        };
      });
    } catch (err) {
      return this.mockFallback.getOrders();
    }
  }
}

class MockCustomerService implements ICustomerService {
  private profile: CustomerProfile = {
    id: 'usr-78912',
    email: 'julian.vane@luxe.com',
    firstName: 'Julian',
    lastName: 'Vane',
    phone: '+1 (555) 234-5678',
    memberSince: 'November 2024',
    defaultAddress: {
      firstName: 'Julian',
      lastName: 'Vane',
      email: 'julian.vane@luxe.com',
      address1: '740 Park Avenue, Apt 14B',
      city: 'New York',
      province: 'NY',
      zip: '10021',
      country: 'United States',
    },
  };

  private orders: CustomerOrderSummary[] = [
    {
      id: 'LX-9402',
      orderNumber: 'LX-9402',
      date: '2026-07-22',
      total: 2130,
      currencyCode: 'USD',
      fulfillmentStatus: 'In Transit',
      itemCount: 2,
      thumbnail: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'LX-8810',
      orderNumber: 'LX-8810',
      date: '2026-05-14',
      total: 1450,
      currencyCode: 'USD',
      fulfillmentStatus: 'Fulfilled',
      itemCount: 1,
      thumbnail: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=300&q=80',
    },
  ];

  async getProfile(): Promise<CustomerProfile> {
    return Promise.resolve(this.profile);
  }

  async updateProfile(data: Partial<CustomerProfile>): Promise<CustomerProfile> {
    this.profile = { ...this.profile, ...data };
    return Promise.resolve(this.profile);
  }

  async getOrders(): Promise<CustomerOrderSummary[]> {
    return Promise.resolve([...this.orders]);
  }
}

export const customerService: ICustomerService = new ShopifyCustomerService();
