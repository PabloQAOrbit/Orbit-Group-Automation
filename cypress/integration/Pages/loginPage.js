const selector = {
  username: "#username",
  password: "#password",
  login: ":nth-child(2) > .btn",
};

function typeData(data, element) {
  cy.get(selector[element]).type(data);
}

function clickOn(element) {
  cy.get(selector[element]).click();
}

function login() {
  cy.get("#username").type("Kevin Wright");
  cy.get("#password").type("orbit");
  cy.get(":nth-child(2) > .btn").click();
}

function cornnieLogin() {
  cy.get("#username").type("Connie Vrettos");
  cy.get("#password").type("orbit");
  cy.get(":nth-child(2) > .btn").click();
}
module.exports = { typeData, clickOn, login, cornnieLogin };
