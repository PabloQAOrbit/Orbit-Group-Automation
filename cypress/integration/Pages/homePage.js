const modal = ".modal-content";
const noThanksButton = ".btn-secondary";
const userInfo = ".sc-header--user-info";

function presentation() {
  cy.get(modal, { timeout: 5000 }).should("be.visible");
  cy.get(noThanksButton).click();
  cy.screenshot();
}

function verification() {
  cy.get(userInfo).contains("ID").should("be.visible");
}

module.exports = { verification, presentation };
