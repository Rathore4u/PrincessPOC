@web
Feature: Access Princess.com -> search cruise results -> open cruise details
    
Scenario Outline: Search Cruise Results using widget on Princess.com's Home Page
    Given I open princess website "HOME" page
    Given I scroll to "FIND A CRUISE" section
    When I select "Month_Year" as "<MonthYear>" value
    And I select "Destination" as "<Destination>" value
    And I select "Departure Port" as "<Departure Port>" value
    And I select "Cruise Length" as "<Cruise Length>" value
    Then I press "ViewResults" button
    And I open "first" available cruise details
 Examples:
      |MonthYear|Destination|Departure Port|Cruise Length|
      |January 2018|Asia|Singapore|9 - 15 Days|
      	