import { Locator, Page } from '@playwright/test';
import { expect } from './antonio.fixture.ts';

export class HomeStayPage {
  readonly page: Page;
  readonly contactLink: Locator;
  readonly contactText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactLink = page.locator('text=Contact Us');
    this.contactText = page.locator('h1:has-text("Contact Us")');
  }

  async navigateToContact() {
    await this.contactLink.click();
  }

  async verifyContactPage() {
    await expect(this.contactText).toBeVisible();
  }
}