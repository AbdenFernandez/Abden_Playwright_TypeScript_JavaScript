import { test as base, expect } from "@playwright/test";
import { LoginPage } from "./loginpage";
import { ProductsPage } from "./productspage";
import { ProductDetailsPage } from "./productdetailspage";

type SaucedemoFixtures = {
    loginPage: LoginPage,
    productsPage: ProductsPage,
    productDetailsPage: ProductDetailsPage
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
    }
});

export { expect } from "@playwright/test";
