Feature: Testing scorecard

Scenario: Login into the compass/scorecard page 
  Given the user open page 
  When the user type "Orbit Support" in "username"
  And the user type "orbit" in "password"
  And user click on "login" button
  And user click on No thanks, I´m good button on presentation box
  Then the User will be on the main page
