import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
describe('Footer Link', () => {
    before(async () => {
        await LoginPage.open()
        await LoginPage.login("standard_user", "secret_sauce");
        await LoginPage.btnSubmit.click();

        await browser.waitUntil(async () => await browser.getUrl()  === "https://www.saucedemo.com/inventory.html",{
            timeout:5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        })
    })

    it('Twitter of the company is opened on the new tab', async() => { 
        const getTwitterLink = $('.social_twitter')
        
        await getTwitterLink.click()
        await browser.pause(2000)
       

    })

    it('Facebook of the company is opened on the new tab', async () => {
        const getFacebookLink = $('.social_facebook')

        await getFacebookLink.click()
        await browser.pause(2000)
    })

    it('Linkedin of the company is opened on the new tab', async () => {
        const socialLinkedin = $('.social_linkedin')

        await socialLinkedin.click()
        await browser.pause(2000)
        
    })

} )