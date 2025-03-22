#Para comentar en un archivo .feature se hace con este símbolo #
#Esto es la descripción de la batería de test contenida en este archivo
Feature: Login test suite

Background:
#Esto es equivalente al beforeEach
 Given I visit "https://www.saucedemo.com/"
 
# Los Scenarios son los tests (lo que antes era "it")
 Scenario: login happy path
  Given I type standar user in login page
  And I type the correct password in login page
  And I check that url doesn't contain the endpoint inventory.html
  When I click on the login button
  Then I check url include the endpoint inventory.html

 Scenario: simple login
  Given I login with valid user and password

 Scenario: Better login
  Given I type the user name "standard_user"
  And I type the password "secret_sauce"
  And I check that the url doesn't include the endpoint "inventory.html"
  When I click on the button with data-test "login-button"
  Then I check that the url include the endpoint "inventory.html"

 Scenario: The very best login test
  Given I type in the text box with data test "username" the text "standard_user"
  And I type in the text box with data test "password" the text "secret_sauce"
  And I check that the url doesn't include the endpoint "inventory.html"
  When I click on the button with data-test "login-button"
  Then I check that the url include the endpoint "inventory.html"

 Scenario: Check Accepted usernames in the login page
  Given I get in the element by data test "login-credentials" and check if contain the correct text "standard_user"
  And I get in the element by data test "login-credentials" and check if contain the correct text "locked_out_user"
  And I get in the element by data test "login-credentials" and check if contain the correct text "problem_user"
  And I get in the element by data test "login-credentials" and check if contain the correct text "performance_glitch_user"
  And I get in the element by data test "login-credentials" and check if contain the correct text "error_user"
  And I get in the element by data test "login-credentials" and check if contain the correct text "visual_user"

 Scenario: Check the error: Epic sadface: Username is required in the login
  Given I type in the text box with data test "password" the text "secret_sauce" 
  And I check that the url doesn't include the endpoint "inventory.html"
  When I click on the button with data-test "login-button"
  Then I get in the element by data test "error" and check if have the correct text "Epic sadface: Username is required"

 Scenario: Check the error: Epic sadface: Password is required in the login
  Given I type in the text box with data test "username" the text "standard_user"
  And I check that the url doesn't include the endpoint "inventory.html"
  When I click on the button with data-test "login-button"
  Then I get in the element by data test "error" and check if have the correct text "Epic sadface: Password is required"

 Scenario: Check the error: Epic sadface: Username and password do not match any user in this service
  Given I type in the text box with data test "username" the text "standard_user"
  And I type in the text box with data test "password" the text "secret_sauc"
  And I check that the url doesn't include the endpoint "inventory.html"
  When I click on the button with data-test "login-button"
  Then I get in the element by data test "error" and check if have the correct text "Epic sadface: Username and password do not match any user in this service"

 Scenario: Check the error: Epic sadface: Sorry, this user has been locked out.
  Given I type in the text box with data test "username" the text "locked_out_user"
  And I type in the text box with data test "password" the text "secret_sauce"
  And I check that the url doesn't include the endpoint "inventory.html"
  When I click on the button with data-test "login-button"
  Then I get in the element by data test "error" and check if have the correct text "Epic sadface: Sorry, this user has been locked out."



