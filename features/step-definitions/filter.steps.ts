import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { InventoryPage } from '../../Pages/InventoryPage';
import { page } from '../support/hooks';

When('I filter products by {string}', async function (option) {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.filterBy(option);
});

Then('prices should be sorted from low to high', async function () {
  const inventoryPage = new InventoryPage(page);
  const prices = await page.locator(inventoryPage.inventoryItemPrice).allInnerTexts();
  const priceNumbers = prices.map(price => parseFloat(price.replace('$', '')));
  for (let i = 0; i < priceNumbers.length - 1; i++) {
    expect(priceNumbers[i]).toBeLessThanOrEqual(priceNumbers[i + 1]);
  }
});
