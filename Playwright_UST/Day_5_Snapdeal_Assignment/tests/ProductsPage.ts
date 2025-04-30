import { Locator, Page } from '@playwright/test';
import { expect, switchToNewTab } from './Snapdeal.fixture';

export class ProductsPage {

    private readonly pincodeInput: Locator;
    private readonly productName: Locator;

    constructor(public readonly page: Page) {

        this.pincodeInput = page.getByPlaceholder("Enter your pincode");
        this.productName = page.locator("..product-title");
    }

    async verifyUserIsOnSnapdealProductsPage() {
        await expect(this.pincodeInput).toBeVisible();
    }

    async userSelectProduct(): Promise<Page> {
        return await switchToNewTab(this.page.context(), async () => {
            await this.page.locator(".product-title").first().click(); // adjust selector
        });
    }
}