import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import { $ } from '@wdio/globals'


describe('Valid Login', () => {
    before(async () => {
        await LoginPage.open();
    });


    it('should login width valid credentials', async () => {
        await LoginPage.login("standard_user","secret_sauce")

        const loginValue = await LoginPage.inputUsername.getValue();

        expect(loginValue).toBe("standard_user");

        const passwordValue = await LoginPage.inputPassword.getValue();

        expect(passwordValue).toBe("secret_sauce");

        await browser.pause(3000)
        
        await LoginPage.btnSubmit.click();
        

        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/inventory.html",
        {
            timeout:5000,
            timeoutMsg:"Expected to be on inventory page after 5s"
        }
        );
        const InventoryHeader = await $('span.title');
        expect(await InventoryHeader.getText()).toBe('Products')
        
    });



});