import test, { expect } from "playwright/test";

test('Check user can view home page', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/');
    
    await expect(page).toHaveTitle("EaseMyTrip.com - Book Flights, Hotels, Holidays, Bus & Train Tickets");

})

test('End to end test for cart functionality', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle("Swag Labs");
    const username = page.locator("#user-name");
    await username.fill("standard_user");
    const password = page.locator("#password");
    await password.fill("secret_sauce");
    const login = page.locator("#login-button");
    await login.click();
    const firstItem= page.locator("//div[@class='inventory_item_name ']").first();
    await firstItem.click();
    const addToCart = page.locator("#add-to-cart");
    await addToCart.click();
    //I will then verify cart quantity is equals to one
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

    const fromInput = page.locator("#a_FromSector_show");
    await expect(fromInput).toBeVisible();
    await fromInput.fill("Delhi");
    
    const fromInputValue = page.locator("//span[@class='flsctrhead']").first();
    await expect(fromInputValue).toBeVisible();
    fromInputValue.click();

    const toInput = page.locator("#a_Editbox13_show");
    await expect(toInput).toBeVisible();
    await toInput.fill("Banglore");

    const toInputValue = page.locator("//span[contains(text(),'BLR')]"); 
    await expect(toInputValue).toBeVisible();
    toInputValue.click();   
})
