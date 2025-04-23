import test, { expect } from "playwright/test";

test('Check user can view home page', async ({ page }) => {
    await page.goto('https://www.easemytrip.com/');
    
    await expect(page).toHaveTitle("EaseMyTrip.com - Book Flights, Hotels, Holidays, Bus & Train Tickets");

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

})