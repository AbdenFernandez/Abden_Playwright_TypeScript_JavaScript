import { Locator, Page } from "@playwright/test";

export class orderConfirmationPage {
    private readonly orderConfirmation: Locator;

    constructor(public readonly page: Page) {
        this.orderConfirmation = page.locator(".complete-header");
    }

    async verifyOrderConfirmation() {
        await orderConfirmation.isVisible();
        const orderText = await orderConfirmation.textContent();
        await expect(orderText).toContain("Thank you for your order!");
    }


}