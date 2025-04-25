import { Locator, Page } from "@playwright/test";
import { expect } from "./saucedemo.fixtures";
export class OrderConfirmationPage {
    private readonly orderConfirmation: Locator;
    private readonly backToProducts: Locator;
    constructor(public readonly page: Page) {
        this.orderConfirmation = page.locator(".complete-header");
        this.backToProducts = page.locator("#back-to-products");
    }

    async verifyOrderConfirmation(confirmationmessage: string) {
        await expect(this.orderConfirmation).toBeVisible();
        const orderText = await this.orderConfirmation.textContent();
        await expect(orderText).toContain(confirmationmessage);
    
    }
    async backToHome() {
        await this.backToProducts.click();
    }


}