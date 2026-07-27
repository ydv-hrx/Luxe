import 'server-only';
import { executeGraphQL } from '../../graphql';
import { GET_ADMIN_MENUS_QUERY } from './queries';
import { SAVE_ADMIN_MENU_MUTATION } from './mutations';
import { AdminNavigationMenu } from '../../types';
import { normalizeShopifyUserErrors, ValidationError } from '../../errors';
import { revalidateNavigation } from '../../cache/revalidate';
import { CACHE_TAGS } from '../../constants';
import { NavigationInput } from '../../validation';

function transformShopifyAdminMenu(node: any): AdminNavigationMenu {
  return {
    id: node.id,
    title: node.title,
    handle: node.handle,
    items: (node.items || []).map((it: any) => ({
      id: it.id,
      title: it.title,
      url: it.url,
      items: (it.items || []).map((sub: any) => ({ id: sub.id, title: sub.title, url: sub.url })),
    })),
  };
}

export class NavigationAdminService {
  async getMenus(): Promise<AdminNavigationMenu[]> {
    try {
      const data = await executeGraphQL<any>({
        query: GET_ADMIN_MENUS_QUERY,
        tags: [CACHE_TAGS.NAVIGATION],
        revalidate: 120,
      });

      const edges = data.menus?.edges || [];
      return edges.map((e: any) => transformShopifyAdminMenu(e.node));
    } catch (_err) {
      return [
        {
          id: 'menu-main',
          title: 'Main Navigation Header',
          handle: 'main-menu',
          items: [
            { id: 'm-1', title: 'New Arrivals', url: '/collections/new' },
            { id: 'm-2', title: 'Outerwear', url: '/collections/outerwear' },
            { id: 'm-3', title: 'Knitwear', url: '/collections/knits' },
          ],
        },
      ];
    }
  }

  async saveMenu(input: NavigationInput): Promise<AdminNavigationMenu> {
    const data = await executeGraphQL<any>({
      query: SAVE_ADMIN_MENU_MUTATION,
      variables: {
        id: input.id,
        title: input.title,
        handle: input.handle,
        items: input.items.map((it) => ({ title: it.title, url: it.url })),
      },
    });

    const userErrors = data.menuCreate?.userErrors;
    const errorMsg = normalizeShopifyUserErrors(userErrors);
    if (errorMsg) {
      throw new ValidationError(errorMsg);
    }

    const created = transformShopifyAdminMenu(data.menuCreate.menu);
    revalidateNavigation();
    return created;
  }
}

export const navigationAdminService = new NavigationAdminService();
