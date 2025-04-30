import { test, expect } from './bestSellersFixture';

test.describe.configure({ mode: 'parallel' });

test.describe('Best Sellers Page Tests', () => {
  test.beforeEach(async ({ bestSellersPage }) => {
    await bestSellersPage.navigate();
  });

  [
    { searchKeyword: 'Laptop' },
    { searchKeyword: 'Mobile' },
    { searchKeyword: 'Camera' },
  ].forEach(({ searchKeyword }) => {
    test(`verify and search results for "${searchKeyword}"`, async ({ bestSellersPage }) => {
      await bestSellersPage.searchProduct(searchKeyword);
      await expect(bestSellersPage.products.first()).toBeVisible();
    });
  });

  test('Verify Page Title', async ({ bestSellersPage }) => {
    await bestSellersPage.verifyPageTitleHasTitle("Amazon.in Bestsellers: The most popular items on Amazon");
  });

  test('Verify Categories Are Displayed', async ({ bestSellersPage }) => {
    await bestSellersPage.verifyCategoriesDisplayed();
  });

  [
    { catKey: 'Electronics' },
    { catKey: 'Books' },
  ].forEach(({ catKey }) => {
    test(`Verify particular category "${catKey}" is displayed`, async ({ bestSellersPage }) => {
      await bestSellersPage.verifyCategoriesDisplayed();
      await bestSellersPage.verifyHasCategories(catKey);
    });
  });

  test("verify user can navigate each departement", async ({ bestSellersPage }) => {
    setTimeout(async () => {
        await bestSellersPage.validateEachDepartmentNavigateCorrectPage();
    }, 60000);
})

  test('Verify Best Sellers Header Exists', async ({ bestSellersPage }) => {
    await bestSellersPage.verifyHasHeader('Bestsellers');
  });

  test('Verify Product Listings Are Displayed', async ({ bestSellersPage }) => {
    await bestSellersPage.verifyProductsDisplayed();
  });

  test('Verify Clicking a Product Opens Product Page', async ({ bestSellersPage }) => {
    await bestSellersPage.userClicksAProduct();
    await expect(bestSellersPage.addToCartButton.first()).toBeVisible();
  });

  test('Verify Navigation to a Different Category', async ({ bestSellersPage }) => {
    await bestSellersPage.verifyCategoriesDisplayed();
    await bestSellersPage.clickCategory('Books');
    await expect(bestSellersPage.verifyCategoriesDisplayed).toBeTruthy();
    await bestSellersPage.verifyHasBooksHeader('Bestsellers in Books');
  });

  test('Verify Sorting/Filtering Options', async ({ bestSellersPage }) => {
    await bestSellersPage.searchProduct("camera");
    await expect(bestSellersPage.products.first()).toBeVisible();
    await bestSellersPage.applySortOption('Price: Low to High');
  });

  test('Verify Pagination', async ({ bestSellersPage }) => {
    await bestSellersPage.verifyCategoriesDisplayed();
    await bestSellersPage.clickCategory('Books');
    await expect(bestSellersPage.verifyCategoriesDisplayed).toBeTruthy();
    await bestSellersPage.goToNextPage();
  });

  test('Verify Add to Cart from Best Sellers Page', async ({ bestSellersPage }) => {
    await bestSellersPage.userClicksAProduct();
    await expect(bestSellersPage.addToCartButton.first()).toBeVisible();
    await bestSellersPage.addFirstProductToCart();
  });
});

[
    { pincode: "682001", expected: true },
    { pincode: "682002", expected: true },
].forEach(({pincode, expected}) => {
    test.only(`verify user can enter pincode ${pincode}`, async ({ bestSellersPage }) => {
        await bestSellersPage.userClickLocationBar();
        await bestSellersPage.userEnterPincode(pincode);
        await expect(await bestSellersPage.validatePincode()).toBe(expected);
    });
});


