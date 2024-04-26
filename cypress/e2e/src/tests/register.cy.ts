import { BaseSpec } from './baseSpec';

let baseSpec = new BaseSpec();
let accountData;

describe('register', () => {
    beforeEach(() => {
        baseSpec.registerPage.show('/register');
        accountData = baseSpec.accountsTestData.getAccountData();
    });

    it('user tries to register an account', () => {
        baseSpec.registerPage.register(accountData.maleGender, accountData.firstName, accountData.lastName, accountData.email, accountData.password, accountData.password);
        cy.get(baseSpec.registerPage.successfulRegistrationMessage).should('contain.text', 'Your registration completed');
        baseSpec.registerPage.clickOnContinueButton();
        cy.url().should('equal', Cypress.config('baseUrl'));
    });

    it('validate proper data is saved after registering', () => {
        baseSpec.registerPage.register(accountData.maleGender, accountData.firstName, accountData.lastName, accountData.email, accountData.password, accountData.password);
        baseSpec.registerPage.clickOnCustomerInfoLink();
        cy.get(baseSpec.registerPage.maleGenderCheckbox).should('have.attr', 'value', accountData.maleGender);
        cy.get(baseSpec.registerPage.firstNameInputField).should('have.attr', 'value', accountData.firstName);
        cy.get(baseSpec.registerPage.lastNameInputField).should('have.attr', 'value', accountData.lastName);
        cy.get(baseSpec.registerPage.emailInputField).should('have.attr', 'value', accountData.email);
    });

    it('user tries to register without providing a first name', () => {
        baseSpec.registerPage.enterTextInLastNameInputField(accountData.lastName);
        baseSpec.registerPage.enterTextInEmailInputField(accountData.email);
        baseSpec.registerPage.enterTextInPasswordInputField(accountData.password);
        baseSpec.registerPage.enterTextInConfirmPasswordInputField(accountData.password);
        baseSpec.registerPage.clickOnRegisterButton();
        cy.contains('span', 'First name is required.').should('exist');
    });

    it('user tries to register with a password shorther than six characters', () => {
        baseSpec.registerPage.enterTextInFirstNameInputField(accountData.firstName);
        baseSpec.registerPage.enterTextInLastNameInputField(accountData.lastName);
        baseSpec.registerPage.enterTextInEmailInputField(accountData.email);
        baseSpec.registerPage.enterTextInPasswordInputField('short');
        baseSpec.registerPage.enterTextInConfirmPasswordInputField('short');
        cy.contains('span', 'The password should have at least 6 characters.').should('exist');
    });

    it('user tries to register with an email that is already registered', () => {
        baseSpec.registerPage.register(accountData.maleGender, accountData.firstName, accountData.lastName, accountData.email, accountData.password, accountData.password);
        baseSpec.registerPage.clickOnLogoutButton();
        baseSpec.registerPage.clickRegisterButtonPage();
        baseSpec.registerPage.register(accountData.maleGender, accountData.firstName, accountData.lastName, accountData.email, accountData.password, accountData.password);
        cy.contains('li', 'The specified email already exists').should('exist');
    });
});
