import 'server-only';
import { ADMIN_COLLECTION_FRAGMENT } from './fragments';

export const GET_ADMIN_COLLECTIONS_QUERY = `
  ${ADMIN_COLLECTION_FRAGMENT}
  query GetAdminCollections($first: Int, $after: String, $query: String) {
    collections(first: $first, after: $after, query: $query) {
      edges {
        cursor
        node {
          ...AdminCollectionFragment
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
