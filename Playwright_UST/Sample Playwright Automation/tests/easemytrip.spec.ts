import test, { expect } from "playwright/test";

test('Check user can view home page', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/');

    await expect(page).toHaveTitle("EaseMyTrip.com - Book Flights, Hotels, Holidays, Bus & Train Tickets");

})

test('End to end test for cart functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle("Swag Labs");
    const username = page.locator("#user-name");
    await username.fill("standard_user");
    const password = page.locator("#password");
    await password.fill("secret_sauce");
    const login = page.locator("#login-button");
    await login.click();
    const firstItem = page.locator(".inventory_item_name").first();
    await firstItem.click();
    const addToCart = page.locator("#add-to-cart");
    await addToCart.click();
    //I will now verify cart quantity is equals to one
    const cartIcon = page.locator(".shopping_cart_badge");
    await expect(cartIcon).toBeVisible();
    const cartQuantity = await cartIcon.textContent();
    if (cartQuantity === "1") {
        console.log("Cart quantity is 1");
    }
    cartIcon.click();
    const checkoutBtn = page.locator("#checkout");
    await expect(checkoutBtn).toBeVisible();
    await checkoutBtn.click();
    await page.fill("#first-name", "John");
    await page.fill("#last-name", "Doe");
    await page.fill("#postal-code", "12345");
    await page.click("#continue");
    const finishBtn = page.locator("#finish");
    await expect(finishBtn).toBeVisible();
    await finishBtn.click();
    const orderConfirmation = page.locator(".complete-header");
    await expect(orderConfirmation).toBeVisible();
    const orderText = await orderConfirmation.textContent();
    await expect(orderText).toContain("Thank you for your order!");
    

})

test('Check user navigate to flights page', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/');
    const flights = page.locator("//span[text()='Flights']")
    await expect(flights).toBeVisible();
    await flights.click();
    await expect(page).toHaveTitle("Book Flight Tickets at Lowest Prices – Cheap Flights & Offers | EaseMyTrip");
    const from = page.locator("#pff");
    await expect(from).toBeVisible();
    await from.click();
    await page.fill("#a_FromSector_show", "Delhi");
    await page.locator("span.flsctrhead").first().click();
    await page.fill("#a_Editbox13_show", "Bengaluru");
    await page.waitForTimeout(2000);
    await page.locator("//span[contains(text(),'BLR')]").nth(1).click();
})




