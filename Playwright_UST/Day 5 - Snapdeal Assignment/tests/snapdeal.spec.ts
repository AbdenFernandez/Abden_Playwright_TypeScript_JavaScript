import { test, expect } from "./Snapdeal.fixture";


test.describe.configure({ mode: 'parallel' });


test.describe('Best Sellers Page Tests', () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.navigate();
    })

    test('Verify user is on Snapdeal home page', async ({ homePage }) => {
        await homePage.verifyUserIsOnSnapdealHomePage();
    })



    test('Verify user can search a product', async ({ homePage, productsPage,productDetailsPage }) => {
        await homePage.verifyUserIsOnSnapdealHomePage();
        await homePage.userSearchForAProduct("Shoes for");
        await productsPage.verifyUserIsOnSnapdealProductsPage();

        const productDetailsTab = await productsPage.userSelectProduct();
        await productDetailsTab.waitForLoadState();
        await productDetailsPage.verifyUserIsOnSnapdealProductDetailsPage(); // Implement this method

    })

    test.only("Validate user navigate to the product Details", async ({ homePage, productsPage, productDetailsPage }) => {
        await homePage.verifyUserIsOnSnapdealHomePage();
        await homePage.userSearchForAProduct("Watch");
        await productsPage.verifyUserIsOnSnapdealProductsPage();
        await productsPage.userSelectProduct();
        await productDetailsPage.verifyUserIsOnSnapdealProductDetailsPage();



    });
/*
test("Validate user navigate to the product Details", async ({ page }) => {
    await page.goto("https://www.snapdeal.com/");
    const searchBar = await page.locator('#inputValEnter');
    //verify user on homepage
    await expect(searchBar).toBeVisible();
    //search product
    await searchBar.fill("watch");
    await searchBar.press('Enter');
    await searchBar.press('Enter');
    await expect(page.locator('#view-more-parent-cat')).toBeVisible();
})

test("verify user navigate seller page enter Invalid GST Number", async ({ page }) => {
    await page.goto("https://www.snapdeal.com/");
    const GSTNumber = "123456789012345";
    await page.getByText("Sell On Snapdeal").first().click();
    await expect(page).toHaveTitle("Sell Products Online on Snapdeal.com – Sellers on Snapdeal");
    await page.locator("[id='j_id0:j_id35:j_id36:frmGST:sdGstn']").fill(GSTNumber);
    await page.locator('[value="Register Now"]').click();
    const errorMessage = await page.locator('//span[@id="gst-error"]/span').textContent();
    console.log(errorMessage);
    await expect(errorMessage).toContain("Please enter a valid GSTn Format");


    await page.waitForTimeout(10000)
})


test("Validate user navigate help center page", async ({ page }) => {
    await page.goto("https://www.snapdeal.com/");
    await page.locator("//a[text()='Help Center']").click();

    //verify user on help center page
    await expect(page.getByPlaceholder("Please type your query here. e.g. I want to track my order.")).toBeVisible();

    await page.locator("//div[@class='col-xs-3 logoWidth title lfloat']").click();
})


test("Verify user can Search Tshit and Choose the color Beige", async ({ page }) => {
    await page.goto("https://www.snapdeal.com/");
    const searchBar = await page.locator('#inputValEnter');
    await expect(searchBar).toBeVisible();
    await searchBar.fill("Tshirt");
    await searchBar.press('Enter');
    await searchBar.press('Enter');
    await page.waitForTimeout(2000);
    await page.locator('//label[@for="Color_s-Beige"]').click();
    await expect(await page.locator('//input[@value="Beige"]')).toBeChecked();
})

test("Verify user can enter valid pincode", async ({ page }) => {
    await page.goto("https://www.snapdeal.com/");
    const pincode = "641402";
    const pincodeInput = await page.locator("#pincode-check-nba");
    await pincodeInput.fill(pincode);
    await page.locator("//button[@class='btn btn-theme-secondary pincodeNbaSubmit button--reject nextBestActionTrack col-xs-16']").click();
    const pincodeText = await page.locator(".pincodeNbaText").textContent();
    await expect(pincodeText).toContain(pincode);

})

 */