import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

setDefaultTimeout(60 * 1000);

let browser: Browser;
export let page: Page;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

AfterAll(async () => {
  await browser.close();
});

Before(async function () {
  const context = await browser.newContext({ baseURL: 'https://www.saucedemo.com/' });
  page = await context.newPage();
  this.page = page; // Attach page to World
});

After(async function () {
  await page.close();
  // context.close() is handled by page.close/browser.close implicitly
});
