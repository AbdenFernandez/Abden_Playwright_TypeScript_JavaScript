import test, { expect } from "playwright/test";

test('Github Title Visibility', async ({ page }) => {
    await page.goto('https://github.com/aryan1403');
    await expect(page).toHaveTitle("aryan1403 (Aaryan) · GitHub");
})

test('Navigate to Repositories and verify user is on repositories page', async ({ page }) => {
    await page.goto('https://github.com/aryan1403');
    await expect(page).toHaveTitle("aryan1403 (Aaryan) · GitHub");
    
    await page.locator("//a[@data-tab-item='repositories']").first().click();
    await expect(page).toHaveTitle("aryan1403 (aryan1403) / Repositories · GitHub");
    
    const repo=page.getByText("Playwright_UST");
    await expect(repo).toBeVisible();

    await repo.click();

    await expect(page).toHaveTitle("GitHub - aryan1403/Playwright_UST");

})

test('verify user is on login page after clicking on follow', async ({ page }) => {
    await page.goto('https://github.com/aryan1403');
    await expect(page).toHaveTitle("aryan1403 (Aaryan) · GitHub");
    
    await page.locator("//a[@class='btn btn-block']").click();
    await expect(page).toHaveTitle("Sign in to GitHub · GitHub");
    await expect(page.getByText("Username or email address")).toBeVisible();
})

test('Verify user is on insights page of a particular', async ({ page }) => {
    await page.goto('https://github.com/aryan1403');
    await expect(page).toHaveTitle("aryan1403 (Aaryan) · GitHub");
    
    await page.locator("//a[@data-tab-item='repositories']").first().click();
    await expect(page).toHaveTitle("aryan1403 (aryan1403) / Repositories · GitHub");
    
    const repo=page.getByText("Playwright_UST");
    await expect(repo).toBeVisible();

    await repo.click();
    await expect(page).toHaveTitle("GitHub - aryan1403/Playwright_UST");

    const insights=page.locator("//span[@data-content='Insights']");
    await expect(insights).toBeVisible();
    await insights.click();
    await expect(page.getByText("Dependency graph")).toBeVisible();

})

test('Navigate to Projects and verify user is on Projects page', async ({ page }) => {
    await page.goto('https://github.com/aryan1403');
    await expect(page).toHaveTitle("aryan1403 (Aaryan) · GitHub");
    
    await page.locator("//a[@data-tab-item='projects']").first().click();
    await expect(page).toHaveTitle("aryan1403 (Aaryan) / Projects · GitHub");
    
    const repo=page.locator('.blankslate-heading');
    await expect(repo).toContainText("There aren't any projects yet");

})