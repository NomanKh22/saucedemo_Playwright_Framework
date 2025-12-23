import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { InventoryPage } from '../../Pages/InventoryPage';
import { CartPage } from '../../Pages/CartPage';
import { CheckoutPage } from '../../Pages/CheckoutPage';
import { page } from '../support/hooks';

When('I add the first product to the cart', async function () {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addFirstProductToCart();
});

When('I proceed to checkout', async function () {
  const cartPage = new CartPage(page);
  await cartPage.proceedToCheckout();
});

When('I fill checkout info with {string}, {string}, and {string}', async function (fname, lname, zip) {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillCheckoutInfo(fname, lname, zip);
});

Then('I should see item total {string}', async function (expected) {
  const checkoutPage = new CheckoutPage(page);
  await expect(page.locator(checkoutPage.summarySubtotal)).toHaveText(expected);
});

Then('I should see tax {string}', async function (expected) {
  const checkoutPage = new CheckoutPage(page);
  await expect(page.locator(checkoutPage.summaryTax)).toHaveText(expected);
});

Then('I should see total {string}', async function (expected) {
  const checkoutPage = new CheckoutPage(page);
  await expect(page.locator(checkoutPage.summaryTotal)).toHaveText(expected);
});

When('I finish checkout', async function () {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.finishCheckout();
});

Then('I should see success message {string}', async function (expected) {
  const checkoutPage = new CheckoutPage(page);
  await expect(page.locator(checkoutPage.successMsg)).toHaveText(expected);
});
