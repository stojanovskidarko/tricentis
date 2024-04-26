export abstract class BasePageObject {
    // this class contains DOM elements that are present on every page throughout the application

    show(url: string) {
        cy.visit(url);
    }

    registerButtonPage = '.ico-register';
    clickRegisterButtonPage() {
        cy.get(this.registerButtonPage).click();
    }

    customerInfoLink = 'a.account[href="/customer/info"]';
    clickOnCustomerInfoLink() {
        cy.get(this.customerInfoLink).first().click();
    }

    logoutButton = '.ico-logout';
    clickOnLogoutButton() {
        cy.get(this.logoutButton).click();
    }
}
