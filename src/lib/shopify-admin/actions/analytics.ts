'use server';

import { ActionResult, AdminAnalyticsSummary } from '../types';
import { analyticsFilterSchema, AnalyticsFilterInput } from '../validation';
import { analyticsAdminService } from '../services/analytics/service';

export async function getAdminAnalyticsSummaryAction(rawInput?: AnalyticsFilterInput): Promise<ActionResult<AdminAnalyticsSummary>> {
  try {
    const validated = analyticsFilterSchema.parse(rawInput || { period: '30d' });
    const summary = await analyticsAdminService.getAnalyticsSummary(validated.period);
    return { success: true, data: summary };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to fetch analytics summary',
      code: (err as { code?: string })?.code || 'GET_ANALYTICS_ERROR',
    };
  }
}
