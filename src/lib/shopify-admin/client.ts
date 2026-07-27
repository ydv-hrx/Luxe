import 'server-only';
import { shopifyAdminConfig } from './config';
import { SHOPIFY_ADMIN_HEADERS } from './constants';
import { AuthenticationError, ConfigurationError, NetworkError, RateLimitError, GraphQLError, UnknownError } from './errors';
import { shopifyLogger } from './logger';
import { withRetry } from './retry';

export interface AdminFetchOptions<TVariables> {
  query: string;
  variables?: TVariables;
  tags?: string[];
  revalidate?: number;
  operationName?: string;
}

/**
 * Server-Only Shopify Admin GraphQL Client with logger, retries, and cache tags
 */
export async function shopifyAdminFetch<TData, TVariables = Record<string, unknown>>(
  options: AdminFetchOptions<TVariables>
): Promise<TData> {
  const startTime = Date.now();
  const operationName = options.operationName || extractOperationName(options.query);

  if (!shopifyAdminConfig.isValid) {
    throw new ConfigurationError(
      'Shopify Admin configuration error: SHOPIFY_ADMIN_API_ACCESS_TOKEN is required for Admin GraphQL requests'
    );
  }

  const fetchRoutines = async (attempt: number): Promise<TData> => {
    const response = await fetch(shopifyAdminConfig.graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': SHOPIFY_ADMIN_HEADERS.CONTENT_TYPE,
        [SHOPIFY_ADMIN_HEADERS.ACCESS_TOKEN_HEADER]: shopifyAdminConfig.accessToken,
        'User-Agent': SHOPIFY_ADMIN_HEADERS.USER_AGENT,
      },
      body: JSON.stringify({
        query: options.query,
        variables: options.variables,
      }),
      next: {
        tags: options.tags,
        revalidate: options.revalidate,
      },
    }).catch((_err) => {
      throw new NetworkError('Failed to execute HTTP request to Shopify Admin API');
    });

    const durationMs = Date.now() - startTime;
    const requestId = response.headers.get('x-request-id') || undefined;

    if (response.status === 401) {
      shopifyLogger.logRequest({ operationName, durationMs, statusCode: 401, retryCount: attempt, requestId });
      throw new AuthenticationError();
    }

    if (response.status === 429) {
      shopifyLogger.logRequest({ operationName, durationMs, statusCode: 429, retryCount: attempt, requestId });
      throw new RateLimitError();
    }

    if (!response.ok) {
      shopifyLogger.logRequest({
        operationName,
        durationMs,
        statusCode: response.status,
        retryCount: attempt,
        requestId,
        error: `HTTP ${response.status} ${response.statusText}`,
      });
      throw new NetworkError(`Shopify Admin API returned status ${response.status}`);
    }

    const json = await response.json();

    if (json.errors && json.errors.length > 0) {
      const isThrottled = json.errors.some((e: { message?: string }) => e.message?.toLowerCase().includes('throttled'));

      shopifyLogger.logRequest({
        operationName,
        durationMs,
        statusCode: isThrottled ? 429 : 200,
        retryCount: attempt,
        requestId,
        error: json.errors[0].message,
      });

      if (isThrottled) {
        throw new RateLimitError();
      }

      throw new GraphQLError(json.errors[0].message, json.errors);
    }

    shopifyLogger.logRequest({ operationName, durationMs, statusCode: 200, retryCount: attempt, requestId });
    return json.data as TData;
  };

  try {
    const { result } = await withRetry(fetchRoutines);
    return result;
  } catch (err: unknown) {
    if (err instanceof AuthenticationError || err instanceof RateLimitError || err instanceof GraphQLError || err instanceof NetworkError) {
      throw err;
    }
    throw new UnknownError(err instanceof Error ? err.message : String(err));
  }
}

function extractOperationName(query: string): string {
  const match = query.match(/(query|mutation)\s+([A-Za-z0-9_]+)/);
  return match ? match[2] : 'ShopifyAdminQuery';
}
