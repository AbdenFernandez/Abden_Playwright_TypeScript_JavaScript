import { Page, Locator } from '@playwright/test';
import { expect } from './bestSellersFixture';
export class BestSellersPage {

  private readonly searchInput: Locator;
  readonly products: Locator;
  private readonly header: Locator;
  private readonly categories: Locator;
  private readonly bestproducts: Locator;
  readonly addToCartButton: Locator;
  private readonly booksheader: Locator;
  private readonly sortDropdown: Locator;
  private readonly location: Locator;
  private readonly applyButton: Locator;
  private readonly inputPincode: Locator;
  private readonly errorMsg: Locator;
  private readonly price: Locator;
  private readonly paginationNext: Locator;
  private readonly cartCount: Locator;

  constructor(public readonly page: Page) {
    this.searchInput = page.locator('#twotabsearchtextbox');
    this.products = page.locator('.s-main-slot .s-result-item');
    this.header = page.locator('h1');
    this.categories = page.locator('div._p13n-zg-nav-tree-all_style_zg-browse-group__88fbz div a');
    this.bestproducts = page.locator('.p13n-sc-uncoverable-faceout');
    this.addToCartButton = page.locator('#add-to-cart-button');
    this.booksheader = page.locator('div._cDEzb_card-title_2sYgw h1');
    this.sortDropdown = page.locator('.a-native-dropdown.a-declarative');
    this.location = page.locator('#glow-ingress-line1');
    this.applyButton = page.locator('span[id=GLUXZipUpdate-announce]');
    this.inputPincode = page.locator('#GLUXZipUpdateInput');
    this.errorMsg = page.locator('span#GLUXZipError');
    this.price = page.locator('span.a-price span span.a-price-whole');
    this.paginationNext = page.locator('.a-pagination .a-last a');
    this.cartCount = page.locator('span.nav-cart-count');
  }

  async navigate() {
    await this.page.goto("https://www.amazon.in/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2");
  }

  async searchProduct(searchKeyword: string) {
    await expect(this.searchInput).toBeVisible();
    await this.searchInput.fill(searchKeyword);
    await this.searchInput.press('Enter');
  }
  async applySortOption(optionValue: string) {
    console.log(this.sortDropdown);
    if (await this.sortDropdown.isVisible()) {
      await this.sortDropdown.selectOption(optionValue);
      const priceValue1 = await this.price.first().textContent();
      const price1 = parseFloat(priceValue1 ?? "0");
      const priceValue2 = await this.price.nth(1).textContent();
      const price2 = parseFloat(priceValue2 ?? "0");
      console.log(`Price of first product: ${price1}`);
      if (price1 < price2) {
        console.log("Products sorted successfully in ascending order.");
      }
      if (price1 > price2) {
        console.log("Products sorted successfully in descending order.");
      }
    }
  }

  async verifyPageTitleHasTitle(bestsellertitle: string) {
    const title = await this.page.title();
    expect(title).toBe(bestsellertitle);
  }

  async verifyHasHeader(headervalue: string) {
    await expect(this.header.first()).toBeVisible();
    const headerText = await this.header.first().textContent();
    expect(headerText).toContain(headervalue);
  }

  async verifyHasBooksHeader(headervalue: string) {
    await expect(this.header.first()).toBeVisible();
    const headerText = await this.booksheader.first().textContent();
    expect(headerText).toContain(headervalue);
  }

  async verifyCategoriesDisplayed() {
    await expect(this.categories.first()).toBeVisible();
  }

  async verifyHasCategories(catKey: string) {
    const catFound = await this.categories
      .allTextContents()
      .then(categories => categories.some(category =>
        category.trim() === catKey
      ));
    await expect(catFound).toBeTruthy();
    console.log(`Category "${catKey}" found: ${catFound}`);

  }

  async validateEachDepartmentNavigateCorrectPage() {
    const departmentCount = await this.categories.count();
    console.log('Number of departments:', departmentCount);
    for (let i = 0; i < departmentCount; i++) {
        await this.categories.nth(i).click();
        await this.page.waitForLoadState();
        await expect(await this.page.locator('#zg_banner_text')).toBeVisible();
        await this.page.goBack();
    }
}


  async verifyProductsDisplayed() {
    await expect(this.bestproducts.first()).toBeVisible();
  }

  async userClicksAProduct() {
    await expect(this.bestproducts.first()).toBeVisible();
    await this.bestproducts.first().click();
  }

  async clickCategory(cateKey: string) {
    const categoryLocator = this.categories.filter({ hasText: cateKey });
    await expect(categoryLocator).toBeVisible();
    await categoryLocator.click();
  }

  async userClickLocationBar() {
    await this.location.click();
    await expect(await this.applyButton).toBeVisible();
  }

  async userEnterPincode(pincode: string) {
    await this.inputPincode.clear();
    await this.inputPincode.fill(pincode);
    await this.applyButton.click();
  }

  async validatePincode(): Promise<boolean> {
    await this.page.waitForTimeout(5000);
    let errorMessage = await this.errorMsg.getAttribute('style');
    return errorMessage === "display: inline;" ? false: true;
}

  async goToNextPage() {

    if (await this.paginationNext.isVisible()) {
      await this.paginationNext.click();
      await expect(this.page).toHaveURL(  /pg=2/);
    }
  }

  async addFirstProductToCart() {
    
    const addToCartButton = this.page.locator('#add-to-cart-button');
    if (await addToCartButton.isVisible()) {
      await addToCartButton.first().click();
      await expect(this.cartCount).not.toHaveText('0');
    }
  }

}