import { Locator, Page } from '@playwright/test';
import { expect } from './Snapdeal.fixture';

export class ProductDetailsPage {

    private readonly pincodeInput: Locator;

    constructor(public readonly page: Page) {

        this.pincodeInput = page.getByPlaceholder("Enter your pincode");
    }

    async verifyUserIsOnSnapdealProductDetailsPage() {
        await expect(this.pincodeInput).toBeVisible();
    }
    
}