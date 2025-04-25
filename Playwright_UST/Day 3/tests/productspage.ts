import { Locator, Page } from "@playwright/test";

export class ProductsPage {
    private readonly firstItem: Locator;

    constructor(public readonly page: Page) {
        this.firstItem = page.locator(".inventory_item_name").first();
    }

    async clickFirstItem() {
        await this.firstItem.click();
    }
}
