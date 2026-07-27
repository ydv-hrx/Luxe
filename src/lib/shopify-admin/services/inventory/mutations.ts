import 'server-only';

export const ADJUST_ADMIN_INVENTORY_MUTATION = `
  mutation AdjustAdminInventory($input: InventoryAdjustQuantitiesInput!) {
    inventoryAdjustQuantities(input: $input) {
      inventoryAdjustmentGroup {
        id
        reason
      }
      userErrors {
        field
        message
      }
    }
  }
`;
