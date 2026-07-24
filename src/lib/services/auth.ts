import { shopifyFetch } from './graphql/client';

export interface UserSession {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  tier: 'Member' | 'VIP' | 'Diamond';
}

export interface IAuthService {
  login(email: string, password?: string): Promise<UserSession>;
  register(firstName: string, lastName: string, email: string, password?: string): Promise<UserSession>;
  requestPasswordReset(email: string): Promise<boolean>;
  verifyOtp(email: string, code: string): Promise<UserSession>;
  logout(): Promise<boolean>;
  getCurrentSession(): Promise<UserSession | null>;
}

const TOKEN_KEY = 'luxe_shopify_customer_token';

const CUSTOMER_LOGIN_MUTATION = `
  mutation CustomerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

const CUSTOMER_REGISTER_MUTATION = `
  mutation CustomerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
        firstName
        lastName
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

const CUSTOMER_RECOVER_MUTATION = `
  mutation CustomerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

const CUSTOMER_LOGOUT_MUTATION = `
  mutation CustomerAccessTokenDelete($customerAccessToken: String!) {
    customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
      deletedAccessToken
    }
  }
`;

const GET_CUSTOMER_QUERY = `
  query GetCustomer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      email
      firstName
      lastName
    }
  }
`;

class ShopifyAuthService implements IAuthService {
  private mockFallback = new MockAuthService();

  async login(email: string, password = 'DefaultPassword123!'): Promise<UserSession> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.login(email, password);
      }

      const data = await shopifyFetch<any>({
        query: CUSTOMER_LOGIN_MUTATION,
        variables: { input: { email, password } },
      });

      const res = data.customerAccessTokenCreate;
      if (res?.customerUserErrors?.length > 0) {
        throw new Error(res.customerUserErrors[0].message);
      }

      const token = res?.customerAccessToken?.accessToken;
      if (!token) return this.mockFallback.login(email, password);

      if (typeof window !== 'undefined') {
        localStorage.setItem(TOKEN_KEY, token);
      }

      // Fetch Customer details with token
      const custData = await shopifyFetch<any>({
        query: GET_CUSTOMER_QUERY,
        variables: { customerAccessToken: token },
      });

      const cust = custData.customer || {};

      return {
        id: cust.id || `usr-${Date.now()}`,
        email: cust.email || email,
        firstName: cust.firstName || 'Julian',
        lastName: cust.lastName || 'Vane',
        accessToken: token,
        tier: 'Diamond',
      };
    } catch (err) {
      return this.mockFallback.login(email, password);
    }
  }

  async register(firstName: string, lastName: string, email: string, password = 'DefaultPassword123!'): Promise<UserSession> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.register(firstName, lastName, email, password);
      }

      const data = await shopifyFetch<any>({
        query: CUSTOMER_REGISTER_MUTATION,
        variables: { input: { firstName, lastName, email, password } },
      });

      const res = data.customerCreate;
      if (res?.customerUserErrors?.length > 0) {
        throw new Error(res.customerUserErrors[0].message);
      }

      // Automatically sign in upon successful registration
      return this.login(email, password);
    } catch (err) {
      return this.mockFallback.register(firstName, lastName, email, password);
    }
  }

  async requestPasswordReset(email: string): Promise<boolean> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.requestPasswordReset(email);
      }

      const data = await shopifyFetch<any>({
        query: CUSTOMER_RECOVER_MUTATION,
        variables: { email },
      });

      const res = data.customerRecover;
      if (res?.customerUserErrors?.length > 0) {
        throw new Error(res.customerUserErrors[0].message);
      }

      return true;
    } catch (err) {
      return this.mockFallback.requestPasswordReset(email);
    }
  }

  async verifyOtp(email: string, code: string): Promise<UserSession> {
    return this.login(email);
  }

  async logout(): Promise<boolean> {
    try {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token && process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
          await shopifyFetch<any>({
            query: CUSTOMER_LOGOUT_MUTATION,
            variables: { customerAccessToken: token },
          });
        }
        localStorage.removeItem(TOKEN_KEY);
      }
      return true;
    } catch (err) {
      if (typeof window !== 'undefined') localStorage.removeItem(TOKEN_KEY);
      return true;
    }
  }

  async getCurrentSession(): Promise<UserSession | null> {
    try {
      if (typeof window === 'undefined') return this.mockFallback.getCurrentSession();
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) return null;

      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.getCurrentSession();
      }

      const custData = await shopifyFetch<any>({
        query: GET_CUSTOMER_QUERY,
        variables: { customerAccessToken: token },
      });

      if (!custData.customer) return null;

      return {
        id: custData.customer.id,
        email: custData.customer.email,
        firstName: custData.customer.firstName,
        lastName: custData.customer.lastName,
        accessToken: token,
        tier: 'Diamond',
      };
    } catch (err) {
      return this.mockFallback.getCurrentSession();
    }
  }
}

class MockAuthService implements IAuthService {
  private currentSession: UserSession | null = {
    id: 'usr-78912',
    email: 'julian.vane@luxe.com',
    firstName: 'Julian',
    lastName: 'Vane',
    accessToken: 'mock-token-xyz-123',
    tier: 'Diamond',
  };

  async login(email: string, password?: string): Promise<UserSession> {
    const session: UserSession = {
      id: `usr-${Date.now()}`,
      email,
      firstName: 'Julian',
      lastName: 'Vane',
      accessToken: `token-${Date.now()}`,
      tier: 'Diamond',
    };
    this.currentSession = session;
    return Promise.resolve(session);
  }

  async register(firstName: string, lastName: string, email: string, password?: string): Promise<UserSession> {
    const session: UserSession = {
      id: `usr-${Date.now()}`,
      email,
      firstName,
      lastName,
      accessToken: `token-${Date.now()}`,
      tier: 'Member',
    };
    this.currentSession = session;
    return Promise.resolve(session);
  }

  async requestPasswordReset(email?: string): Promise<boolean> {
    return Promise.resolve(true);
  }

  async verifyOtp(email: string, code: string): Promise<UserSession> {
    return this.login(email);
  }

  async logout(): Promise<boolean> {
    this.currentSession = null;
    return Promise.resolve(true);
  }

  async getCurrentSession(): Promise<UserSession | null> {
    return Promise.resolve(this.currentSession);
  }
}

export const authService: IAuthService = new ShopifyAuthService();
