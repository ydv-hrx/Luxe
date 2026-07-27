import 'server-only';

export const ADMIN_CUSTOMER_FRAGMENT = `
  fragment AdminCustomerFragment on Customer {
    id
    firstName
    lastName
    email
    phone
    createdAt
    ordersCount
    totalSpentV2 {
      amount
      currencyCode
    }
  }
`;
