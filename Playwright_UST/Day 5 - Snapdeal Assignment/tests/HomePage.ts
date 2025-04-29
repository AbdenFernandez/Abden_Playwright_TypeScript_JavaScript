import { Page, Locator } from '@playwright/test';
import { expect } from './Snapdeal.fixture';

export class HomePage {
    
    private readonly searchInput: Locator;

    constructor(public readonly page: Page) {
        this.searchInput = page.locator("#inputValEnter");
    }

    async navigate() {
        await this.page.goto("/");
    }

    async verifyUserIsOnSnapdealHomePage() {
        await expect(this.page).toHaveTitle("Shop Online for Men, Women & Kids Clothing, Shoes, Home Decor Items");
    }

    async userSearchForAProduct(productName : string) {
        await this.searchInput.isVisible();
        await this.searchInput.fill(productName);
        await this.searchInput.press("Enter");
        await this.searchInput.press("Enter");
    }
}