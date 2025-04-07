#Para comentar en un archivo .feature se hace con este símbolo #
#Esto es la descripción de la batería de test contenida en este archivo
@main @regression
Feature: Main test suite

Background:
#Esto es equivalente al beforeEach
 Given I visit "https://www.saucedemo.com/"
 And I login with valid user and password
 
# Los Scenarios son los tests (lo que antes era "it")
@smoke
Scenario: Checking product details of Sauce Labs Bolt T-Shirt and checking the shopping cart is empty
 Given I check that the element with data-test "shopping-cart-badge" should "not.exist"
 And I click on the element with data-test "inventory-item-sauce-labs-bolt-t-shirt-img"
 And I check that the url include the endpoint "inventory-item.html?id=1"
 And I click on the element with data-test "back-to-products"
 And I check that the url doesn't include the endpoint "inventory-item.html?id=1"
 Then I check that the element with data-test "shopping-cart-badge" should "not.exist"

Scenario: Checking the order price of the products
 Given In the element with data-test "product-sort-container" i select an option "lohi"
 And I Find an element in a container and I check which is the first
 Then I Find an element in a container and I check which is the last
