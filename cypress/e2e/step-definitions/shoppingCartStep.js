import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { ShoppingCartPage} from "../pages/shoppingCartPage"

//Instancias de clase
let shoppingCartPage = new ShoppingCartPage();

Given("I check the element with class {string} doesn't exist", (elementByClass) => {
    shoppingCartPage.checkElementWithClassNotExist(elementByClass);
})

Given("I check the element with class {string} is visible", (elementByClass) => {
    shoppingCartPage.checkElementWithClassIsVisible(elementByClass);
})

Given("I check the element with class inventory-item doesn't exist", () => {
    shoppingCartPage.elementWithClassInventoryItemNotExist();
})

Given("I check the element with class inventory-item is visible", () => {
    shoppingCartPage.elementWithClassInventoryItemIsVisible();
})
Given("I Find an element in a container and I check which is the first", () => {
    shoppingCartPage.findTheFirstElementInAContainer();
})

Given("I Find an element in a container and I check which is the last", () => {
    shoppingCartPage.findTheLastElementInAContainer();
})
