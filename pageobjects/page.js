import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    * 
    * 
    */

    get buttonaddToCart () { return $('#add-to-cart-sauce-labs-backpack') }

    get shoppingCartLink() { return $('.shopping_cart_link') }

    get buttonCheckout () { return $('#checkout') }
    
    get firstNameInput () { return $("#first-name")}

    get lastNameInput () { return $("#last-name") } 

    get postalCodeInput () { return $("#postal-code") }

    get buttonContinue () { return $('#continue') }

    get buttonFinish () { return $("#finish") }

    get buttonBacktoProducts () { return $("#back-to-products") }

    async addToCart(){
        await this.buttonaddToCart.click()
    }
    
    open () {
        return browser.url(`https://www.saucedemo.com/`)  // ${path}
    }
}


