import 'server-only';
import { ADMIN_CUSTOMER_FRAGMENT } from './fragments';

export const UPDATE_ADMIN_CUSTOMER_MUTATION = `
  ${ADMIN_CUSTOMER_FRAGMENT}
  mutation UpdateAdminCustomer($input: CustomerInput!) {
    customerUpdate(input: $input) {
      customer {
        ...AdminCustomerFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;
