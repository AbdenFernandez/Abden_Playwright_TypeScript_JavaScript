import { test as base, expect, BrowserContext, Page } from '@playwright/test';
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

export async function switchToNewTab(context: BrowserContext, action: () => Promise<void>): Promise<Page> {
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        action()
    ]);
    await newPage.waitForLoadState();
    return newPage;
}

export async function switchBackToPage(page: Page) {
    await page.bringToFront();
}



export { expect } from '@playwright/test';