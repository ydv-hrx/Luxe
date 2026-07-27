import 'server-only';
import { ADMIN_ORDER_FRAGMENT } from './fragments';

export const CLOSE_ADMIN_ORDER_MUTATION = `
  ${ADMIN_ORDER_FRAGMENT}
  mutation CloseAdminOrder($input: OrderCloseInput!) {
    orderClose(input: $input) {
      order {
        ...AdminOrderFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;
