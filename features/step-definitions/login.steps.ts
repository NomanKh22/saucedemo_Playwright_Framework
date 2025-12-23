import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import { page } from '../support/hooks';

Given('I am on the login page', async function () {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('I login with {string} and {string}', async function (username, password) {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

Then('I should be redirected to {string}', async function (expectedUrl) {
  await expect(page).toHaveURL(new RegExp(expectedUrl));
});

Then('I should see error {string}', async function (errorMessage) {
  const loginPage = new LoginPage(page);
  const actualError = await loginPage.getErrorMessage();
  expect(actualError).toContain(errorMessage);
});
