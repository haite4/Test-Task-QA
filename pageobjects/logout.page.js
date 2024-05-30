import Page from './page.js';

class LogoutPage extends Page {

    get burgerMenuButton() { return $('#react-burger-menu-btn') };
    get logoutLink() { return $('#logout_sidebar_link') };


    async logout(){
        await this.burgerMenuButton.click();
        await this.logoutLink.click();
    }


}




export default LogoutPage;