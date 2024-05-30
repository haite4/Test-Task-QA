import LoginPage from '../pageobjects/login.page.js'

const loginpage = new LoginPage();

describe('Login with invalid login', () => {
    
    before(async () => {
        await loginpage.open();
    });

    it('should login width invalid login', async() => {
        
            await loginpage.login("standarD_user","secret_sauce")

            const loginValue =  await loginpage.inputUsername.getValue();
            expect(loginValue).toBe("standarD_user")

            const passwordValue = await loginpage.inputPassword.getValue();
            expect(passwordValue).toBe("secret_sauce");


            
    })

    
})