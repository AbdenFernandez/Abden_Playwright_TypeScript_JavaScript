import { Locator, Page } from "@playwright/test";
import { expect } from "./saucedemo.fixtures";
export class OrderConfirmationPage {
    private readonly orderConfirmation: Locator;

    constructor(public readonly page: Page) {
        this.orderConfirmation = page.locator(".complete-header");
    }

    async verifyOrderConfirmation(confirmationmessage: string) {
        await expect(this.orderConfirmation).toBeVisible();
        const orderText = await this.orderConfirmation.textContent();
        await expect(orderText).toContain(confirmationmessage);
    }

}