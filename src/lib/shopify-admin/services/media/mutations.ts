import 'server-only';
import { ADMIN_MEDIA_FRAGMENT } from './fragments';

export const UPLOAD_ADMIN_FILE_MUTATION = `
  ${ADMIN_MEDIA_FRAGMENT}
  mutation UploadAdminFile($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        ...AdminMediaFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;
