import { BasePageObject } from './index';

export class LoginPage extends BasePageObject {
    // https://demowebshop.tricentis.com/login

    public emailInputField: string = '#Email';
    enterTextInEmailInputField(value: string) {
        cy.get(this.emailInputField).clear().type(value);
    }

    public passwordInputField: string = '#Password';
    enterTextInPasswordInputField(value: string) {
        cy.get(this.passwordInputField).clear().type(value);
    }

    public loginButton: string = '.button-1.login-button';
    clickOnLoginButton() {
        cy.get(this.loginButton).click();
    }

    login(email: string, password: string) {
        this.enterTextInEmailInputField(email);
        this.enterTextInPasswordInputField(password);
        this.clickOnLoginButton();
    }
}
