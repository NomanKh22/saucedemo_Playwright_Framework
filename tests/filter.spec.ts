import { test, expect } from '@playwright/test';
import { users } from '../utils/testData';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from 'Pages/InventoryPage';

test('Filter products by price (low to high)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    await inventoryPage.filterBy('lohi');
    const prices = await page.locator(inventoryPage.inventoryItemPrice).allInnerTexts();
    const priceNumbers = prices.map(price => parseFloat(price.replace('$', '')));
    for (let i = 0; i < priceNumbers.length - 1; i++) {
        expect(priceNumbers[i]).toBeLessThanOrEqual(priceNumbers[i + 1]);
    }
});
