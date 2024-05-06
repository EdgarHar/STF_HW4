import {loginLocators} from "./loginLocators";

class LoginPage {

    enterCredentials(username: string, password: string) {
        cy.get(loginLocators.usernameLocator).type(username)
        cy.get(loginLocators.passwordLocator).type(password)
    }

    open() {
        cy.xpath(loginLocators.loginButtonLocator).click();
    }

    confirmLogin() {
        cy.xpath(loginLocators.confirmLoginLocator).click()
    }

}

export const loginPage = new LoginPage();