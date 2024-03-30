class updateListActions {
    ClickOnListName(){
        cy.findByTestId("list-name").click({force:true});
        return this;
    }
    updateNameOfList(ListName2){
        cy.wait(1000);
        cy.findByTestId("list-name-textarea").type(ListName2 +"{enter}")
        return this;
    }
}

export default updateListActions;