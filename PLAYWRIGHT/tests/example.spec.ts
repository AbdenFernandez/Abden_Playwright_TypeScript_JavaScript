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

test('Playright Docs page search', async ({ page }) => {
  
  test.slow(); // triples the timeout --> 1000ms x 3
  await page.goto('https://typescriptlang.org/');
  
  const getStarted = page.getByText('Try Typescript Now');
  await expect(getStarted).toBeVisible();
  await getStarted.click();

  const search = page.locator(".ds-input");
  await expect(search).toBeVisible();
  await search.fill('Install');
  await expect(search).toBeVisible();
  await page.waitForTimeout(2000);
  await search.press('Enter');
  await page.waitForTimeout(2000);
  await expect(page.locator("//h1[text()='ASP.NET Core']")).toContainText("ASP.NET Core");

})