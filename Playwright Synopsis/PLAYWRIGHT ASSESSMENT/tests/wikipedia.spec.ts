import test, { expect } from "playwright/test";

test('Verify user is on Wikipedia search page', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await expect(page).toHaveTitle("Wikipedia");
    
})

test('Verify user can search a particular article', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await expect(page).toHaveTitle("Wikipedia");

    const search = page.locator("#searchInput").first();
    await search.fill("Playwright (software)");
    await search.press('Enter');
    await expect(page).toHaveTitle("Playwright (software) - Wikipedia");
    await expect(page.locator(".mw-page-title-main").first()).toBeVisible();

})

test('Verify user is on login page', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await expect(page).toHaveTitle("Wikipedia");
    const search = page.locator("#searchInput").first();
    await search.fill("Playwright (software)");
    await search.press('Enter');
    await expect(page).toHaveTitle("Playwright (software) - Wikipedia");

    const login = page.locator("//span[text()='Log in']").first();
    await expect(login).toBeVisible();
    await login.click();
    
    const username = page.getByPlaceholder("Enter your username");
    await expect(username).toBeVisible();
})


test('Verify user can click on particluar appearance checkbox', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await expect(page).toHaveTitle("Wikipedia");
    const search = page.locator("#searchInput").first();
    await search.fill("Playwright (software)");
    await search.press('Enter');
    await expect(page).toHaveTitle("Playwright (software) - Wikipedia");

    const checkbox = page.locator("//span[text()='Small']").first();
    await expect(checkbox).toBeVisible();
    await checkbox.click();
})

test('Verify user can navigate to external links', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await expect(page).toHaveTitle("Wikipedia");
    const search = page.locator("#searchInput").first();
    await search.fill("Playwright (software)");
    await search.press('Enter');
    await expect(page).toHaveTitle("Playwright (software) - Wikipedia");

    const externalLink = page.locator("#toc-External_links").first();
    await expect(externalLink).toBeVisible();
    await externalLink.click();
})