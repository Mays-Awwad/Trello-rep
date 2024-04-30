Feature: Create Card Functionality

    Scenario: validate that the user can create a new card
        Given The user navigate to the board
        When Click on Add a card button
        And  Types in card title input field
        And Click on Add card button 
        Then The card will be created successfully 