import LoginPage from '../pageobjects/login.page.js';
import HeaderPage from '../pageobjects/header.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';


const loginpage = new LoginPage();
const headerpage = new HeaderPage();
const cartpage = new CartPage();
const checkoutpage = new CheckoutPage();

//  This test failed. 
//  The user can go to the checkout page with an empty cart and the error will not occur

describe('Checkout without products', () => {
    before(async () => {
        await loginpage.open()
        await loginpage.login("standard_user", "secret_sauce");

        await browser.waitUntil(async () => await browser.getUrl()  === "https://www.saucedemo.com/inventory.html",{
            timeout:5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        })
    })

    it('checkout', async () => {
        await headerpage.cartIconClick();
        
        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/cart.html", {
            timeout: 5000,
            timeoutMsg: "Expected to be on cart page after 5s"
        });
        
        const isCartEmpty = await cartpage.cartBadge.isExisting();
        expect(isCartEmpty).toBe(false, "Expected the shopping cart to be empty");

        await checkoutpage.clickButtonCheckout();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe("https://www.saucedemo.com/cart.html", "Expected to stay on the cart page");

      
        const errorMessage = await checkoutpage.errorMessage.isExisting();
        expect(errorMessage).toBe(true, "Expected an error message to be displayed");

        const isStillOnCartPage = checkoutpage.cartList.isExisting();
        expect(isStillOnCartPage).toBe(true, "Expected to still be on the cart page");
       
        
        
    });


} )