import { Locator, Page } from '@playwright/test';
import { expect } from './antonio.fixture.ts';

export class ContactPage {
    readonly page: Page;
    readonly contactHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactHeader = page.locator('//h1[text()="Contact Us"]');
    }

    

    async verifyUserIsOnContactPage() {
        await expect(this.contactHeader).toBeVisible();
    }
}