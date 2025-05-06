import { Locator, Page } from '@playwright/test';
import { expect } from './antonio.fixture.ts';

export class ContactPage {
    readonly page: Page;
    readonly contactHeader: Locator;
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly messageField: Locator;
    readonly submitButton: Locator;
    readonly status: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactHeader = page.locator('//h1[text()="Contact Us"]');
        this.nameField = page.locator('//input[@name="name"]');
        this.emailField = page.locator('//input[@name="email"]');
        this.messageField = page.locator('//textarea[@name="message"]');
        this.status = page.locator('.status');
        this.submitButton = page.locator('//button[@type="submit"]');
    }

    

    async verifyUserIsOnContactPage() {
        await expect(this.contactHeader).toBeVisible();
    }

    async userSendContactDetails(name: string, email: string, message: string) {
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.messageField.fill(message);
        await expect(this.submitButton).toBeVisible();
        await this.submitButton.click();

    }

    async verifyContactMessageSentSuccessfully(message: string) {
        await expect(this.status).toContainText(message);
    }

    async verifyContactPageHasTitle(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

}