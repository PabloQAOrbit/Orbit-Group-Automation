import { When } from "cypress-cucumber-preprocessor/steps";
import { typeData, clickOn } from "../Pages/loginPage";
import { presentation } from "../Pages/homePage";

When("the user type {string} in {string}", (data, element) => {
  typeData(data, element);
});

When("user click on {string} button", (element) => {
  clickOn(element);
});

When("user click on No thanks, I´m good button on presentation box", () => {
  presentation();
});
