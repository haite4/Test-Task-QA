import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('Sorting', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login("standard_user", "secret_sauce");
        await LoginPage.btnSubmit.click();
        await browser.waitUntil(async () => await browser.getUrl() === "https://www.saucedemo.com/inventory.html", {
            timeout: 5000,
            timeoutMsg: "Expected to be on inventory page after 5s"
        });
    });

    async function getProductPrices() {
        const priceElements = await $$('.inventory_item_price');
        const prices = [];
        for (let priceElement of priceElements) {
            const text = await priceElement.getText();
            const price = parseFloat(text.replace('$', ''));
            prices.push(price);
        }
        return prices;
    }


    async function getProductNames() {
        const products = await $$('.inventory_item');
        const names = []
        for(let nameElement of products){
            const productName = nameElement.getText()
            names.push(productName)
        }
        
        return names;
    }



    it('should sort products by price (low to high)', async () => {
        await $('.product_sort_container').selectByVisibleText('Price (low to high)');
        const prices = await getProductPrices();
        console.log(prices);
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sortedPrices, 'Products are not sorted by price (low to high)');
    });
    

    it('should sort products by price (high to low)', async () => {
        await $('.product_sort_container').selectByVisibleText('Price (high to low)');
        const prices = await getProductPrices();
        const sortedPrices = [...prices].sort((a, b) => b - a);
        expect(prices).toEqual(sortedPrices, 'Products are not sorted by price (high to low)');
    });

    it('should sort products by name (A to Z)', async () => {
        await $('.product_sort_container').selectByVisibleText('Name (A to Z)');
        const names = await getProductNames();
        const sortedNames = [...names].sort();
        expect(names).toEqual(sortedNames, 'Products are not sorted by name (A to Z)');
    });

    it('should sort products by name (Z to A)', async () => {
        await $('.product_sort_container').selectByVisibleText('Name (Z to A)');
        const names = await getProductNames();
        const sortedNames = [...names].sort().reverse();
        expect(names).toEqual(sortedNames, 'Products are not sorted by name (Z to A)');
    });
});
