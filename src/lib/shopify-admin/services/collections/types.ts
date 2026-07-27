import 'server-only';
import { AdminCollection } from '../../types';

export type CollectionServiceResult = AdminCollection;
export type CollectionsListResult = { collections: AdminCollection[]; pageInfo: { hasNextPage: boolean; endCursor: string | null } };
