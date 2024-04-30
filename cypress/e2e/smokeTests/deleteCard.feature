Feature: Delete Card Functionality
 

    Scenario: Validate that the user can delete an existing card
         Given The user navigate to the boardName 
         When Click on the name of card 
         And Click on Archive button
         Then The card will be deleted successfully