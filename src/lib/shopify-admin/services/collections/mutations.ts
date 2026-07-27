import 'server-only';
import { ADMIN_COLLECTION_FRAGMENT } from './fragments';

export const CREATE_ADMIN_COLLECTION_MUTATION = `
  ${ADMIN_COLLECTION_FRAGMENT}
  mutation CreateAdminCollection($input: CollectionInput!) {
    collectionCreate(input: $input) {
      collection {
        ...AdminCollectionFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const DELETE_ADMIN_COLLECTION_MUTATION = `
  mutation DeleteAdminCollection($input: CollectionDeleteInput!) {
    collectionDelete(input: $input) {
      deletedCollectionId
      userErrors {
        field
        message
      }
    }
  }
`;
