class deleteListAssertions {
    CheckDeleteListNotContainValue(){
        cy.findByTestId("list-composer-button").should("be.visible");
        return this;
    }
} 
export default deleteListAssertions;