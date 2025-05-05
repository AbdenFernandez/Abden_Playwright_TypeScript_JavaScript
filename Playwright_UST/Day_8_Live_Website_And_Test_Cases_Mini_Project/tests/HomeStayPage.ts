import { Locator, Page } from '@playwright/test';
import { expect } from './antonio.fixture.ts';

export class HomeStayPage {
    readonly page: Page;
    readonly contactLink: Locator;
    readonly contactText: Locator;
    readonly homeStayHeader: Locator;
    readonly reviewText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactLink = page.locator('text=Contact Us');
        this.contactText = page.locator('h1:has-text("Contact Us")');
        this.homeStayHeader = page.locator('//h1[text()="Home Stay Destinations"]');
        this.reviewText = page.locator('.view-reviews-btn');
    }

    
    async verifyUserIsOnHomeStayPage() {
        await expect(this.homeStayHeader).toBeVisible();
    }

    async navigateToContact() {
        await this.contactLink.click();
    }

    async verifyContactPage() {
        await expect(this.contactText).toBeVisible();
    }

    async userCanViewReview() {
        await expect(this.reviewText.first()).toBeVisible();
        await this.reviewText.first().click();
        await expect(this.reviewText.first()).toContainText('Hide Reviews');
    }
    async userCanHideReview() {
        await expect(this.reviewText.first()).toBeVisible();
        await this.reviewText.first().click();
        await this.reviewText.first().click();
        await expect(this.reviewText.first()).toContainText('View Reviews');

    }
    async userCanAddReview() {

    }
}