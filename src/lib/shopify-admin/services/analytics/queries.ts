import 'server-only';

export const GET_ADMIN_ANALYTICS_QUERY = `
  query GetAdminAnalytics {
    orders(first: 100) {
      edges {
        node {
          id
          totalPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
