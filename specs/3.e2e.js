import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe('Login with invalid login', () => {
    
    before(async () => {
        await LoginPage.open();
    });

    it('should login width invalid login', async() => {
            await LoginPage.login("standarD_user","secret_sauce")

            const loginValue =  await LoginPage.inputUsername.getValue();
            
            expect(loginValue).toBe("standarD_user")

            const passwordValue = await LoginPage.inputPassword.getValue();
            expect(passwordValue).toBe("secret_sauce");

            browser.pause(3000)

            await LoginPage.btnSubmit.click();
          

            
    })

    
})