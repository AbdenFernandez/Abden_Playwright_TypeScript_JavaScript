import { Locator, Page } from '@playwright/test';
import { expect } from './antonio.fixture.ts';

export class ProfilePage {
    readonly page: Page;
    readonly profileLink: Locator;
    readonly profileText: Locator;
    readonly profileBtn: Locator;
    readonly logoutBtn: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.profileLink = page.locator('text=Profile');
        this.profileText = page.locator('main.container');
        this.profileBtn = page.locator('#userNameDisplay');
        this.logoutBtn = page.locator('#logoutBtn');
        
    }

    async navigateToProfile() {
        await this.profileLink.click();
    }

    async verifyUserIsOnProfilePage() {
        await expect(this.profileText).toBeVisible();
    }
    async clickOnProfileIcon(){
        await this.profileBtn.click();

    }
    async clickOnLogoutBtn(){
        await this.logoutBtn.click();
    
    }
    

}