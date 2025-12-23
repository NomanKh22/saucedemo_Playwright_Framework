import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { readExcelFile } from '../utils/ExcelUtils';
import * as path from 'path';

const users = readExcelFile(path.join(__dirname, '../data/users.xlsx'));

for (const user of users as any[]) {
    test(`Login with ${user.username}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(user.username, user.password);

        if (user.type === 'error') {
            const errorMsg = await loginPage.getErrorMessage();
            expect(errorMsg).toContain(user.expected);
        } else {
            await expect(page).toHaveURL(new RegExp(user.expected));
        }
    });
}
