import Page from './page.js';


class CartPage extends Page {

    get cartBadge() { return  $(".shopping_cart_badge") };

    get cartList() { return  $('.cart_list') };

    get buttonCheckout() { return $('#checkout') };

    async clickButtonCheckout(){
        await this.buttonCheckout.click();
    }


}


export default CartPage;