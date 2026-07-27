import { shopifyFetch } from './graphql/client';

export interface MenuItem {
  id: string;
  title: string;
  url: string;
  items?: MenuItem[];
}

export interface MenuData {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface INavigationService {
  getMenu(handle: string): Promise<MenuData | null>;
  getHeaderMenu(): Promise<MenuItem[]>;
  getFooterMenus(): Promise<{ title: string; items: MenuItem[] }[]>;
}

const GET_MENU_QUERY = `
  query GetMenu($handle: String!) {
    menu(handle: $handle) {
      id
      title
      items {
        id
        title
        url
        items {
          id
          title
          url
          items {
            id
            title
            url
          }
        }
      }
    }
  }
`;

/** Converts Shopify URL structures to Next.js internal application routes */
export function formatShopifyUrl(url: string): string {
  if (!url) return '/';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    try {
      const parsed = new URL(url);
      url = parsed.pathname + parsed.search + parsed.hash;
    } catch (_e) {
      return url;
    }
  }

  // Handle common Shopify routes mapping
  if (url === '/collections/all' || url === '/collections') return '/shop';
  if (url.startsWith('/collections/')) return url;
  if (url.startsWith('/products/')) return url;
  if (url === '/pages/about' || url === '/pages/about-us') return '/about';
  if (url === '/pages/contact' || url === '/pages/support') return '/support';

  return url;
}

function transformMenuItems(nodes: any[]): MenuItem[] {
  if (!nodes || !Array.isArray(nodes)) return [];
  return nodes.map((n: any) => ({
    id: n.id,
    title: n.title,
    url: formatShopifyUrl(n.url),
    items: transformMenuItems(n.items || []),
  }));
}

export const FALLBACK_HEADER_MENU: MenuItem[] = [
  { id: 'h-1', title: 'Home', url: '/' },
  { id: 'h-2', title: 'Shop', url: '/shop' },
  { id: 'h-3', title: 'Collections', url: '/collections' },
  { id: 'h-4', title: 'Deals', url: '/deals' },
  { id: 'h-5', title: 'About', url: '/about' },
  { id: 'h-6', title: 'Support', url: '/support' },
];

export const FALLBACK_FOOTER_MENUS = [
  {
    title: 'Information',
    items: [
      { id: 'f-1', title: 'About Us', url: '/about' },
      { id: 'f-2', title: 'Contact', url: '/support' },
      { id: 'f-3', title: 'Sustainability', url: '/about' },
      { id: 'f-4', title: 'Store Locator', url: '/shop' },
    ],
  },
  {
    title: 'Customer Care',
    items: [
      { id: 'f-5', title: 'Shipping & Returns', url: '/returns' },
      { id: 'f-6', title: 'FAQ', url: '/support' },
      { id: 'f-7', title: 'Size Guide', url: '/shop' },
      { id: 'f-8', title: 'Gift Cards', url: '/gifting' },
    ],
  },
  {
    title: 'Social',
    items: [
      { id: 'f-9', title: 'Instagram', url: 'https://instagram.com' },
      { id: 'f-10', title: 'Pinterest', url: 'https://pinterest.com' },
      { id: 'f-11', title: 'LinkedIn', url: 'https://linkedin.com' },
      { id: 'f-12', title: 'Journal', url: '/about' },
    ],
  },
];

class ShopifyNavigationService implements INavigationService {
  private cache = new Map<string, MenuData>();

  async getMenu(handle: string): Promise<MenuData | null> {
    try {
      if (this.cache.has(handle)) {
        return this.cache.get(handle)!;
      }

      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return null;
      }

      const data = await shopifyFetch<any>({
        query: GET_MENU_QUERY,
        variables: { handle },
        tags: [`menu-${handle}`],
        revalidate: 3600,
      });

      const menu = data.menu;
      if (!menu) return null;

      const formatted: MenuData = {
        id: menu.id,
        title: menu.title,
        items: transformMenuItems(menu.items),
      };

      this.cache.set(handle, formatted);
      return formatted;
    } catch (err) {
      console.warn(`Shopify Navigation API failed for menu handle "${handle}":`, err);
      return null;
    }
  }

  async getHeaderMenu(): Promise<MenuItem[]> {
    const handles = ['main-menu', 'header-menu', 'header'];
    for (const h of handles) {
      const m = await this.getMenu(h);
      if (m && m.items.length > 0) return m.items;
    }
    return FALLBACK_HEADER_MENU;
  }

  async getFooterMenus(): Promise<{ title: string; items: MenuItem[] }[]> {
    const footerMenu = await this.getMenu('footer');
    if (footerMenu && footerMenu.items.length > 0) {
      return [
        {
          title: footerMenu.title || 'Navigation',
          items: footerMenu.items,
        },
      ];
    }
    return FALLBACK_FOOTER_MENUS;
  }
}

export const navigationService: INavigationService = new ShopifyNavigationService();
