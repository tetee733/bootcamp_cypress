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
  commonPage.checkElementContains(elementByDataTest, text);
 })

 Given("I get in the element by data test {string} and check if have the correct text {string}", (elementByDataTest, text) => {
  commonPage.checkElementHaveText(elementByDataTest, text);
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
 
 

