import 'server-only';

export const ADMIN_METAFIELD_FRAGMENT = `
  fragment AdminMetafieldFragment on Metafield {
    id
    namespace
    key
    value
    type
    updatedAt
  }
`;
