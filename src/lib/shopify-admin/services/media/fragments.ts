import 'server-only';

export const ADMIN_MEDIA_FRAGMENT = `
  fragment AdminMediaFragment on MediaImage {
    id
    mediaContentType
    image {
      url
      altText
    }
  }
`;
