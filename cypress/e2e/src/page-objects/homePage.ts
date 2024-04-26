import { BasePageObject } from './index';

export class HomePage extends BasePageObject {
    // https://demowebshop.tricentis.com/

    featuredProductLaptopAddToCartButton = 'div[data-productid="31"] input.button-2.product-box-add-to-cart-button';
    clickOnFeaturedProductLaptopAddToCartButton() {
        cy.get(this.featuredProductLaptopAddToCartButton).click();
    }

    featuredProductLaptopImage = 'div[data-productid="31"] div.picture';
    clickOnFeaturedProductLaptopImage() {
        cy.get(this.featuredProductLaptopImage).click();
    }
}
