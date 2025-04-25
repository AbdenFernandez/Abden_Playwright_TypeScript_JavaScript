import { Locator, Page } from "@playwright/test";

export class CartPage {
    private readonly checkoutButton: Locator;

    constructor(public readonly page: Page) {
        this.checkoutButton = page.locator("#checkout");

    }

    async gotocheckout() {
        await this.checkoutButton.click();
    }
}
