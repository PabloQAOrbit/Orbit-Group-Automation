import { Then } from "cypress-cucumber-preprocessor/steps";
import {
  homePageVerification,
  oaVerification,
  navPerformersVerification,
  oaScoreVerification,
  coachedOpportunities,
  gearFilterVerification,
  gearColumnsVerification,
  gearPeopleVerification,
  nonKpiVerification,
  visibilityIconsVerification,
  nonKpiInformationVerification,
  nonKpiMouseHover,
  nonKpisccVerification,
  logoutVerification,
} from "../Pages/homePage";

Then("I verify I am on Pulse page", () => {
  homePageVerification();
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

Then(
  "I verify, if Non KPI Commitments are displayed in the form of a button with the count / number",
  () => {
    nonKpiInformationVerification();
  }
);

Then(
  "I verify, if Commitment Focus - Behaviour and Sub-Behaviour associated to the commitment should be displayed",
  () => {
    nonKpiMouseHover();
  }
);

Then(
  "I Verify, if Pillar view should be displayed with Non KPI section section in expanded state with list of all commitments",
  () => {
    nonKpisccVerification();
  }
);

Then(
  "I click on profile button and I click on logout button, I verify, if I´m in login page",
  () => {
    logoutVerification();
  }
);
