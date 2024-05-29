import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#user-name')}

    get inputPassword () { return $('#password') }

    get btnSubmit () { return $('#login-button') }
    
    get burgeMenu (){ return $('#react-burger-menu-btn') }

    get logoutLink () { return $('#logout_sidebar_link') }


    /**
     * 
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username,password) {

        await this.inputUsername.setValue(username);

        await this.inputPassword.setValue(password);
        
        
    }

    async logout(){
        await this.burgeMenu.click()
        await this.logoutLink.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return browser.url("https://www.saucedemo.com/");
    }
}

export default new LoginPage();
