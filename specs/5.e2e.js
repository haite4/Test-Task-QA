import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import Page from '../pageobjects/page.js';

const page = new Page();

describe('Saving the card after logout', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login("standard_user", "secret_sauce");
        await LoginPage.btnSubmit.click();
        
        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/inventory.html", {
            timeout: 5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        });

    });

    it("Verify that the previously added product remains in the cart after logging in again.", async () => {

        await page.addToCart()
        await browser.pause(3000)
        await LoginPage.logout()

        const loginValue = await LoginPage.inputUsername.getValue();
        expect(loginValue).toBe("");

        const passwordValue = await LoginPage.inputPassword.getValue();
        expect(passwordValue).toBe("");

        await browser.pause(3000)

        await LoginPage.login("standard_user", "secret_sauce");

        await LoginPage.btnSubmit.click();

        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/inventory.html", {
            timeout: 5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        });

        
        await page.shoppingCartLink.click()
        await browser.pause(3000)

    })

   
});
