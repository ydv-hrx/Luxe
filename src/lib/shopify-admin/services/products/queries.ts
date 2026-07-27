import 'server-only';
import { ADMIN_PRODUCT_FRAGMENT } from './fragments';

export const GET_ADMIN_PRODUCTS_QUERY = `
  ${ADMIN_PRODUCT_FRAGMENT}
  query GetAdminProducts($first: Int, $after: String, $query: String) {
    products(first: $first, after: $after, query: $query) {
      edges {
        cursor
        node {
          ...AdminProductFragment
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

export const GET_ADMIN_PRODUCT_BY_ID_QUERY = `
  ${ADMIN_PRODUCT_FRAGMENT}
  query GetAdminProductById($id: ID!) {
    product(id: $id) {
      ...AdminProductFragment
    }
  }
`;
