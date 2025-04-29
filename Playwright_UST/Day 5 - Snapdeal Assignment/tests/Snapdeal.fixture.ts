import { test as base, expect } from '@playwright/test';
import { HomePage } from './HomePage';
import { ProductsPage } from './ProductsPage';
import { ProductDetailsPage } from './ProductDetailsPage';

type SnapdealFixtures = {
    homePage: HomePage;
    productsPage: ProductsPage;
    productDetailsPage: ProductDetailsPage;
}

export const test = base.extend<SnapdealFixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        await use(homePage);
    },

    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    },

    productDetailsPage: async ({ page }, use) => {
        const productDetailsPage = new ProductDetailsPage(page);
        await use(productDetailsPage);
    }
        

})

export { expect } from '@playwright/test';