import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('#user-name')};

    get inputPassword() { return $('#password') };

    get btnSubmit() { return $('#login-button') };
    
 
 
    async login (username,password) {

        if(username && password){

            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue(password);

            await this.btnSubmit.waitForClickable({timeout:2000});
            await this.btnSubmit.click();
        }
            
    }



    async btnSubmitClick(){

        await this.btnSubmit.waitForClickable({timeout:2000});
        await this.btnSubmit.click();
    }

  
    open () {
        return browser.url("https://www.saucedemo.com/");
    }
}

export default LoginPage;
