@web
Feature: Access Home Page of Princess.com and get cruise search results using find widget
    
    
 Scenario: Open Princess Website Home Page and search cruises for given input
    Given I open princess website "HOME" page
    Then I validate title and URL
    And validate all URL on "HOME" page if any broken
    
  	
Scenario Outline: Search Cruise Results using widget on Princess.com's Home Page
    Given I open princess website "HOME" page
    Given I scroll to "FIND A CRUISE" section
    When I select "Month_Year" as "<MonthYear>" value
    And I select "Destination" as "<Destination>" value
    And I select "Departure Port" as "<Departure Port>" value
    And I select "Cruise Length" as "<Cruise Length>" value
    Then I press "ViewResults" button
    And I validate First Cruise "Available"
 Examples:
      |MonthYear|Destination|Departure Port|Cruise Length|
      |June 2017|Asia|Singapore|9 - 15 Days|
      |October 2017|Australia & New Zealand|Sydney, Australia|9 - 15 Days|