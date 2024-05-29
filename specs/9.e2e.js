import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import Page from '../pageobjects/page.js';

const page = new Page();

//  This test failed. 
//  The user can go to the checkout page with an empty cart and the error will not occur

describe('Checkout without products', () => {
    before(async () => {
        await LoginPage.open()
        await LoginPage.login("standard_user", "secret_sauce");
        await LoginPage.btnSubmit.click();

        await browser.waitUntil(async () => await browser.getUrl()  === "https://www.saucedemo.com/inventory.html",{
            timeout:5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        })
    })

    it('checkout', async () => {
        await page.shoppingCartLink.click();
        
        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/cart.html", {
            timeout: 5000,
            timeoutMsg: "Expected to be on cart page after 5s"
        });
        
        const isCartEmpty = await $('.shopping_cart_badge').isExisting();
        expect(isCartEmpty).toBe(false, "Expected the shopping cart to be empty");
        await page.buttonCheckout.click();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe("https://www.saucedemo.com/cart.html", "Expected to stay on the cart page");

      
        const errorMessage = await $('.error-message-container').isExisting();
        expect(errorMessage).toBe(true, "Expected an error message to be displayed");

        const isStillOnCartPage = await $('.cart_list').isExisting();
        expect(isStillOnCartPage).toBe(true, "Expected to still be on the cart page");
       
        
        
    });


} )