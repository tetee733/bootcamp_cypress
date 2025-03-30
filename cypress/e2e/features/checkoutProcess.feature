Feature: Checkout process test suite

Background:
  Given I login and keep the sesion for the standar_user

  Scenario: Complete checkout process with two products in the cart
    Given I check that the element with data-test "shopping-cart-badge" should "not.exist"
    And I click on the element with data-test "add-to-cart-sauce-labs-backpack"
    And I click on the element with data-test "add-to-cart-sauce-labs-onesie"
    And I click on the element with data-test "shopping-cart-link"
    And I get in the element by data test "cart-list" and check if contain the correct text "Sauce Labs Backpack"
    And I get in the element by data test "cart-list" and check if contain the correct text "Sauce Labs Onesie"
    And I get in the element by data test "shopping-cart-badge" and check if contain the correct text "2"
    When I click on the element with data-test "checkout"
    And I check that the url include the endpoint "checkout-step-one"
    And I fill correctly the form
    And I click on the element with data-test "continue"
    And I check that the url include the endpoint "checkout-step-two"
    And I get in the first element by data test "inventory-item" and check if have the correct name "Sauce Labs Backpack" and price "29.99"
    And I get in the last element by data test "inventory-item" and check if have the correct name "Sauce Labs Onesie" and price "7.99"
    And I click on the element with data-test "finish"
    Then I check that the url include the endpoint "checkout-complete"
    And I get in the element by data test "complete-header" and check if have the correct text "Thank you for your order!"
    And I click on the element with data-test "back-to-products"
    And I check that the element with data-test "shopping-cart-badge" should "not.exist"
