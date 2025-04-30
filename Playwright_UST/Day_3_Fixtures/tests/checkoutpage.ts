import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly postalCode: Locator;
    private readonly continueButton: Locator;
    private readonly finishButton: Locator;

    constructor(public readonly page: Page) {
        this.firstName = page.locator("#first-name");
        this.lastName = page.locator("#last-name");
        this.postalCode = page.locator("#postal-code");
        this.continueButton = page.locator("#continue");
        this.finishButton = page.locator("#finish");
    }

    async enterDetails(firstName: string, lastName: string, postalCode: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueButton.click();
    }

    async finishOrder() {
        await this.finishButton.click();
    }




}