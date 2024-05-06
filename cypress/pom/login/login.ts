import {loginLocators} from "./loginLocators";

class LoginPage {

    elements = {
        loginErrorMessage: () => cy.get(loginLocators.loginErrorLocator),
        usernameBox: () => cy.get(loginLocators.usernameLocator),
        passwordBox: () => cy.get(loginLocators.passwordLocator),
        loginButton: () => cy.xpath(loginLocators.loginButtonLocator),
        confirmLogin: () => cy.xpath(loginLocators.confirmLoginLocator)
    }

    enterCredentials(username: string, password: string) {
        this.elements.usernameBox().type(username)
        this.elements.passwordBox().type(password)
    }

    open() {
        this.elements.loginButton().click();
    }

    confirmLogin() {
        this.elements.confirmLogin().click()
    }

}

export const loginPage = new LoginPage();