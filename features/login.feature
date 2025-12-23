@smoke @regression
Feature: Login Verification

  Scenario: Login with valid user
    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I should be redirected to "/inventory.html"

  Scenario: Login with locked out user
    Given I am on the login page
    When I login with "locked_out_user" and "secret_sauce"
    Then I should see error "Epic sadface: Sorry, this user has been locked out."
