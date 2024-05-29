import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('Logout', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login("standard_user", "secret_sauce");
        await LoginPage.btnSubmit.click();
        
        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/inventory.html", {
            timeout: 5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        });
    });

    it('should logout successfully', async () => {
        await LoginPage.logout();
        
        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/", {
            timeout: 5000,
            timeoutMsg: "Expected to be on login page after 5s"
        });
        
        await browser.pause(2000)

        const loginValue = await LoginPage.inputUsername.getValue();
        expect(loginValue).toBe("");

        const passwordValue = await LoginPage.inputPassword.getValue();
        expect(passwordValue).toBe("");
    });
});
