import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { CommonPage} from "../pages/commonPage"

//Instancias de clase
let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
  commonPage.visitLink(url);
 });

 Given("I check that the url doesn't include the endpoint {string}", (endpoint) => {
  commonPage.checkUrlnotInclude(endpoint);
 });

 Given("I check that the url include the endpoint {string}", (endpoint) => {
  commonPage.checkUrlInclude(endpoint);
 });
 
 Given("I click on the button with data-test {string}", (buttonByDataTest) => {
  commonPage.clickButtonByDataTest(buttonByDataTest);
 });

 Given("I type in the text box with data test {string} the text {string}", (texBoxByDataText, text) => {
  commonPage.typeInTextBoxByDataTest(texBoxByDataText, text);
 });

 Given("I get in the element by data test {string} and check if contain the correct text {string}", (elementByDataTest, text) => {
  commonPage.checkElementByDataTestContains(elementByDataTest, text);
 })

 Given("I get in the element by data test {string} and check if have the correct text {string}", (elementByDataTest, text) => {
  commonPage.checkElementHaveText(elementByDataTest, text);
 })

 Given("I get in the first element by data test {string} and check if have the correct name {string} and price {string}", (elementByDataTest, name, price) => {
  commonPage.checkTheFirstElementByDataTestContainsTwoThings(elementByDataTest, name, price);
 })

 Given("I get in the last element by data test {string} and check if have the correct name {string} and price {string}", (elementByDataTest, name, price) => {
  commonPage.checkTheLastElementByDataTestContainsTwoThings(elementByDataTest, name, price);
 })

 Given("I check if the body contain a text {string}", (text) => {
  commonPage.checkTextAppearInBody(text);
 })

 Given("I check if the body not contain a text {string}", (text) => {
  commonPage.checkTextNotAppearInBody(text);
 })

 Given("I get in the element by class {string}", (elementByClass) => {
  commonPage.getElementByClass(elementByClass);
 })

 Given("I check that the element with data-test {string} should {string}", (elementByDataTest, assertion) => {
  commonPage.checkElementByDataTest(elementByDataTest, assertion);
 })
 
 Given("I click on the element with data-test {string}", (elementByDataTest) => {
  commonPage.clickElementByDataTest(elementByDataTest);
 });

 Given("In the element with data-test {string} i select an option {string}", (text, elementByDataTest) => {
  commonPage.selectElementByDataTest(text, elementByDataTest);
 });
 // Steps para testear accesibilidad

 Given('I test the accesibility in all the screen', () => {
  commonPage.testAccesibilityInScreen()
})

Given('I test the accesibility on the element with locator {string}', (elementLocator) => {
  commonPage.testAccesibilityOnElement(elementLocator)
})
 
//-------------------------------------------------------------------------------------------//
  // Steps para intercept

Given('I wait until the api call for the cookies in HBO page', () => {
  commonPage.interceptHBOApiCall()
})

Given('I wait until the api call {string}', (interceptApiCall) => {
  commonPage.interceptApiCall(interceptApiCall)
})


Given('I wait until the api call with method {string}, endpoint {string} for the max time {int}', (method, interceptApiCall, timeoutTime) => {
  commonPage.interceptApiCallMethodTimeout(method, interceptApiCall, timeoutTime)
})

//-------------------------------------------------------------------------------------------//
  // Steps para intercept

Given('I wait until the api call for the cookies in HBO page', () => {
  commonPage.interceptHBOApiCall()
})
  
Given('I wait until the api call {string}', (interceptApiCall) => {
  commonPage.interceptApiCall(interceptApiCall)
})
  
  
Given('I wait until the api call with method {string}, endpoint {string} for the max time {int}', (method, interceptApiCall, timeoutTime) => {
  commonPage.interceptApiCallMethodTimeout(method, interceptApiCall, timeoutTime)
})
 

