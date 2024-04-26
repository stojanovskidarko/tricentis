import { BasePageObject } from './index';

export class RegisterPage extends BasePageObject {
    // https://demowebshop.tricentis.com/register

    public maleGenderCheckbox: string = '#gender-male';
    clickOnMaleGenderCheckbox() {
        cy.get(this.maleGenderCheckbox).click();
    }

    public femaleGenderCheckbox: string = '#gender-female';
    clickOnFemaleGenderCheckbox() {
        cy.get(this.femaleGenderCheckbox).click();
    }

    public firstNameInputField: string = '#FirstName';
    enterTextInFirstNameInputField(value: string): void {
        cy.get(this.firstNameInputField).clear().type(value);
    }

    public lastNameInputField: string = '#LastName';
    enterTextInLastNameInputField(value: string): void {
        cy.get(this.lastNameInputField).clear().type(value);
    }

    public emailInputField: string = '#Email';
    enterTextInEmailInputField(value: string): void {
        cy.get(this.emailInputField).clear().type(value);
    }

    public passwordInputField: string = '#Password';
    enterTextInPasswordInputField(value: string): void {
        cy.get(this.passwordInputField).clear().type(value);
    }

    public confirmPasswordInputField: string = '#ConfirmPassword';
    enterTextInConfirmPasswordInputField(value: string): void {
        cy.get(this.confirmPasswordInputField).clear().type(value);
    }

    public registerButton: string = '#register-button';
    clickOnRegisterButton() {
        cy.get(this.registerButton).click();
    }

    register(gender: string, firstName: string, lastName: string, email: string, password: string, confirmPassword: string): void {
        if (gender === 'M') {
            this.clickOnMaleGenderCheckbox();
        } else if (gender === 'F') {
            this.clickOnFemaleGenderCheckbox();
        }
        this.enterTextInFirstNameInputField(firstName);
        this.enterTextInLastNameInputField(lastName);
        this.enterTextInEmailInputField(email);
        this.enterTextInPasswordInputField(password);
        this.enterTextInConfirmPasswordInputField(confirmPassword);
        this.clickOnRegisterButton();
    }

    public successfulRegistrationMessage = '.registration-result-page .result';

    public continueButton = '.button-1.register-continue-button';
    clickOnContinueButton() {
        cy.get(this.continueButton).click();
    }
}
