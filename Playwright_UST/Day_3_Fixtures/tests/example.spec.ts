import { test, expect } from '@playwright/test';
/*
test.beforeEach(async ({ TodoPage }) => {
  //await TodoPage.
})*/

test.describe.configure({ mode: 'parallel' }) // serial

// built in fixtures --> page, context, browser, browserName, request
test('has title', async ({ page, browserName }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('has title1', async ({ page, browserName }) => {
  await page.goto('https://playwright.dev/');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('has title2', async ({ page, browserName }) => {
  await page.goto('https://playwright.dev/');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});