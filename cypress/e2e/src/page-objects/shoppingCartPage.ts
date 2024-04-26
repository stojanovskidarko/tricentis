import { BasePageObject } from './index';

export class ShoppingCartPage extends BasePageObject {
    // https://demowebshop.tricentis.com/cart

    firstProductName = '.product-name';
    firstProductRemoveCheckbox = 'input[name="removefromcart"]';
    checkProductRemoveCheckbox() {
        cy.get(this.firstProductRemoveCheckbox).check();
    }

    updateShoppingCartButton = 'input[name="updatecart"]';
    clickUpdateShoppingCartButton() {
        cy.get(this.updateShoppingCartButton).click();
    }
}
