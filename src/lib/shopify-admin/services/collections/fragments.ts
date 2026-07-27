import 'server-only';

export const ADMIN_COLLECTION_FRAGMENT = `
  fragment AdminCollectionFragment on Collection {
    id
    title
    handle
    description
    updatedAt
    productsCount {
      count
    }
    image {
      id
      url
      altText
    }
  }
`;
