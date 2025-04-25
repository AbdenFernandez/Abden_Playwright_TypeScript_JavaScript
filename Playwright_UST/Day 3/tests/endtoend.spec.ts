import { test, expect } from './saucedemo.fixtures';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
});

test.only('End to end test for cart functionality', async ({ productsPage, productDetailsPage }) => {
  await productsPage.clickFirstItem();

  await productDetailsPage.addToCart();

  const cartQuantity = await productDetailsPage.getCartQuantity();
  expect(cartQuantity).toBe("1");
  console.log("Cart quantity is 1");
  
});
