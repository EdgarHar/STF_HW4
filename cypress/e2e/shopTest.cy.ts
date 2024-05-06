import {loginPage} from "../pom/login/login";
import {itemPage} from "../pom/item/itemPage";

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
    })

    it('should search item', () => {
        cy.fixture('login-successful').then(login => {
                loginPage.open()
                loginPage.enterCredentials(login.username, login.password)
                loginPage.confirmLogin()
                itemPage.searchItem("Viva Glam Lipstick" + "\n")
                itemPage.getProductDescription()
                    .should('exist')
                    .and('contain.text', "It's a gaga-glamorous look at our abiding passion")
            }
        )
    })
});