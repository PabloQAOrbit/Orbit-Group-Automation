import { Given } from "cypress-cucumber-preprocessor/steps";

Given("the user open page", () => {
  cy.visit("/");
});
