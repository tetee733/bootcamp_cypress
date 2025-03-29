describe("basic test", () => {

  beforeEach("visit saucedemo", () => {
    cy.visit("https://www.saucedemo.com/");

  })

  it("login happy path", () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.url().should('not.include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('not.exist');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('contain', 'Swag Labs');
    });

  it("Check accepted usernames in login", () => {
    cy.get('[data-test="login-credentials"]').should('contain', 'standard_user').and('contain', 'locked_out_user').and('contain', 'problem_user')
      .and('contain', 'performance_glitch_user').and('contain', 'error_user').and('contain', 'visual_user')
  });
  
  it("Check error Epic sadface: Username is required ", () => {
    cy.url().should('not.include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('not.exist');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
  });

  it("Check error Epic sadface: Password is required ", () => {
    cy.url().should('not.include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('not.exist');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
  });

  it("Check error Epic sadface: Username and password do not match any user in this service ", () => {
    cy.url().should('not.include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('not.exist');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauc');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  });

  it("Check error Epic sadface: Sorry, this user has been locked out. ", () => {
    cy.url().should('not.include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('not.exist');
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  });
  it("Checking product details of Sauce Labs Bolt T-Shirt and checking the shopping cart is empty", () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.url().should('not.include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('not.exist');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('contain', 'Swag Labs');
    cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').click()
    cy.url().should('include', 'inventory-item.html?id=1');
    cy.get('[data-test="back-to-products"]').click()
    cy.url().should('include', 'inventory.html');
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')

  });
  it("Checking the order price of the products ", () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.url().should('not.include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('not.exist');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('contain', 'Swag Labs');
    cy.get('[data-test="product-sort-container"]').select('lohi')
    cy.get('[data-test="inventory-list"]').find('[data-test="inventory-item"]').first().should('contain', 'Sauce Labs Onesie')
    cy.get('[data-test="inventory-list"]').find('[data-test="inventory-item"]').last().should('contain', 'Sauce Labs Fleece Jacket')

})
})