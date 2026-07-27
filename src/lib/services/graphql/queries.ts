/**
 * Shopify Storefront GraphQL Query Definitions
 */

export const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    vendor
    productType
    tags
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 10) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    options {
      name
      values
    }
    variants(first: 50) {
      edges {
        node {
          id
          title
          sku
          availableForSale
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            url
            altText
          }
        }
      }
    }
    metafields(identifiers: [
      { namespace: "custom", key: "material" },
      { namespace: "custom", key: "care_guide" },
      { namespace: "custom", key: "craftsmanship" },
      { namespace: "custom", key: "shipping_info" },
      { namespace: "custom", key: "size_guide" }
    ]) {
      key
      value
    }
  }
`;

export const GET_PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      ...ProductFields
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_PRODUCTS_QUERY = `
  query GetProducts($first: Int = 20, $query: String, $sortKey: ProductSortKeys, $reverse: Boolean) {
    products(first: $first, query: $query, sortKey: $sortKey, reverse: $reverse) {
      edges {
        node {
          ...ProductFields
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_PRODUCT_RECOMMENDATIONS_QUERY = `
  query GetProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...ProductFields
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const PREDICTIVE_SEARCH_QUERY = `
  query PredictiveSearch($query: String!) {
    predictiveSearch(query: $query) {
      products {
        id
        handle
        title
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          edges {
            node {
              url
              altText
            }
          }
        }
      }
    }
  }
`;

export const GET_COLLECTIONS_QUERY = `
  query GetCollections($first: Int = 10) {
    collections(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          image {
            url
            altText
          }
          products(first: 250) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_COLLECTION_BY_HANDLE_QUERY = `
  query GetCollectionByHandle($handle: String!, $first: Int = 20) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      image {
        url
        altText
      }
      metafields(identifiers: [
        { namespace: "custom", key: "campaign_copy" },
        { namespace: "custom", key: "collection_story" }
      ]) {
        key
        value
      }
      products(first: $first) {
        edges {
          node {
            ...ProductFields
          }
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_METAOBJECT_QUERY = `
  query GetMetaobject($handle: String!, $type: String!) {
    metaobject(handle: { handle: $handle, type: $type }) {
      id
      handle
      type
      fields {
        key
        value
        reference {
          ... on MediaImage {
            image {
              url
              altText
            }
          }
        }
      }
    }
  }
`;
