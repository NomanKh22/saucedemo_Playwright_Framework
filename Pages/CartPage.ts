import { Page, expect } from '@playwright/test';


export class CartPage {
    constructor(private page: Page) { }


    checkoutBtn = '#checkout';
    cartItem = '.cart_item';


    async proceedToCheckout() {
        await this.page.click(this.checkoutBtn);
    }

    async verifyCartIsEmpty() {
        await expect(this.page.locator(this.cartItem)).toHaveCount(0);
    }
}