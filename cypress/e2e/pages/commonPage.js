export class CommonPage{

  visitLink(url) {
    cy.visit('https://www.max.com/es/es', {
    failOnStatusCode: false })
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

   checkElementByDataTest(elementByDataTest, assertion) {
    this.getElementByDataTest(elementByDataTest).should(assertion)
   }

   selectElementByDataTest(elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).select(text)
   }

   checkElementByDataTest2 (elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).should('contain', text)
   }

   checkElementByDataTestContains (elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).should('contain', text)
   }
   
   checkTheFirstElementByDataTestContainsTwoThings (elementByDataTest, name, price) {
    this.getElementByDataTest(elementByDataTest).first().should('contain', name).and('contain', price)
   }

   checkTheLastElementByDataTestContainsTwoThings (elementByDataTest, name, price) {
    this.getElementByDataTest(elementByDataTest).last().should('contain', name).and('contain', price)
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
   /// Función para testear accesibilidad
  testAccesibilityInScreen () {
   cy.injectAxe();
   cy.checkA11y();
  }

  testAccesibilityOnElement (elementLocator) {
    cy.injectAxe();
    cy.checkA11y(elementLocator)
  }
  interceptHBOApiCall () {
    cy.intercept('GET','**/ot_guard_logo.svg').as('hboCookies');
    cy.wait('@hboCookies', {timeout:10000}); 
  }

  interceptApiCall (apiCall) {
    cy.intercept('GET',apiCall).as('apiCallAlias');
    cy.wait('@apiCallAlias', {timeout:10000}); 
  }

  interceptApiCallMethodTimeout (method, apiCall, timeoutTime) {
    cy.intercept(method,apiCall).as('apiCallAlias');
    cy.wait('@apiCallAlias', {timeout:timeoutTime}); 
  }
 }