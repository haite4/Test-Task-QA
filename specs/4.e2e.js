import LoginPage from '../pageobjects/login.page.js';
import LogoutPage from '../pageobjects/logout.page.js';

const loginpage = new LoginPage();
const logoutpage = new LogoutPage();


describe('Logout', () => {
    before(async () => {
        
        await loginpage.open();
        await loginpage.login("standard_user", "secret_sauce");
        
        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/inventory.html", {
            timeout: 5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        });
    });

    it('should logout successfully', async () => {
        await logoutpage.logout();
        
        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/", {
            timeout: 5000,
            timeoutMsg: "Expected to be on login page after 5s"
        });
        

        const loginValue = await loginpage.inputUsername.getValue();
        expect(loginValue).toBe("");

        const passwordValue = await loginpage.inputPassword.getValue();
        expect(passwordValue).toBe("");
    });
});
