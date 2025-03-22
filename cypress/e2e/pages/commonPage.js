export class CommonPage{

  visitLink(url) {
  cy.visit(url);
  }
  
  checkUrlnotInclude(endpoint) {
    cy.url().should('not.include', endpoint);
  }

  checkUrlInclude(endpoint) {
    cy.url().should('include', endpoint);
  }

  clickButtonByDataTest(buttonByDataTest) {
    cy.get(`[data-test="${buttonByDataTest}"]`).click();
  }

  typeInTextBoxByDataTest (texBoxByDataText, text) {
    cy.get(`[data-test="${texBoxByDataText}"]`).type(text);
   }

   getElementByDataTest (elementByDataTest) {
    return cy.get(`[data-test="${elementByDataTest}"]`)
   }

   checkTextAppearInBody (text) {
    cy.get('body').should('contain', text)
   }

   checkTextNotAppearInBody (text) {
    cy.get('body').should('not.contain', text)
   }

   getElementByClass (elementByClass) {
    return cy.get(`[class="${elementByClass}"]`)
   }


   // Better practices

   clickElementByDataTest(elementByDataTest) {
    this.getElementByDataTest(elementByDataTest).click()
   }

   typeElementByDataTest(elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).type(text)
   }

   checkElementContains (elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).should('contain', text)
   }

   checkElementHaveText (elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).should('have.text', text)
   }

   checkElementNotContains (elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).should('not.contain', text)
   }

   clickElementByContent (elementByText) {
    cy.contains(elementByText).click()
   }

   clickButtonByText (text) {
    cy.get('inputbutton').contain(text).click()
   }
 }