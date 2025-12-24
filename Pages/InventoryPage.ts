import { Page } from '@playwright/test';


export class InventoryPage {
    constructor(private page: Page) { }


    addToCartBtn = 'button[data-test^="add-to-cart"]';
    cartIcon = '.shopping_cart_link';


    async addFirstProductToCart() {
        await this.page.locator(this.addToCartBtn).first().click();
    }


    async goToCart() {
        await this.page.click(this.cartIcon);
    }

    filterDropdown = '.product_sort_container';
    inventoryItemPrice = '.inventory_item_price';

    async filterBy(option: string) {
        await this.page.selectOption(this.filterDropdown, option);
    }
    //testing
}