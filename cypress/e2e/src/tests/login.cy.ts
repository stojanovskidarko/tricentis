import { BaseSpec } from './baseSpec';

let baseSpec = new BaseSpec();
let accountData; // todo: add type here

describe('login', () => {
    beforeEach(() => {
        baseSpec.registerPage.show('/register');
        accountData = baseSpec.accountsTestData.getAccountData();
        baseSpec.registerPage.register(accountData.maleGender, accountData.firstName, accountData.lastName, accountData.email, accountData.password, accountData.password);
        baseSpec.registerPage.clickOnLogoutButton();
        baseSpec.loginPage.show('/login');
    });

    it('user tries to login with a newly registered account', () => {
        baseSpec.loginPage.login(accountData.email, accountData.password);
        cy.get(baseSpec.loginPage.logoutButton).should('exist');
    });

    it("user tries to login with an account that doesn't exist", () => {
        baseSpec.loginPage.login(accountData.email + 'doesntexist', accountData.password + 'doesntexist');
        cy.contains('span', 'Login was unsuccessful. Please correct the errors and try again.').should('exist');
        cy.contains('li', 'No customer account found').should('exist');
    });

    it('user tries to login with a valid email and invalid password', () => {
        baseSpec.loginPage.login(accountData.email, accountData.password + 'invalid');
        cy.contains('span', 'Login was unsuccessful. Please correct the errors and try again.').should('exist');
        cy.contains('li', 'The credentials provided are incorrect').should('exist');
    });
});
