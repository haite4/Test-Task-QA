import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

const loginpage = new LoginPage();
const inventorypage = new InventoryPage();

describe('Sorting', () => {
    before(async () => {
        
        await loginpage.open();
        await loginpage.login("standard_user", "secret_sauce");

        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/inventory.html", {
            timeout: 5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        });
    });


    it('should sort products by price (low to high)', async () => {
        await inventorypage.sortBy('Price (low to high)');
        const prices = await inventorypage.getProductPrices();
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sortedPrices, 'Products are not sorted by price (low to high)');
    });
    

    it('should sort products by price (high to low)', async () => {
        await inventorypage.sortBy('Price (high to low)');
        const prices = await inventorypage.getProductPrices();
        const sortedPrices = [...prices].sort((a, b) => b - a);
        expect(prices).toEqual(sortedPrices, 'Products are not sorted by price (high to low)');
    });

    it('should sort products by name (A to Z)', async () => {
        await inventorypage.sortBy('Name (A to Z)');
        const names = await inventorypage.getProductNames();
        const sortedNames = [...names].sort();
        expect(names).toEqual(sortedNames, 'Products are not sorted by name (A to Z)');
    });

    it('should sort products by name (Z to A)', async () => {
        await inventorypage.sortBy('Name (Z to A)');
        const names = await inventorypage.getProductNames();
        const sortedNames = [...names].sort().reverse();
        expect(names).toEqual(sortedNames, 'Products are not sorted by name (Z to A)');
    });
});
