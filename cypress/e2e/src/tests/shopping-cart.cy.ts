import { BaseSpec } from './baseSpec';

let baseSpec = new BaseSpec();
let accountData; // todo: add type check here

describe('shopping cart', () => {
    beforeEach(() => {
        baseSpec.registerPage.show('/register');
        accountData = baseSpec.accountsTestData.getAccountData();
        baseSpec.registerPage.register(accountData.maleGender, accountData.firstName, accountData.lastName, accountData.email, accountData.password, accountData.password);
        baseSpec.homePage.show('/');
    });

    it('user tries to add a product to cart from the home page', () => {
        baseSpec.homePage.clickOnFeaturedProductLaptopAddToCartButton();
        cy.contains('p', 'The product has been added to your shopping cart').should('be.visible');
        baseSpec.shoppingCartPage.show('/cart');
        cy.get(baseSpec.shoppingCartPage.firstProductName).should('contain.text', 'Laptop');
    });

    it('user tries to add a product to cart from the product details page', () => {
        baseSpec.homePage.clickOnFeaturedProductLaptopImage();
        baseSpec.productDetailsPage.clickOnAddToCartButton();
        cy.contains('p', 'The product has been added to your shopping cart').should('be.visible');
        baseSpec.shoppingCartPage.show('/cart');
        cy.get(baseSpec.shoppingCartPage.firstProductName).should('contain.text', 'Laptop');
    });

    it('user tries to remove a product from the cart', () => {
        baseSpec.homePage.clickOnFeaturedProductLaptopAddToCartButton();
        baseSpec.shoppingCartPage.show('/cart');
        baseSpec.shoppingCartPage.checkProductRemoveCheckbox();
        baseSpec.shoppingCartPage.clickUpdateShoppingCartButton();
        cy.contains('div', 'Your Shopping Cart is empty!').should('be.visible');
    });
});
