class updateTemplateAssertions {
    CheckCardContainValue(CardTitle2){
        cy.findByTestId("list-cards").first().findByTestId("card-name").should("contain",CardTitle2);
        return this;
    }

}
export default updateTemplateAssertions;