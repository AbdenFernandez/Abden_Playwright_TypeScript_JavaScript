import { test as setup, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { Certificate } from 'crypto';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');
const { username, password } = JSON.parse(fs.readFileSync(authFile, 'utf-8'));

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').fill(username);
  await page.getByLabel('Password').fill(password);
  await page.locator('[value="Sign in"]').click();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set
  await page.waitForURL('https://github.com');

  // End of authentication steps.
  await page.context().storageState({ path: authFile });
});