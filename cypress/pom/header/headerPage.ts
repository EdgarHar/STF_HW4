import {headerLocators} from "./headerLocators";

class HeaderPage {
    elements = {
        customerText: () => cy.get(headerLocators.customerTextLocator)
    }
}

export const headerPage = new HeaderPage()