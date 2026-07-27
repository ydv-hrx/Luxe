import 'server-only';
import { ADMIN_MENU_FRAGMENT } from './fragments';

export const GET_ADMIN_MENUS_QUERY = `
  ${ADMIN_MENU_FRAGMENT}
  query GetAdminMenus {
    menus(first: 25) {
      edges {
        node {
          ...AdminMenuFragment
        }
      }
    }
  }
`;
