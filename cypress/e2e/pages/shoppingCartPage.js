import { CommonPage } from "./commonPage";

export class ShoppingCartPage extends CommonPage{

    checkElementWithClassNotExist (elementByClass) {
        this.getElementByClass(elementByClass).should('not.exist')
    }

    checkElementWithClassIsVisible (elementByClass) {
        this.getElementByClass(elementByClass).should('be.visible')
    }

    getElementWithClassInventoryItem () {
        cy.get(`[class="inventory-item"]`)
    }

    elementWithClassInventoryItemNotExist () {
        cy.get(`[class="inventory-item"]`).should('not.exist')
    }

    elementWithClassInventoryItemIsVisible () {
        cy.get(`[class="inventory-item"]`).should('be.visible')
    
       
}

}