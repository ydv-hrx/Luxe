import 'server-only';
import { ADMIN_MENU_FRAGMENT } from './fragments';

export const SAVE_ADMIN_MENU_MUTATION = `
  ${ADMIN_MENU_FRAGMENT}
  mutation SaveAdminMenu($id: ID, $title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
    menuCreate(title: $title, handle: $handle, items: $items) {
      menu {
        ...AdminMenuFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;
