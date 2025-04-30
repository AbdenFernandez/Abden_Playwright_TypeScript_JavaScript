import { Locator, Page } from '@playwright/test';
import { expect, switchBackToPage, switchToNewTab } from './Snapdeal.fixture';

export class ProductDetailsPage {

    private readonly addToCartButton: Locator;
    private readonly cartQuantity: Locator;
    constructor(public readonly page: Page) {
        this.addToCartButton = page.locator('div.btn-theme-secondary span.intialtext');
        this.cartQuantity = page.locator('span.cartQuantity');
    }

    async verifyUserIsOnSnapdealProductDetailsPage() {
        await this.page.waitForLoadState();
        await expect(this.addToCartButton).toBeVisible();

    }
    async userAddToCart() {
        await this.addToCartButton.click({ force: true });
        await this.page.waitForLoadState();
    }

    async verifyCartQuantity(): Promise<number> {
        await this.cartQuantity.waitFor({ state: 'visible' });
        const cartQuantity = await this.cartQuantity.textContent();
        return cartQuantity && !isNaN(parseInt(cartQuantity)) ? parseInt(cartQuantity) : 0;
    }

    async userClickOnCartIcon(): Promise<Frame> {
        return await switchToNewTab(this.page.context(), async () => {
            await this.addToCartButton.click(); // adjust selector
        });
    }
}