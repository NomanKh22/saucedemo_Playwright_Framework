import { Page } from '@playwright/test';


export class LoginPage {
    constructor(private page: Page) { }


    username = '#user-name';
    password = '#password';
    loginBtn = '#login-button';


    async goto() {
        await this.page.goto('/');
    }


    async login(username: string, password: string) {
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginBtn);
    }

    errorMsg = '[data-test="error"]';

    async getErrorMessage() {
        return await this.page.textContent(this.errorMsg);
    }
}