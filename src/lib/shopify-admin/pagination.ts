import 'server-only';
import { Connection, Edge, PageInfo } from './types';

/**
 * Parses raw GraphQL Connection edges into clean domain items with page info
 */
export function parseConnection<TRawNode, TDomain>(
  connection: { edges?: { cursor: string; node: TRawNode }[]; pageInfo?: PageInfo } | undefined,
  transform: (node: TRawNode) => TDomain
): { items: TDomain[]; pageInfo: PageInfo } {
  const defaultPageInfo: PageInfo = {
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: null,
    endCursor: null,
  };

  if (!connection || !connection.edges) {
    return { items: [], pageInfo: defaultPageInfo };
  }

  const items = connection.edges.map((edge) => transform(edge.node));
  const pageInfo = connection.pageInfo || defaultPageInfo;

  return { items, pageInfo };
}

/**
 * Returns the end cursor from page info if next page exists
 */
export function getNextCursor(pageInfo?: PageInfo): string | null {
  return pageInfo?.hasNextPage ? pageInfo.endCursor : null;
}

/**
 * Returns the start cursor from page info if previous page exists
 */
export function getPreviousCursor(pageInfo?: PageInfo): string | null {
  return pageInfo?.hasPreviousPage ? pageInfo.startCursor : null;
}

/**
 * Utility to construct a standardized Connection object from nodes array
 */
export function buildConnection<T>(nodes: T[], hasNext = false, hasPrevious = false): Connection<T> {
  const edges: Edge<T>[] = nodes.map((node, index) => ({
    cursor: `cursor-${index}`,
    node,
  }));

  return {
    edges,
    nodes,
    pageInfo: {
      hasNextPage: hasNext,
      hasPreviousPage: hasPrevious,
      startCursor: edges[0]?.cursor || null,
      endCursor: edges[edges.length - 1]?.cursor || null,
    },
    totalCount: nodes.length,
  };
}
