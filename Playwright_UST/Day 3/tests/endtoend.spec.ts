import { test, expect } from './saucedemo.fixtures';

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
});

[
  { firstName: 'Aaryan', lastName: 'ust', pin: '12345', orderConfirmMsg: 'Thank you for your order!' },
  { firstName: 'Abden', lastName: 'raj', pin: '12345', orderConfirmMsg: 'Thank you for your order!' },
  { firstName: 'Deepak', lastName: 'Antony', pin: '12345', orderConfirmMsg: 'Thank you for your order!' },
  
].forEach(({ firstName, lastName, pin, orderConfirmMsg }) => {
  test.only(`End to end test for cart functionality of ${firstName}`, async ({ productsPage, productDetailsPage, cartPage, checkoutPage, orderConfirmationPage }) => {
    await productsPage.clickFirstItem();
    await productDetailsPage.addToCart();
    const cartQuantity = await productDetailsPage.getCartQuantity();
    expect(cartQuantity).toBe("1");
    console.log("Cart quantity is 1");
    await productDetailsPage.gotocheckout();
    await cartPage.gotocheckout();
    await checkoutPage.enterDetails(firstName, lastName, pin);
    await checkoutPage.finishOrder();
    await orderConfirmationPage.verifyOrderConfirmation(orderConfirmMsg);
    await orderConfirmationPage.backToHome();
    await productsPage.verifyProductPageIsDisplayed();
  });
})
