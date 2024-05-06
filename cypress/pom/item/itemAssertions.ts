import {itemPage} from "./itemPage";

export default {
    assertProductDescription(text: string) {
        itemPage.elements.productDescription()
            .should('exist')
            .and('contain.text', text)
    }
}