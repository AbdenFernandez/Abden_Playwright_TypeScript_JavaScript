import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
  await page.goto('https://github.com/');
  await expect(await page.locator('#dashboard')).toBeVisible();
});