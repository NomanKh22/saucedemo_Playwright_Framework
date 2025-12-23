Feature: Cart Functionality

  Scenario: Verify cart is empty
    Given I am on the login page
    And I login with "standard_user" and "secret_sauce"
    When I go to the cart
    Then the cart should be empty
