Feature: Product Filtering

  Scenario: Filter products by price (low to high)
    Given I am on the login page
    And I login with "standard_user" and "secret_sauce"
    When I filter products by "lohi"
    Then prices should be sorted from low to high
