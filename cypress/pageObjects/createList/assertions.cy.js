class createListAssertions {
    CheckListNameContainValue(ListName){
        cy.findByTestId("list-name").should("contain",ListName);
        return this;
        
    }
}
export default createListAssertions;