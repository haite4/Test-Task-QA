import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe('Login with invalid password', () => {
    
    before(async () => {
        await LoginPage.open();
    });

    it('should login width invalid password', async() => {
            await LoginPage.login("standard_user","incorrect_password")

            const loginValue =  await LoginPage.inputUsername.getValue();
            
            expect(loginValue).toBe("standard_user")

            const passwordValue = await LoginPage.inputPassword.getValue();
            expect(passwordValue).toBe("incorrect_password");

            browser.pause(3000)

            await LoginPage.btnSubmit.click();
          

            
    })

    
})