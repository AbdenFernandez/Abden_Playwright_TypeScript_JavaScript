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
    readonly subscribeMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.blogLink = page.getByText('Blog');
        this.blogheader = page.locator('.blog-header');
        this.readMoreBtn = page.locator('.read-more-btn');
        this.popularTopic = page.getByText('Popular Topics')
        this.emailIp = page.getByPlaceholder('Your email address');
        this.subscribeBtn = page.locator('//button[text()="Subscribe"]');
        this.subscribeMessage = page.locator('#subscribe-message');
    }

    async verifyBlogPageHasTitle(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
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

    async verifySubscribeMessageIsDisplayed() {
        await expect(this.subscribeMessage).toBeVisible();
        const styleMsg= await this.subscribeMessage.getAttribute('style');
        console.log(styleMsg);
        await expect(styleMsg).toContain('display: block;');
    }
}