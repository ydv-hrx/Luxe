import 'server-only';

export const ADMIN_PRODUCT_FRAGMENT = `
  fragment AdminProductFragment on Product {
    id
    title
    handle
    description
    vendor
    productType
    status
    tags
    totalInventory
    createdAt
    updatedAt
    featuredImage {
      id
      url
      altText
    }
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
  }
`;
