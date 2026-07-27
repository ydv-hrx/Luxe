'use server';

import { ActionResult, AdminNavigationMenu } from '../types';
import { navigationInputSchema, NavigationInput } from '../validation';
import { navigationAdminService } from '../services/navigation/service';

export async function getAdminNavigationMenusAction(): Promise<ActionResult<AdminNavigationMenu[]>> {
  try {
    const menus = await navigationAdminService.getMenus();
    return { success: true, data: menus };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to fetch navigation menus',
      code: (err as { code?: string })?.code || 'GET_NAVIGATION_ERROR',
    };
  }
}

export async function saveAdminNavigationMenuAction(rawInput: NavigationInput): Promise<ActionResult<AdminNavigationMenu>> {
  try {
    const validated = navigationInputSchema.parse(rawInput);
    const menu = await navigationAdminService.saveMenu(validated);
    return { success: true, data: menu };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to save navigation menu',
      code: (err as { code?: string })?.code || 'SAVE_NAVIGATION_ERROR',
    };
  }
}
