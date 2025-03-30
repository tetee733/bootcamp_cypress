import { CommonPage } from "./commonPage";

export class FormularyPage extends CommonPage{

formCorrectlyFilled() {
    cy.get('[data-test="firstName"]').type('Manuel');
    cy.get('[data-test="lastName"]').type('González');
    cy.get('[data-test="postalCode"]').type(29631);
}


}    