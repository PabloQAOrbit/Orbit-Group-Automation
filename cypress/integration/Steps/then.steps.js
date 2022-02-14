import { Then } from "cypress-cucumber-preprocessor/steps";
import { verification } from "../Pages/homePage";

Then("the User will be on the main page", () => {
  verification();
});
