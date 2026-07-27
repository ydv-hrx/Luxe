import 'server-only';
import { ADMIN_MEDIA_FRAGMENT } from './fragments';

export const GET_ADMIN_FILES_QUERY = `
  ${ADMIN_MEDIA_FRAGMENT}
  query GetAdminFiles($first: Int) {
    files(first: $first) {
      edges {
        node {
          ...AdminMediaFragment
        }
      }
    }
  }
`;
