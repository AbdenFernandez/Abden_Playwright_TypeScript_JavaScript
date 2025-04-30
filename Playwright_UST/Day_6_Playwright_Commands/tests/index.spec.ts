import { test, expect } from '@playwright/test';
test.only('Test with predefined time', async ({ page }) => {
  await page.goto('./');
  await page.pause();
})

/* test.describe('Clock and Alert Tests', () => {
  test('Test with predefined time', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/Playwright_UST/Day_6_Playwright_Commands/src/index.html');
    await page.evaluate(() => {
      const fixedDate = new Date('2024-02-02T10:00:00');
      Date.now = () => fixedDate.getTime();
    });
    await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:00 AM');
    await page.evaluate(() => {
      const fixedDate = new Date('2024-02-02T11:30:00');
      Date.now = () => fixedDate.getTime();
    });
    await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 11:30:00 AM');
  });

  test('Test alert, confirm, and prompt buttons', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/Playwright_UST/Day_6_Playwright_Commands/src/index.html');
    page.on('dialog', async (dialog) => {
      if (dialog.type() === 'alert') {
        expect(dialog.message()).toBe('This is an alert!');
        await dialog.accept();
      } else if (dialog.type() === 'confirm') {
        expect(dialog.message()).toBe('Do you confirm this action?');
        await dialog.accept();
      } else if (dialog.type() === 'prompt') {
        expect(dialog.message()).toBe('Please enter your name:');
        await dialog.accept('Playwright User');
      }
    });
    await page.getByTestId('alert-button').click();
    await page.getByTestId('confirm-button').click();
    await page.getByTestId('prompt-button').click();
  });
}); */