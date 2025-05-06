import { Locator, Page } from '@playwright/test';
import { expect } from './antonio.fixture.ts';

export class LoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('input[name="username"]');
    this.passwordField = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.status'); // Adjust the selector as needed
  }

  async verifyUserIsOnLoginPage() {
    await expect(this.usernameField).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async verifyErrorMessageDisplayed(expectedMessage: string) {
    await expect(this.errorMessage).toHaveText(expectedMessage);
  }

  async verifyLoginPageHasTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }
}