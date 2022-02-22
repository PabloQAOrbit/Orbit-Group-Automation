Feature:  OA - Validate the information displayed when click on the Opportunity buttons under Non KPI

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
   
Scenario: Validate if selecting the Non KPI checkbox and close the layer the column Non-KPI is displayed
  Given I open page
  When I am login in page
  And I click on "gear" Button
  And I click on "non_kpi" Button
  And I click on "closeX" Button
  Then I Verify, if the Non-KPI column are displayed

Scenario: Validate if visibility icons are displayed on the Column header
  Given I open page
  When I am login in page
  Then I verify, if the visibility icon is displayed on the Column header to hide column

Scenario: Validate the information displayed under the Non KPI column
  Given I open page
  When I am login in page
  And I click on "gear" Button
  And I click on "non_kpi" Button
  And I click on "closeX" Button
  Then I verify, if Non KPI Commitments are displayed in the form of a button with the count / number

Scenario: Validite Hover on the Non KPI count
  Given I open page
  When I am login in page
  And I click on "gear" Button
  And I click on "non_kpi" Button
  And I click on "closeX" Button
  Then I verify, if Commitment Focus - Behaviour and Sub-Behaviour associated to the commitment should be displayed

  Scenario: Validete Click on the count open a new page
  Given I open page
  When I am login in page
  And I click on "gear" Button
  And I click on "non_kpi" Button
  And I click on "closeX" Button
  And I click on Non-KPI button
  Then I Verify, if Pillar view should be displayed with Non KPI section section in expanded state with list of all commitments

  Scenario: Validate Sign out from the application
    Given I open page
    When I am login in page
    And I click on "gear" Button
    And I click on "non_kpi" Button
    And I click on "closeX" Button
    And I click on Non-KPI button
    Then I click on profile button and I click on logout button, I verify, if I´m in login page