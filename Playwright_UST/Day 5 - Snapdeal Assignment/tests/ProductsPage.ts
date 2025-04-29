import { Locator, Page } from '@playwright/test';
import { expect } from './Snapdeal.fixture';

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
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),   // Wait for new tab
            this.productName.first().click(),           // Click that triggers new tab
        ]);
    
        await newPage.waitForLoadState();               // Wait for it to fully load
        return newPage;                                 // Return new tab's Page object
    }
    



}