import { Given } from "cypress-cucumber-preprocessor/steps";
import { login } from "../Pages/loginPage";

Given("I open page", () => {
  cy.visit("/");
});
