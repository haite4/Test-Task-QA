import LoginPage from '../pageobjects/login.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import HeaderPage from '../pageobjects/header.page.js';
import CartPage from '../pageobjects/cart.page.js';


const loginpage = new LoginPage();
const checkoutpage = new CheckoutPage();
const inventorypage = new InventoryPage();
const headerpage = new HeaderPage();
const cartpage = new CartPage();


describe('Valid Checkout', () => {
    before(async () => {

        await loginpage.open()
        await loginpage.login("standard_user", "secret_sauce");

        await browser.waitUntil(async () => await browser.getUrl()  === "https://www.saucedemo.com/inventory.html",{
            timeout:5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        })
    })

   it('Checkout', async() => {

        await inventorypage.addToCart();

        await headerpage.cartIconClick();

        await cartpage.clickButtonCheckout();

        await checkoutpage.checkoutInformation();

        await checkoutpage.clickButtonContinue();

        await checkoutpage.clickButtonFinish();

        await checkoutpage.clickButtonBacktoProducts();

        const isCartNotEmpty = await cartpage.cartBadge.isExisting();
        expect(isCartNotEmpty).toBe(false, "Expected the shopping cart not have items");

        


   } )


} )