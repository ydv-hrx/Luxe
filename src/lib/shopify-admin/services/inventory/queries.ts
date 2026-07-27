import 'server-only';
import { ADMIN_INVENTORY_FRAGMENT } from './fragments';

export const GET_ADMIN_INVENTORY_QUERY = `
  ${ADMIN_INVENTORY_FRAGMENT}
  query GetAdminInventory($first: Int, $after: String) {
    inventoryItems(first: $first, after: $after) {
      edges {
        cursor
        node {
          ...AdminInventoryFragment
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
