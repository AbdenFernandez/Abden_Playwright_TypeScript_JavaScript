import { Locator, Page } from '@playwright/test';
import { expect } from './antonio.fixture.ts';

export class AboutPage {
  readonly page: Page;
  readonly aboutUsText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.aboutUsText = page.locator('//h1[text()="About Us"]');
  }

  async verifyAboutPageHasTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }


  async verifyUserIsOnAboutPage() {
    await expect(this.aboutUsText).toBeVisible();
  }
}
