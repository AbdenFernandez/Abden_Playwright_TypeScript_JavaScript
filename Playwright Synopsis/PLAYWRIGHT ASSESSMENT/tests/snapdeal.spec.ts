import test, { expect } from "playwright/test";

test('Verify user is on Snapdeal home page', async ({ page }) => {
    await page.goto('https://www.snapdeal.com/');
    await expect(page).toHaveTitle("Shop Online for Men, Women & Kids Clothing, Shoes, Home Decor Items");
})

test('Verify user can search a product', async ({ page }) => {
    await page.goto('https://www.snapdeal.com/');
    await expect(page).toHaveTitle("Shop Online for Men, Women & Kids Clothing, Shoes, Home Decor Items");

    const searchIp = page.locator("#inputValEnter");
    await expect(searchIp).toBeVisible();
    await searchIp.click();
    await searchIp.fill("Shoes for men");
    await searchIp.press('Enter');
    await searchIp.press('Enter');
    await expect(page.getByPlaceholder("Enter your pincode")).toBeVisible();
})
