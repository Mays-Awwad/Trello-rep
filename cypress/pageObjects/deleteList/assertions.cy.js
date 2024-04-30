class deleteListAssertions {
    CheckDeleteListNotContainValue(ListName){
        cy.get('[aria-label="Show menu"]').click();
        cy.get(".js-open-archive").click();
        cy.contains("Switch to lists").click();
        cy.get(".archive-list").find(".item-name").should("contain",ListName);
        return this;
    }
} 
export default deleteListAssertions;