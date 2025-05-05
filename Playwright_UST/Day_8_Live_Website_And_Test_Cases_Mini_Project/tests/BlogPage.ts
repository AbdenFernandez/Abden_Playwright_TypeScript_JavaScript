import { Locator, Page } from '@playwright/test';
import { expect } from './antonio.fixture.ts';

export class BlogPage {
    readonly page: Page;
    readonly blogLink: Locator;
    readonly blogheader: Locator;
    readonly readMoreBtn: Locator;
    readonly popularTopic: Locator;
    readonly emailIp: Locator;
    readonly subscribeBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.blogLink = page.getByText('Blog');
        this.blogheader = page.locator('.blog-header');
        this.readMoreBtn = page.locator('.read-more-btn');
        this.popularTopic = page.getByText('Popular Topics')
        this.emailIp = page.getByPlaceholder('Your email address');
        this.subscribeBtn = page.locator('//button[text()="Subscribe"]');
    }


    async verifyUserIsOnBlogPage() {
        await expect(this.blogheader).toBeVisible();
    }
    async userClicksOnReadMoreBtn() {
        await this.readMoreBtn.first().click();

    }

    async verifyFullContentOfBlogPostDisplayed() { // Wait for 2 seconds to ensure the content is fully loaded
        await expect(this.readMoreBtn.first()).toHaveText('Read Less');
    }

    async verifyPopularTopicsIsVisible() {
        await expect(this.popularTopic).toBeVisible();
    }
    async verifyUserSubscribeToUpdates(email: string) {
        await expect(this.emailIp).toBeVisible();
        await this.emailIp.fill(email);
        await this.subscribeBtn.click();
    }
}