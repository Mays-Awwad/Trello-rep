class deleteCardActions {
    openBoard(url){
        cy.visit(url);
        return this;
    }

    ClickOnNameOfCard(){
        cy.wait(3000);
        cy.findByTestId("list-cards").first().findByTestId("card-name").click();
        return this;
    }

    ClickOnArchiveButton(){
        cy.get(".js-archive-card").contains("Archive").click({force:true});
        cy.get('[aria-label="Close dialog"]').click({force:true});
        return this;
    }

}
export default deleteCardActions;