import 'server-only';
import { ADMIN_METAFIELD_FRAGMENT } from './fragments';

export const GET_ADMIN_BANNERS_QUERY = `
  ${ADMIN_METAFIELD_FRAGMENT}
  query GetAdminBanners {
    shop {
      metafield(namespace: "luxora_cms", key: "banners") {
        ...AdminMetafieldFragment
      }
    }
  }
`;
