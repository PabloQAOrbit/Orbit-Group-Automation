import { Then } from "cypress-cucumber-preprocessor/steps";
import {
  homepageVerification,
  oaVerification,
  navPerformersVerification,
  oaScoreVerification,
  coachedOpportunities,
  gearFilterVerification,
  gearColumnsVerification,
  gearPeopleVerification,
  nonKpiVerification,
  visibilityIconsVerification,
} from "../Pages/homePage";

Then("I verify I am on Pulse page", () => {
  homepageVerification();
});

Then("I verify, if OA Widget and diplay the 30 day rolling range", () => {
  oaVerification();
});

Then("I verify, if the column with self, team and others are displayed", () => {
  navPerformersVerification();
});

Then("I Verify, if the OA score are displayed", () => {
  oaScoreVerification();
});

Then(
  "I Verify, if All Opportunities Options: Coached, Uncoached and Missed are displayed",
  () => {
    coachedOpportunities();
  }
);

Then("I Verify, the Filter,Columns, People are displayed", () => {
  gearFilterVerification();
  gearColumnsVerification();
  gearPeopleVerification();
});

Then("I Verify, if the Non-KPI column are displayed", () => {
  nonKpiVerification();
});

Then(
  "I verify, if the visibility icon is displayed on the Column header to hide column",
  () => {
    visibilityIconsVerification();
  }
);
