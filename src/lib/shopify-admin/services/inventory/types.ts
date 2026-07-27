import 'server-only';
import { AdminInventoryItem } from '../../types';

export type InventoryServiceResult = AdminInventoryItem;
export type InventoryListResult = { inventoryItems: AdminInventoryItem[]; pageInfo: { hasNextPage: boolean; endCursor: string | null } };
