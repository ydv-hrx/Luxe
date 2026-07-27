import 'server-only';
import { ADMIN_ORDER_FRAGMENT } from './fragments';

export const GET_ADMIN_ORDERS_QUERY = `
  ${ADMIN_ORDER_FRAGMENT}
  query GetAdminOrders($first: Int, $after: String, $query: String) {
    orders(first: $first, after: $after, query: $query) {
      edges {
        cursor
        node {
          ...AdminOrderFragment
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
