import {itemPageLocators} from "./itemPageLocators";
import Chainable = Cypress.Chainable;

class ItemPage {

    elements = {
        productDescription: () => cy.get(itemPageLocators.itemDescriptionLocator),
        searchItemBox: () => cy.get(itemPageLocators.searchItemLocator)
    }

    searchItem(name: string) {
        this.elements.searchItemBox().type(name)
    }

}

export const itemPage = new ItemPage();