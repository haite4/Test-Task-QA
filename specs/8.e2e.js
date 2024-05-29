import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import Page from '../pageobjects/page.js';
import { execArgv } from 'process';

const page = new Page();

describe('Valid Checkout', () => {
    before(async () => {
        await LoginPage.open()
        await LoginPage.login("standard_user", "secret_sauce");
        await LoginPage.btnSubmit.click();

        await browser.waitUntil(async () => await browser.getUrl()  === "https://www.saucedemo.com/inventory.html",{
            timeout:5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        })
    })

   it('Checkout', async() => {
        await page.addToCart()
        await page.shoppingCartLink.click()
        await browser.pause(2000)
        await page.buttonCheckout.click()
        await browser.pause(2000)
        await page.firstNameInput.setValue("Andrey")
        await page.lastNameInput.setValue("Boyarskiy")
        await page.postalCodeInput.setValue("1231313131")
        await browser.pause(2000)
        await page.buttonContinue.click()
        await browser.pause(1000)
        await page.buttonFinish.click()
        await browser.pause(1000)
        await page.buttonBacktoProducts.click()
        const cartBadge = await $(".shopping_cart_badge")
        const isCartNotEmpty = await cartBadge.isExisting();
        expect(isCartNotEmpty).toBe(false, "Expected the shopping cart not have items")

        await browser.pause(2000)


   } )


} )