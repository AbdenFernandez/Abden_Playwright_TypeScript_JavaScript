import test, { expect } from "playwright/test";

test('Page Title', async ({ page }) => {
  //test.setTimeout(10000);
  await page.goto('https://typescriptlang.org/');

  await expect(page).toHaveTitle(/TypeScript: /);
  await expect(page).toHaveTitle("TypeScript: JavaScript With Syntax For Types.");
})

test('Click Try ts bin ', async ({ page }) => {
  
  // test.slow(); // triples the timeout --> 1000ms x 3
  await page.goto('https://typescriptlang.org/');
  
  const getStarted = page.getByText('Try Typescript Now');
  await expect(getStarted).toBeVisible();
  await getStarted.click();
})