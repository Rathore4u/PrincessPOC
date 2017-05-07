@api
Feature: Validate few sample repsonse parameters from one of the API hosted at Princess.com
    
    
 Scenario: User calls rest api getJsonProducts
    When user calls rest api "searchWidget"
    Then user gets status code value as "200"
    And response validates with given schema
    And get response header size