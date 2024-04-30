class createCardActions {
    openBoard(url){
        cy.visit(url);
        return this;
    }
    clickOnAddACardButton(){
        cy.findByTestId("list-add-card-button").first().click();
        return this;
    }
    TypeInCardTitleInputField(title){
        cy.findByTestId("list-card-composer-textarea").type(title);
        return this;
    }
    clickOnAddCardButton(){
        cy.findByTestId("list-card-composer-add-card-button").click();
        return this;
    }
}
export default createCardActions;