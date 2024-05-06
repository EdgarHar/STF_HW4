/// <reference types="cypress" />

import {loginPage} from "../pom/login/login";
import headerAssertions from "../pom/header/headerAssertions";
import loginAssertions from "../pom/login/loginAssertions";

describe('Login Test', () => {
    it('should login successfully', () => {
        cy.fixture('login-successful').then(login => {
                loginPage.open()
                loginPage.enterCredentials(login.username, login.password)
                loginPage.confirmLogin()
                headerAssertions.assertCustomerText('Welcome back Vaspur')
            }
        )
    })

    it('should fail login', () => {
            cy.fixture('login-fail').then(login => {
                    loginPage.open()
                    loginPage.enterCredentials(login.username, login.password)
                    loginPage.confirmLogin()
                    loginAssertions.assertLoginErrorLocator('Error: Incorrect login or password provided.')
                }
            )
        }
    )
});