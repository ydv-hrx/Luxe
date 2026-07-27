import 'server-only';
import { ADMIN_CUSTOMER_FRAGMENT } from './fragments';

export const GET_ADMIN_CUSTOMERS_QUERY = `
  ${ADMIN_CUSTOMER_FRAGMENT}
  query GetAdminCustomers($first: Int, $after: String, $query: String) {
    customers(first: $first, after: $after, query: $query) {
      edges {
        cursor
        node {
          ...AdminCustomerFragment
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
