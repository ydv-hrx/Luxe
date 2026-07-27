import 'server-only';
import { executeGraphQL } from '../../graphql';
import { GET_ADMIN_COLLECTIONS_QUERY } from './queries';
import { CREATE_ADMIN_COLLECTION_MUTATION, DELETE_ADMIN_COLLECTION_MUTATION } from './mutations';
import { AdminCollection } from '../../types';
import { parseConnection } from '../../pagination';
import { normalizeShopifyUserErrors, ValidationError } from '../../errors';
import { revalidateCollections } from '../../cache/revalidate';
import { CACHE_TAGS } from '../../constants';
import { CollectionInput } from '../../validation';

function transformShopifyAdminCollection(node: any): AdminCollection {
  return {
    id: node.id,
    title: node.title,
    handle: node.handle,
    description: node.description || '',
    productsCount: node.productsCount?.count || 0,
    image: node.image
      ? { id: node.image.id, url: node.image.url, altText: node.image.altText || node.title }
      : undefined,
    updatedAt: node.updatedAt,
  };
}

export class CollectionsAdminService {
  async getCollections(first = 25, after?: string, query?: string): Promise<{ collections: AdminCollection[]; pageInfo: any }> {
    const data = await executeGraphQL<any>({
      query: GET_ADMIN_COLLECTIONS_QUERY,
      variables: { first, after, query },
      tags: [CACHE_TAGS.COLLECTIONS],
      revalidate: 60,
    });

    const parsed = parseConnection(data.collections, transformShopifyAdminCollection);
    return { collections: parsed.items, pageInfo: parsed.pageInfo };
  }

  async createCollection(input: CollectionInput): Promise<AdminCollection> {
    const data = await executeGraphQL<any>({
      query: CREATE_ADMIN_COLLECTION_MUTATION,
      variables: { input },
    });

    const userErrors = data.collectionCreate?.userErrors;
    const errorMsg = normalizeShopifyUserErrors(userErrors);
    if (errorMsg) {
      throw new ValidationError(errorMsg);
    }

    const created = transformShopifyAdminCollection(data.collectionCreate.collection);
    revalidateCollections(created.id);
    return created;
  }

  async deleteCollection(id: string): Promise<boolean> {
    const data = await executeGraphQL<any>({
      query: DELETE_ADMIN_COLLECTION_MUTATION,
      variables: { input: { id } },
    });

    const userErrors = data.collectionDelete?.userErrors;
    const errorMsg = normalizeShopifyUserErrors(userErrors);
    if (errorMsg) {
      throw new ValidationError(errorMsg);
    }

    revalidateCollections(id);
    return true;
  }
}

export const collectionsAdminService = new CollectionsAdminService();
