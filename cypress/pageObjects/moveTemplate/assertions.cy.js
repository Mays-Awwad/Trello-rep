class moveTemplateAssertions{
    CheckMoveTemplate(listToMove){
         cy.findByTestId("list-name").eq(2).should("contain",listToMove)
        return this;

    }

}
export default moveTemplateAssertions;