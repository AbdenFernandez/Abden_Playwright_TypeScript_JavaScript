import { test, expect } from './myfixture';

test.beforeEach(async ({ todoPage }) => {
  await todoPage.goto();

})


test('has title', async ({ page, browserName, todoPage }) => {
  await page.goto('https://playwright.dev/');
  await todoPage.addTodo('item 1');

  if(browserName === 'chromium') {

  }

  await expect(page).toHaveTitle(/Playwright/);
});