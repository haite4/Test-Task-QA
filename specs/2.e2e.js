import LoginPage from '../pageobjects/login.page.js'

const loginpage = new LoginPage();

describe('Login with invalid password', () => {
    
    before(async () => {
        await loginpage.open();
    });

    it('should login width invalid password', async() => {
        
            await loginpage.login("standard_user","incorrect_password")

            const loginValue =  await loginpage.inputUsername.getValue();   
            expect(loginValue).toBe("standard_user")

            const passwordValue = await loginpage.inputPassword.getValue();
            expect(passwordValue).toBe("incorrect_password");

          
          

            
    })

    
})