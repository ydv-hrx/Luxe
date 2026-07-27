import 'server-only';

export const ADMIN_ORDER_FRAGMENT = `
  fragment AdminOrderFragment on Order {
    id
    name
    orderNumber
    processedAt
    displayFulfillmentStatus
    displayFinancialStatus
    totalPriceSet {
      shopMoney {
        amount
        currencyCode
      }
    }
    customer {
      id
      firstName
      lastName
      email
    }
    lineItems(first: 50) {
      edges {
        node {
          id
          title
          quantity
        }
      }
    }
  }
`;
