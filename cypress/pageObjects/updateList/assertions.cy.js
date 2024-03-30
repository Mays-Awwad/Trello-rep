class updateListAssertions {
    CheckUpdateListContainValue(ListName2){
        cy.findByTestId("list-name").should("contain",ListName2);
        return this;
        
    }
}

export default updateListAssertions;