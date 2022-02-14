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

module.exports = { typeData, clickOn };
