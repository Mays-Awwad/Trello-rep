class hideTemplateAssertions{
    CheckHideCardTemplateFromList(cardTemplateName){
        cy.get('[aria-label="Show menu"]').click();
        cy.get(".js-open-archive").click();
        cy.wait(3000);
       cy.get(".js-archive-items").find(".amUfYqLTZOvGsn").should("contain",cardTemplateName);
        return this;
    }

}
export default hideTemplateAssertions;