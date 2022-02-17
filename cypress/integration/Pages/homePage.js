const pulseIcon = ".pt-3";
const oa = "cmps-coaching-component-strip > :nth-child(1) > .row > .col-12";
const widget = ".date-range";
const navPerformers = ".nav-link";
const oaScore = ".team-oa-header.oa-header";
const coachOpp = ".team-oa-header.opportunity-header";
const filter = ".oa-add-filter-sec > h1";
const pilar = ".oa-add-remove-secs.oa-add-remove-sec-1 > h1";
const people = ".oa-add-remove-sec-2 > h1";
const visibilityIcon = ".team-oa-header-icons";

const selector = {
  gear: "button.btn.filter-button",
  non_kpi: ":nth-child(5) > .custom-control > .custom-control-label",
  closeX: ".arrow_box > .close",
};

function clickButton(element) {
  cy.get(selector[element], { timeout: 20000 }).click();
}

function homePageVerification() {
  cy.get(pulseIcon, { timeout: 20000 })
    .contains("Coaching Insight")
    .should("be.visible");
}

function oaVerification() {
  cy.get(oa, { timeout: 20000 }).should("be.visible");
  cy.get(widget, { timeout: 20000 })
    .contains("30 Day Rolling")
    .should("be.visible");
}

function navPerformersVerification() {
  const navPerformersText = ["SELF", "TEAM", "OTHERS"];

  cy.wait(20000);

  navPerformersText.forEach((text) => {
    cy.get(navPerformers, { timeout: 25000 })
      .contains(text)
      .should("be.visible");
  });
}

function oaScoreVerification() {
  cy.get(oaScore, { timeout: 25000 }).contains("OA").should("be.visible");
}

function coachedOpportunities() {
  cy.get(coachOpp, { timeout: 25000 })
    .contains("Coached Opportunities")
    .should("be.visible");
  cy.get(coachOpp, { timeout: 25000 })
    .contains("Uncoached Opportunities")
    .should("be.visible");
  cy.get(coachOpp, { timeout: 25000 })
    .contains("Missed Opportunities")
    .should("be.visible");
}

function gearFilterVerification() {
  cy.get(filter).contains("Filter").should("be.visible");
}

function gearColumnsVerification() {
  cy.get(pilar).contains("Columns").should("be.visible");
}

function gearPeopleVerification() {
  cy.get(people).contains("People").should("be.visible");
}

function nonKpiVerification() {
  cy.get(coachOpp, { timeout: 25000 }).contains("Non-KPI").should("be.visible");
}

function visibilityIconsVerification() {
  cy.get(visibilityIcon, { timeout: 25000 }).should("be.visible");
}

module.exports = {
  homepageVerification,
  oaVerification,
  navPerformersVerification,
  oaScoreVerification,
  coachedOpportunities,
  clickButton,
  gearFilterVerification,
  gearColumnsVerification,
  gearPeopleVerification,
  nonKpiVerification,
  visibilityIconsVerification,
};
