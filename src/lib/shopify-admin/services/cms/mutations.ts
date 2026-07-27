import 'server-only';
import { ADMIN_METAFIELD_FRAGMENT } from './fragments';

export const SAVE_ADMIN_BANNERS_MUTATION = `
  ${ADMIN_METAFIELD_FRAGMENT}
  mutation SaveAdminBanners($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        ...AdminMetafieldFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;
