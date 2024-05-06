/// <reference types="cypress" />

import {loginPage} from "../pom/login/login";
import {headerLocators} from "../pom/header/headerLocators";
import {loginLocators} from "../pom/login/loginLocators";

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
    })

    it('should login successfully', () => {
        cy.fixture('login-successful').then(login => {
                loginPage.open()
                loginPage.enterCredentials(login.username, login.password)
                loginPage.confirmLogin()
                cy.get(headerLocators.customerTextLocator)
                    .should('exist')
                    .and('contain.text', 'Welcome back Vaspur')
            }
        )
    })

    it('should fail login', () => {
            cy.fixture('login-fail').then(login => {
                    loginPage.open()
                    loginPage.enterCredentials(login.username, login.password)
                    loginPage.confirmLogin()
                    cy.get(loginLocators.loginErrorLocator)
                        .should('exist')
                        .and('contain.text', 'Error: Incorrect login or password provided.')

                }
            )
        }
    )
});