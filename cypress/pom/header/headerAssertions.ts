import {headerPage} from "./headerPage";

export default {
    assertCustomerText(text: string) {
        headerPage.elements.customerText()
            .should('exist')
            .and('contain.text', text)
    }
}