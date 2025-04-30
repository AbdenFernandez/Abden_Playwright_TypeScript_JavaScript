import { test as base, expect } from '@playwright/test';
import { BestSellersPage } from './BestSellersPage';

// Define the custom fixture type
type AmazonFixtures = {
  bestSellersPage: BestSellersPage;
};

// Extend base test to add our custom fixtures
export const test = base.extend<AmazonFixtures>({
  bestSellersPage: async ({ page }, use) => {
    const bestSellersPage = new BestSellersPage(page);
    await bestSellersPage.navigate();
    await use(bestSellersPage);
  },
});

export { expect } from '@playwright/test';
