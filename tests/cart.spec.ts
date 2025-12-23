import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../Pages/CartPage';
import { users } from '../utils/testData';

test('Verify cart is empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    await inventoryPage.goToCart();
    await cartPage.verifyCartIsEmpty();
});
