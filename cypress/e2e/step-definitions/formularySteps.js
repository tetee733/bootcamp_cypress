import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';

// Clases importadas
import { FormularyPage } from "../pages/formularyPage";

//Instancias de clase
let formularyPage = new FormularyPage();

Given("I fill correctly the form", () => {
  formularyPage.formCorrectlyFilled();
 });