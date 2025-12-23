import { When, Then } from '@cucumber/cucumber';
import { InventoryPage } from '../../Pages/InventoryPage';
import { CartPage } from '../../Pages/CartPage';
import { page } from '../support/hooks';

When('I go to the cart', async function () {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.goToCart();
});

Then('the cart should be empty', async function () {
  const cartPage = new CartPage(page);
  await cartPage.verifyCartIsEmpty();
});
