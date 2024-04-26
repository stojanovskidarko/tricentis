import { BasePageObject } from './index';

export class ProductDetailsPage extends BasePageObject {

    public addToCartButton = 'input[value="Add to cart"]';
    clickOnAddToCartButton() {
        cy.get(this.addToCartButton).first().click();
    }
}
