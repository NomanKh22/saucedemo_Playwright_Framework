import { Page } from '@playwright/test';


export class CheckoutPage {
    constructor(private page: Page) { }


    firstName = '#first-name';
    lastName = '#last-name';
    postalCode = '#postal-code';
    continueBtn = '#continue';
    finishBtn = '#finish';
    successMsg = '.complete-header';
    summarySubtotal = '.summary_subtotal_label';
    summaryTax = '.summary_tax_label';
    summaryTotal = '.summary_total_label';


    async fillCheckoutInfo(fn: string, ln: string, zip: string) {
        await this.page.fill(this.firstName, fn);
        await this.page.fill(this.lastName, ln);
        await this.page.fill(this.postalCode, zip);
        await this.page.click(this.continueBtn);
    }


    async finishCheckout() {
        await this.page.click(this.finishBtn);
    }
}