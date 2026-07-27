import 'server-only';

export const ADMIN_MENU_FRAGMENT = `
  fragment AdminMenuFragment on Menu {
    id
    title
    handle
    items {
      id
      title
      url
      items {
        id
        title
        url
      }
    }
  }
`;
