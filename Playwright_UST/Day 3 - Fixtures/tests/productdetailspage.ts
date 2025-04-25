import { Locator, Page, expect } from "@playwright/test";

export class ProductDetailsPage {
    private readonly addToCartButton: Locator;
    private readonly cartIcon: Locator;

    constructor(public readonly page: Page) {
        this.addToCartButton = page.locator("#add-to-cart");
        this.cartIcon = page.locator(".shopping_cart_badge");
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async getCartQuantity(): Promise<string | null> {
        await expect(this.cartIcon).toBeVisible();
        return await this.cartIcon.textContent();
    }
    async gotocheckout() {
        await this.cartIcon.click();
    }
}
