import { Locator, Page } from '@playwright/test';
import { expect } from './antonio.fixture.ts';

export class IndexPage {
    readonly exploreBtn: Locator
    readonly page: Page;
    readonly loginIcon: Locator;
    readonly profileIcon: Locator;
    readonly blogIcon: Locator;
    readonly homeStayIcon: Locator;


    constructor(page: Page) {
        this.page = page;
        this.exploreBtn = page.locator('.btn');
        this.loginIcon = page.getByText('Login');
        this.profileIcon = page.locator('.nav-profile-icon')
        this.blogIcon = page.getByText('Blog');
        this.homeStayIcon
    }

    async navigateToHome() {
        await this.page.goto('http://127.0.0.1:5500/src/index.html');
    }

    async verifyUserIsOnIndexPage() {
        await expect(this.exploreBtn).toBeVisible();
    }
    async navigateToLogin() {
        await this.loginIcon.click();
    }

    async verifyUserIsLoggedInSuccessfully() {
        await this.page.on('dialog', async dialog => {
            await dialog.accept();
        });
        await expect(this.profileIcon).toBeVisible();
    }

    async clickProfileIcon() {
        await expect(this.profileIcon).toBeVisible();
        await this.profileIcon.click();
    }
    async navigateToBlogPage(){
        await this.blogIcon.click();

    }
}
