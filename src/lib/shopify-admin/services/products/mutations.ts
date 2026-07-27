import 'server-only';
import { ADMIN_PRODUCT_FRAGMENT } from './fragments';

export const CREATE_ADMIN_PRODUCT_MUTATION = `
  ${ADMIN_PRODUCT_FRAGMENT}
  mutation CreateAdminProduct($input: ProductInput!) {
    productCreate(input: $input) {
      product {
        ...AdminProductFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const UPDATE_ADMIN_PRODUCT_MUTATION = `
  ${ADMIN_PRODUCT_FRAGMENT}
  mutation UpdateAdminProduct($input: ProductInput!) {
    productUpdate(input: $input) {
      product {
        ...AdminProductFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const DELETE_ADMIN_PRODUCT_MUTATION = `
  mutation DeleteAdminProduct($input: ProductDeleteInput!) {
    productDelete(input: $input) {
      deletedProductId
      userErrors {
        field
        message
      }
    }
  }
`;
