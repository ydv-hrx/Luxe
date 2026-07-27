'use server';

import { ActionResult, AdminCollection } from '../types';
import { collectionInputSchema, CollectionInput } from '../validation';
import { collectionsAdminService } from '../services/collections/service';

export async function getAdminCollectionsAction(
  first = 25,
  after?: string,
  query?: string
): Promise<ActionResult<{ collections: AdminCollection[]; pageInfo: unknown }>> {
  try {
    const data = await collectionsAdminService.getCollections(first, after, query);
    return { success: true, data };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to fetch collections',
      code: (err as { code?: string })?.code || 'GET_COLLECTIONS_ERROR',
    };
  }
}

export async function createAdminCollectionAction(rawInput: CollectionInput): Promise<ActionResult<AdminCollection>> {
  try {
    const validated = collectionInputSchema.parse(rawInput);
    const collection = await collectionsAdminService.createCollection(validated);
    return { success: true, data: collection };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to create collection',
      code: (err as { code?: string })?.code || 'CREATE_COLLECTION_ERROR',
    };
  }
}

export async function deleteAdminCollectionAction(id: string): Promise<ActionResult<boolean>> {
  try {
    const deleted = await collectionsAdminService.deleteCollection(id);
    return { success: true, data: deleted };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to delete collection',
      code: (err as { code?: string })?.code || 'DELETE_COLLECTION_ERROR',
    };
  }
}
