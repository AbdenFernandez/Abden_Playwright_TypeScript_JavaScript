import { Locator, Page } from '@playwright/test';
import { expect } from './antonio.fixture.ts';

export class BlogPage {
  readonly page: Page;
  readonly blogLink: Locator;
  readonly blogheader: Locator;
  readonly readMoreBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.blogLink = page.getByText('Blog');
    this.blogheader = page.locator('.blog-header');
    this.readMoreBtn = page.locator('.read-more-btn'); 
  }


  async verifyUserIsOnBlogPage() {
    await expect(this.blogheader).toBeVisible();
  }
  async userClicksOnReadMoreBtn() {
    await this.readMoreBtn.first().click();

}

async verifyFullBLogContentIsDisplayed() {
    await expect
}
}