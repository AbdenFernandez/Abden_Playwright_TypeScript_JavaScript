// loginPage.ts
import { Locator, Page } from "@playwright/test";

export class LoginPage {
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;

    constructor(public readonly page: Page) {
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }

    async goto() {
        await this.page.goto("/");
    }

    async login(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }
}
