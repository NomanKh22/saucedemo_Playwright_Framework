import { test, expect } from '@playwright/test';
import { readExcelFile } from '../utils/ExcelUtils';
import * as path from 'path';
import { LoginPage } from 'Pages/LoginPage';
import { InventoryPage } from 'Pages/InventoryPage';
import { CheckoutPage } from 'Pages/CheckoutPage';
import { CartPage } from 'Pages/CartPage';

const users = readExcelFile(path.join(__dirname, '../data/users.xlsx'));

for (const user of users as any[]) {
    if (user.type === 'success' && user.firstName) {
        test(`Complete checkout flow - ${user.username}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            const inventoryPage = new InventoryPage(page);
            const cartPage = new CartPage(page);
            const checkoutPage = new CheckoutPage(page);

            await loginPage.goto();
            await loginPage.login(user.username, user.password);

            await inventoryPage.addFirstProductToCart();
            await inventoryPage.goToCart();

            await cartPage.proceedToCheckout();

            await checkoutPage.fillCheckoutInfo(
                user.firstName,
                user.lastName,
                user.postalCode
            );

            await expect(page.locator(checkoutPage.summarySubtotal)).toHaveText(user.itemTotal);
            await expect(page.locator(checkoutPage.summaryTax)).toHaveText(user.tax);
            await expect(page.locator(checkoutPage.summaryTotal)).toHaveText(user.total);

            await checkoutPage.finishCheckout();

            await expect(page.locator(checkoutPage.successMsg))
                .toHaveText('Thank you for your order!');
        });
    }
}