class deleteCardAssertions {
    CheckDeleteCard(CardName){
        cy.get('[aria-label="Show menu"]').click();
        cy.get(".js-open-archive").click();
        cy.contains("Switch to lists").click();
        cy.contains("Switch to cards").click();
        cy.findByTestId("trello-card").findByTestId("card-name").should("contain",CardName);
        
        return this;
    }

}
export default deleteCardAssertions;