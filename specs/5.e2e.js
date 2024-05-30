import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import HeaderPage from '../pageobjects/header.page.js';
import LogoutPage from '../pageobjects/logout.page.js';

const inventorypage = new InventoryPage();
const headerpage = new HeaderPage();
const loginpage = new LoginPage();
const logoutpage = new LogoutPage();

describe('Saving the card after logout', () => {
    before(async () => {
        
        await loginpage.open();
        await loginpage.login("standard_user", "secret_sauce");
        
        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/inventory.html", {
            timeout: 5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        });

    });

    it("Verify that the previously added product remains in the cart after logging in again.", async () => {

        await inventorypage.addToCart()
        await logoutpage.logout()

        const loginValue = await loginpage.inputUsername.getValue();
        expect(loginValue).toBe("");

        const passwordValue = await loginpage.inputPassword.getValue();
        expect(passwordValue).toBe("");

        await loginpage.login("standard_user", "secret_sauce");

        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/inventory.html", {
            timeout: 5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        });

        await headerpage.cartIconClick()

    })

   
});
