import { test as base, expect } from "@playwright/test";
import { LoginPage } from "./loginpage";
import { ProductsPage } from "./productspage";
import { ProductDetailsPage } from "./productdetailspage";
import { CartPage } from "./cartpage";
import { CheckoutPage } from "./checkoutpage";
import { OrderConfirmationPage } from "./orderconfirmationpage";

type SaucedemoFixtures = {
    loginPage: LoginPage,
    productsPage: ProductsPage,
    productDetailsPage: ProductDetailsPage,
    cartPage: CartPage,
    checkoutPage: CheckoutPage,
    orderConfirmationPage: OrderConfirmationPage
};

export const test = base.extend<SaucedemoFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },

    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    },

    productDetailsPage: async ({ page }, use) => {
        const productDetailsPage = new ProductDetailsPage(page);
        await use(productDetailsPage);
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },

    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    },

    orderConfirmationPage: async ({ page }, use) => {
        const orderConfirmationPage = new OrderConfirmationPage(page);
        await use(orderConfirmationPage);
    }


});

export { expect } from "@playwright/test";
