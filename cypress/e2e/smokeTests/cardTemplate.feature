Feature: Card Template Functionality

    Scenario: Validate that can the user create a card template
        Given The user navigate to the board
        When Click on the right button from Add a card button
        And Click on create a new template
        And types in template title input field
        And Click on Add button
        Then The template card will be created successfully

