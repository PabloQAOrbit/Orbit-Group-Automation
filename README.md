## Coaching Regression

# Prerequisites

```bash
npm install
```

Install dependencies

```bash
npm run cy:open
```

click on .feature file

Cypress Open

```bash
npm run cy:run
```

Cypress run and create reports

```bash
npm run cy:generate:report
```

Create reports

## Structure

- .gitignore

  | cypress.json

  | package-lock.json

  | package.json

  | README.md
  |  
  +---cypress

  | +---fixtures

  | | user.json

  | |

  | +---integration

  | | +---feature

  | | | coaching_regression_9903.feature

  | | |

  | | +---pages

  | | | homePage.js

  | | | loginPage.js

  | | |

  | | \---steps

  | | given.steps.js

  | | then.steps.js

  | | when.steps.js

  | |

  | +---plugins

  | | index.js

  | |

  | \---support

  | commands.js

  | index.js

## About this

We have an automation of the Coaching Regression, the construction structure is based
In Page Objeb Model (POM) we will find a main Folder named Cypress, which is built with the basic structure of Cypress, inside this folder we will find the integration folder which has different folders:

Feature: this is the folder where we will find the cucumber files, here we will give the instructions to execute in our test cases

Pages: here we will have the functions that we will need in the different pages in which we are going to carry out the tests

Steps: this folder contains the three calls of cucumber, Given, When and Then and inside each file we will find the logic behind the instructions that cucumber is performing in the feature file

We will find three .json files which contain instructions for our framework to perform the tests as we want and this readme file to help better understand all the content
