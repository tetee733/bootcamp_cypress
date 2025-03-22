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

  it.only("Check error Epic sadface: Sorry, this user has been locked out. ", () => {
    cy.url().should('not.include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('not.exist');
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  });


})