import Page from './page.js';

class CheckoutPage extends Page {

    get firstNameInput() { return $("#first-name") };

    get lastNameInput() { return $("#last-name") };

    get postalCodeInput() { return $("#postal-code") };

    get buttonContinue() { return $('#continue') };

    get buttonFinish() { return $("#finish") };

    get buttonBacktoProducts() { return $("#back-to-products") };

    get errorMessage() { return $('.error-message-container') };

    async clickButtonContinue(){
        await this.buttonContinue.click();
    }

    async clickButtonFinish(){
        await this.buttonFinish.click();
    }

    async clickButtonBacktoProducts(){
        await this.buttonBacktoProducts.click();
    }

    async checkoutInformation(){
        await this.firstNameInput.setValue("Andrey");
        await this.lastNameInput.setValue("Boyarskiy");
        await this.postalCodeInput.setValue("1231313131");

    }    
}





export default CheckoutPage;