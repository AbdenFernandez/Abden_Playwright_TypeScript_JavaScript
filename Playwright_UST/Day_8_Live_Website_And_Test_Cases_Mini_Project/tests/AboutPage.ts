import { Locator, Page } from '@playwright/test';
import { expect } from './antonio.fixture.ts';

export class AboutPage {
  readonly page: Page;
  readonly aboutUsLink: Locator;
  readonly aboutUsText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.aboutUsLink = page.locator('text=About Us');
    this.aboutUsText = page.locator('h1:has-text("About Us")');
  }

  async navigateToAboutUs() {
    await this.aboutUsLink.click();
  }

  async verifyAboutUsPage() {
    await expect(this.aboutUsText).toBeVisible();
  }
}
