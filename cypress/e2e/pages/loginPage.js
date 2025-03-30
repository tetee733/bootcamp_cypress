import { CommonPage } from "./commonPage";

const usernameLocator = '[data-test="username"]'

export class LoginPage extends CommonPage{

  typeStandarUser() {
    cy.get(usernameLocator).type('standard_user');
  }

  typeCorrectPassword() {
    cy.get('[data-test="password"]').type('secret_sauce');
  }

  checkUrlIsNotMainPage() {
    cy.url().should('not.include', 'inventory.html');
  }

  clickLoginButton() {
    cy.get('[data-test="login-button"]').click();
  }

  correctLogin() {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.url().should('not.include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('not.exist');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('contain', 'Swag Labs');
  }


  //BETTER PRACTICES


 typeUser (user) {
  cy.get('[data-test="username"]').type(user);
 }

 typePassword (password) {
  cy.get('[data-test="password"]').type(password);
 }
 
 loginKeepSession() {
  cy.session("loginSession", () => {
    cy.visit("https://www.saucedemo.com/"); // Visita la URL de inicio de sesión
    this.correctLogin()
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html"); // Verifica que se redirige a la página correcta
  });
  cy.visit("https://www.saucedemo.com/inventory.html", {
    failOnStatusCode: false,
  });
  cy.url().should("include", "/inventory.html");
}
}