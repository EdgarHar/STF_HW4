import {itemPageLocators} from "./itemPageLocators";
import Chainable = Cypress.Chainable;

class ItemPage {

    getProductDescription(): Chainable<JQuery<HTMLElement>> {
        return cy.get(itemPageLocators.itemDescriptionLocator)
    }

    searchItem(name: string) {
        cy.get(itemPageLocators.searchItemLocator).type(name)
    }

}

export const itemPage = new ItemPage();