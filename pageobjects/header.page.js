import Page from './page.js';

class HeaderPage extends Page {

    get cartIcon() { return $('.shopping_cart_link') };

    get titleText() { return $('span.title') };
    
    async cartIconClick(){
        await this.cartIcon.click();
    }
}


export default HeaderPage;