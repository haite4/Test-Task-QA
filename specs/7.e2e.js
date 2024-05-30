import LoginPage from '../pageobjects/login.page.js';
import FooterPage from '../pageobjects/footer.page.js';

const loginpage = new LoginPage();
const footerpage = new FooterPage();

describe('Footer Link', () => {
    before(async () => {
        
        await loginpage.open()
        await loginpage.login("standard_user", "secret_sauce");

        await browser.waitUntil(async () => await browser.getUrl()  === "https://www.saucedemo.com/inventory.html",{
            timeout:5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        })
    })

    it('Twitter of the company is opened on the new tab', async() => { 
        await footerpage.clickTwitterLink();
    })

    it('Facebook of the company is opened on the new tab', async () => {
        await footerpage.clickFacebookLink();
    })

    it('Linkedin of the company is opened on the new tab', async () => {
        await footerpage.clickLinkedinLink();
    })

} )