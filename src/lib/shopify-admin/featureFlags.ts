import 'server-only';

export const ADMIN_FEATURE_FLAGS = {
  USE_SHOPIFY_ADMIN_API: true,
  ENABLE_LIVE_WEBHOOKS: true,
  ENABLE_ANALYTICS_QUERYING: true,
  ENABLE_INVENTORY_ADJUSTMENTS: true,
  ENABLE_CMS_METAFIELDS: true,
  ENABLE_MEDIA_UPLOADS: true,
} as const;

export type AdminFeatureFlagKey = keyof typeof ADMIN_FEATURE_FLAGS;

export function isFeatureEnabled(flag: AdminFeatureFlagKey): boolean {
  return ADMIN_FEATURE_FLAGS[flag] ?? false;
}
