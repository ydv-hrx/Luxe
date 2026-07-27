import 'server-only';
import { executeGraphQL } from '../../graphql';
import { GET_ADMIN_INVENTORY_QUERY } from './queries';
import { ADJUST_ADMIN_INVENTORY_MUTATION } from './mutations';
import { AdminInventoryItem } from '../../types';
import { parseConnection } from '../../pagination';
import { normalizeShopifyUserErrors, ValidationError } from '../../errors';
import { revalidateInventory } from '../../cache/revalidate';
import { CACHE_TAGS } from '../../constants';
import { InventoryAdjustInput } from '../../validation';

function transformShopifyAdminInventoryItem(node: any): AdminInventoryItem {
  const levelNode = node.inventoryLevels?.edges?.[0]?.node;
  const quantities = levelNode?.quantities || [];

  const getQty = (name: string) => {
    const q = quantities.find((it: { name: string; quantity: number }) => it.name === name);
    return q ? q.quantity : 0;
  };

  return {
    id: node.id,
    sku: node.sku || 'SKU-LX-000',
    available: getQty('available'),
    onHand: getQty('on_hand'),
    committed: getQty('committed'),
    productTitle: 'Luxora Essential Item',
    variantTitle: 'Default Variant',
    updatedAt: node.updatedAt,
  };
}

export class InventoryAdminService {
  async getInventory(first = 25, after?: string): Promise<{ inventoryItems: AdminInventoryItem[]; pageInfo: any }> {
    const data = await executeGraphQL<any>({
      query: GET_ADMIN_INVENTORY_QUERY,
      variables: { first, after },
      tags: [CACHE_TAGS.INVENTORY],
      revalidate: 30,
    });

    const parsed = parseConnection(data.inventoryItems, transformShopifyAdminInventoryItem);
    return { inventoryItems: parsed.items, pageInfo: parsed.pageInfo };
  }

  async adjustInventory(input: InventoryAdjustInput): Promise<boolean> {
    const data = await executeGraphQL<any>({
      query: ADJUST_ADMIN_INVENTORY_MUTATION,
      variables: {
        input: {
          reason: 'correction',
          name: 'available',
          changes: [
            {
              inventoryItemId: input.inventoryItemId,
              locationId: input.locationId,
              delta: input.availableDelta,
            },
          ],
        },
      },
    });

    const userErrors = data.inventoryAdjustQuantities?.userErrors;
    const errorMsg = normalizeShopifyUserErrors(userErrors);
    if (errorMsg) {
      throw new ValidationError(errorMsg);
    }

    revalidateInventory();
    return true;
  }
}

export const inventoryAdminService = new InventoryAdminService();
