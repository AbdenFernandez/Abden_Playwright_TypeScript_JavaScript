import { Locator, Page } from '@playwright/test';
import { expect } from './antonio.fixture.ts';

export class IndexPage {
    readonly exploreBtn: Locator
    readonly page: Page;
    readonly loginIcon: Locator;
    readonly profileIcon: Locator;
    readonly blogIcon: Locator;
    readonly homeStayIcon: Locator;
    readonly homeStayHeader: Locator;
    readonly aboutUsLink: Locator;
    readonly contact: Locator;


    constructor(page: Page) {
        this.page = page;
        this.exploreBtn = page.locator('.btn');
        this.loginIcon = page.getByText('Login');
        this.profileIcon = page.locator('.nav-profile-icon')
        this.blogIcon = page.getByText('Blog');
        this.homeStayIcon = page.getByText('Home Stay Destinations');
        this.aboutUsLink = page.getByText('About');
        this.contact = page.getByText('Contact');
    }

    async navigateToHome() {
        await this.page.goto('http://127.0.0.1:5500/Playwright_UST/Day_8_Live_Website_And_Test_Cases_Mini_Project/src/index.html');
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
    async userClickonHomeStay() {
        await this.homeStayIcon.click();
    }
    async clickAboutIcon() {
        await this.aboutUsLink.click();
      }

    async userClickOnContact(){
        await this.contact.click();

    }
    async verifyIndexPageHasTitle(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }
    
}
