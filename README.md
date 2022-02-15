## Scorecard

# Prerequisites

npm install
npm run cy:open

click on .feature file

## Structure

+---cypress
| +---fixtures
| | user.json
| |  
| +---integration
| | +---feature
| | | scorecard.feature
| | |  
| | +---helpers
| | | tools.js
| | |  
| | +---Pages
| | | homePage.js
| | | loginPage.js
| | |  
| | \---Steps
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

\*\*This is a simple automation exercise, the first thing you should see is that it is designed in the Page object model (POM) structure.
The second thing is that we are using Javascript as a language but we also use Cucumber to facilitate dialogue between the human and the machine, so we can have a better understanding in the team with the members who do not understand programming

\*\*In the structure we are going to find different folders but I want you to focus on the cypress folder, within this, we are going to find a specific folder that is the one that will allow us to see how the project is working
Integration:
the first folder is feature in this we will find the specific files of cucumber, here we will see the instructions that we are giving to the framework, but these must have an internal code that is understood by the machine, for this we have a folder called steps, where we will find three different files, one for each type of instruction that we can find (GIVEN, WHEN, THEN), this allows us to make maintenance much simpler and more organized, within the folder we will also find pages, in this folder we will find divided each one of the pages that we will see in the tests this will again allow a simple and streamlined maintenance
