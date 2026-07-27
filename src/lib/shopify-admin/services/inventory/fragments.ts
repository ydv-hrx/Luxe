import 'server-only';

export const ADMIN_INVENTORY_FRAGMENT = `
  fragment AdminInventoryFragment on InventoryItem {
    id
    sku
    tracked
    updatedAt
    inventoryLevels(first: 10) {
      edges {
        node {
          id
          quantities(names: ["available", "on_hand", "committed"]) {
            name
            quantity
          }
        }
      }
    }
  }
`;
