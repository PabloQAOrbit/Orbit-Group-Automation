Feature:  OA - Validate Missed opportunities column is not displayed on default view if there are no Opportunities to display

Scenario: Validate if user is able to login into Pulse
  Given I open page
  When I type "Kevin Wright" in "username"
  And I type "orbit" in "password"
  And I click on "login" button
  Then I verify I am on Pulse page
   
Scenario: Validate if the OA Widget is present
  Given I open page
  When I am login in page
  Then I verify, if OA Widget and diplay the 30 day rolling range

Scenario: Validate if columns are displayed on the widget
  Given I open page
  When I am login in page
  Then I verify, if the column with self, team and others are displayed
  And I Verify, if the OA score are displayed
  And I Verify, if All Opportunities Options: Coached, Uncoached and Missed are displayed

Scenario: Validate if clicking the gear icon the user can see the filter options
  Given I open page
  When I am login in page
  And I click on "gear" Button
  Then I Verify, the Filter,Columns, People are displayed

Scenario: Validate if I login as user without missed opportunities the column and the checkbox is for default is unchecked 
  Given I open page
  When I am login as Cornnie
  And I click on "gear" Button
  Then I verify the Missed opportunities no is checked by default

Scenario: Validate if I login as user without missed opportunities and I check this and Missed opportunities column is displayed 
  Given I open page
  When I am login as Cornnie
  And I click on "gear" Button
  And I click on "Missed opportunities" Button
  And I click on "closeX" Button
  Then I verify, if the Missed opportunities column is displayed

Scenario: Validate if the missed opportunities column is displayed but empty
  Given I open page
  When I am login as Cornnie
  And I click on "gear" Button
  And I click on "Missed opportunities" Button
  And I click on "closeX" Button
  Then I verify, if the Missed opportunities column is empty 

Scenario: Validate Sign out from the application
  Given I open page
  When I am login as Cornnie
  And I click on "gear" Button
  And I click on "Missed opportunities" Button
  And I click on "closeX" Button
  Then I click on profile button and I click on logout button, I verify, if I´m in login page
