import LoginPage from '../pageobjects/login.page.js'
import HeaderPage from '../pageobjects/header.page.js'


const loginpage = new LoginPage();
const headerpage = new HeaderPage()

describe('Valid Login', () => {
    before(async () => {
        await loginpage.open();
    });


    it('should login width valid credentials', async () => {

        await loginpage.inputUsername.setValue("standard_user")
        await loginpage.inputPassword.setValue("secret_sauce")
        

        const loginValue = await loginpage.inputUsername.getValue();
        expect(loginValue).toBe("standard_user");

        const passwordValue = await loginpage.inputPassword.getValue();
        expect(passwordValue).toBe("secret_sauce");

        await loginpage.btnSubmitClick()
        

        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/inventory.html",
        {
            timeout:5000,
            timeoutMsg:"Expected to be on inventory page after 5s"
        }
        );

        expect(await headerpage.titleText.getText()).toBe('Products')
        
    });



});