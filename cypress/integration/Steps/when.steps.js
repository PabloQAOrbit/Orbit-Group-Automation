import { When } from "cypress-cucumber-preprocessor/steps";
import { typeData, clickOn, login } from "../Pages/loginPage";
import { clickButton } from "../Pages/homePage";

When("I type {string} in {string}", (data, element) => {
  typeData(data, element);
});

When("I click on {string} button", (element) => {
  clickOn(element);
});

When("I am login in page", () => {
  login();
});

When("I click on {string} Button", (element) => {
  clickButton(element);
});
