import {loginPage} from "./login";

export default {
    assertLoginErrorLocator(text: string) {
        loginPage.elements.loginErrorMessage()
            .should('exist')
            .and('contain.text', text)
    }
}