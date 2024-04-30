class updateTemplateActions {
    openBoard(url){
        cy.visit(url);
        return this;
    }
    ClickOnTemplateName(){
         cy.findByTestId("list-cards").first().findByTestId("card-name").click();
         return this;
    }
    ClickAtCardTitle(){
        cy.get(".window-title").find(".js-card-detail-title-input").dblclick()
        return this;
    }
    TypeOnCardTitleField(CardTitle2){
        cy.get(".window-title").find(".js-card-detail-title-input").dblclick().clear().type(CardTitle2).click({force:true});
        cy.wait(3000);
        cy.get('[aria-label="Close dialog"]').click();
        return this;
    }

}
export default updateTemplateActions;