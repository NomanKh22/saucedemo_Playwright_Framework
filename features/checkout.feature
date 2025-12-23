Feature: Checkout Flow

  Scenario Outline: Complete checkout flow
    Given I am on the login page
    And I login with "<username>" and "<password>"
    When I add the first product to the cart
    And I go to the cart
    And I proceed to checkout
    And I fill checkout info with "<firstName>", "<lastName>", and "<postalCode>"
    Then I should see item total "<itemTotal>"
    And I should see tax "<tax>"
    And I should see total "<total>"
    When I finish checkout
    Then I should see success message "Thank you for your order!"

    Examples:
      | username      | password     | firstName | lastName | postalCode | itemTotal | tax   | total   |
      | standard_user | secret_sauce | John      | Doe      | 12345      | Item total: $29.99 | Tax: $2.40 | Total: $32.39 |
