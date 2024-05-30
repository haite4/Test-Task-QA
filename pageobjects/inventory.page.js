import Page from './page.js';


class InventoryPage extends Page {

    get buttonAddToCart() { return $('#add-to-cart-sauce-labs-backpack') };

    get productSortContainer() { return $('.product_sort_container') };

    async sortBy(option) {
        await this.productSortContainer.selectByVisibleText(option);
    }

    async addToCart(){
        await this.buttonAddToCart.click();
    }


    async  getProductPrices() {
        const priceElements = await $$('.inventory_item_price');
        const prices = [];
        for (let priceElement of priceElements) {
            const text = await priceElement.getText();
            const price = parseFloat(text.replace('$', ''));
            prices.push(price);
        }
        return prices;
    }


    async  getProductNames() {
        const products = await $$('.inventory_item');
        const names = []
        for(let nameElement of products){
            const productName = nameElement.getText()
            names.push(productName)
        }
        
        return names;
    }

}



export default InventoryPage;