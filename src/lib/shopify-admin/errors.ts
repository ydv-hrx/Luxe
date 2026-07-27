import 'server-only';

export class ShopifyAdminError extends Error {
  public readonly code: string;
  public readonly statusCode?: number;

  constructor(message: string, code = 'SHOPIFY_ADMIN_ERROR', statusCode?: number) {
    super(message);
    this.name = 'ShopifyAdminError';
    this.code = code;
    this.statusCode = statusCode;
  }
}

export class AuthenticationError extends ShopifyAdminError {
  constructor(message = 'Invalid or expired Shopify Admin API Access Token') {
    super(message, 'AUTHENTICATION_ERROR', 401);
    this.name = 'AuthenticationError';
  }
}

export class ConfigurationError extends ShopifyAdminError {
  constructor(message = 'Shopify Admin API configuration is invalid or incomplete') {
    super(message, 'CONFIGURATION_ERROR', 500);
    this.name = 'ConfigurationError';
  }
}

export class ValidationError extends ShopifyAdminError {
  public readonly errors?: Record<string, string[]>;

  constructor(message = 'Validation failed for request payload', errors?: Record<string, string[]>) {
    super(message, 'VALIDATION_ERROR', 400);
    this.name = 'ValidationError';
    this.errors = errors;
  }
}

export class RateLimitError extends ShopifyAdminError {
  public readonly retryAfterMs?: number;

  constructor(message = 'Shopify Admin API rate limit exceeded (THROTTLED)', retryAfterMs = 1000) {
    super(message, 'RATE_LIMIT_ERROR', 429);
    this.name = 'RateLimitError';
    this.retryAfterMs = retryAfterMs;
  }
}

export class NetworkError extends ShopifyAdminError {
  constructor(message = 'Network connection failed while reaching Shopify Admin API') {
    super(message, 'NETWORK_ERROR', 503);
    this.name = 'NetworkError';
  }
}

export class GraphQLError extends ShopifyAdminError {
  public readonly graphQLErrors: { message: string; locations?: unknown[]; path?: string[] }[];

  constructor(
    message: string,
    graphQLErrors: { message: string; locations?: unknown[]; path?: string[] }[] = []
  ) {
    super(message, 'GRAPHQL_ERROR', 200);
    this.name = 'GraphQLError';
    this.graphQLErrors = graphQLErrors;
  }
}

export class UnknownError extends ShopifyAdminError {
  constructor(message = 'An unexpected error occurred in Shopify Admin service') {
    super(message, 'UNKNOWN_ERROR', 500);
    this.name = 'UnknownError';
  }
}

/**
 * Normalizes raw GraphQL user errors into a single error string
 */
export function normalizeShopifyUserErrors(
  userErrors?: { field?: string[]; message: string }[]
): string | null {
  if (!userErrors || userErrors.length === 0) return null;
  return userErrors.map((err) => (err.field ? `[${err.field.join('.')}] ${err.message}` : err.message)).join('; ');
}
