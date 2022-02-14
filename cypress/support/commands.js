Cypress.Commands.add("user", (user) => {
  cy.get("#username").type(user);
});

Cypress.Commands.add("password", (password) => {
  cy.get("#password").type(password);
});

Cypress.Commands.add("login", () => {
  cy.get(":nth-child(2) > .btn").click();
});

Cypress.Commands.add("close", () => {
  cy.get(".modal-content", { timeout: 5000 }).should("be.visible");
  cy.get(".btn-secondary").click();
});
