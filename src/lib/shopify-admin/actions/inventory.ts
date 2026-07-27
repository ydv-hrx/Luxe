'use server';

import { ActionResult, AdminInventoryItem } from '../types';
import { inventoryAdjustSchema, InventoryAdjustInput } from '../validation';
import { inventoryAdminService } from '../services/inventory/service';

export async function getAdminInventoryAction(
  first = 25,
  after?: string
): Promise<ActionResult<{ inventoryItems: AdminInventoryItem[]; pageInfo: unknown }>> {
  try {
    const data = await inventoryAdminService.getInventory(first, after);
    return { success: true, data };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to fetch inventory items',
      code: (err as { code?: string })?.code || 'GET_INVENTORY_ERROR',
    };
  }
}

export async function adjustAdminInventoryAction(rawInput: InventoryAdjustInput): Promise<ActionResult<boolean>> {
  try {
    const validated = inventoryAdjustSchema.parse(rawInput);
    const success = await inventoryAdminService.adjustInventory(validated);
    return { success: true, data: success };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to adjust inventory',
      code: (err as { code?: string })?.code || 'ADJUST_INVENTORY_ERROR',
    };
  }
}
