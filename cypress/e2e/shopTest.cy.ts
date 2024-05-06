import {loginPage} from "../pom/login/login";
import {itemPage} from "../pom/item/itemPage";
import itemAssertions from "../pom/item/itemAssertions";

describe('Login Test', () => {
    it('should search item', () => {
        cy.fixture('login-successful').then(login => {
                loginPage.open()
                loginPage.enterCredentials(login.username, login.password)
                loginPage.confirmLogin()
                itemPage.searchItem("Viva Glam Lipstick" + "\n")
                itemAssertions.assertProductDescription("It's a gaga-glamorous look at our abiding passion")
            }
        )
    })
});