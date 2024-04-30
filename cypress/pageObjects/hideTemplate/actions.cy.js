class hideTemplateActions {
    openBoard(url){
        cy.visit(url);
        return this;
    }
    clickOnCardTemplateName(){
        cy.findByTestId("list-cards").first().findByTestId("card-name").click();
        return this;
    }
    clickOnHideFromList(){
        cy.get(".js-archive-card").contains("Hide from list").click({force:true});
        cy.get('[aria-label="Close dialog"]').click();
        return this;
    }
}
export default hideTemplateActions; 