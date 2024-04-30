class moveTemplateActions {
    openBoard(url){
        cy.visit(url);
        return this;
    }

    ClickNameOfCardTemplate(){
        cy.findByTestId("list-cards").first().findByTestId("card-name").click();
        return this;
    }
    ClickAtMoveLinkButton(){
        cy.get(".u-clearfix .js-move-card").contains("Move").click({force:true});
        return this;
    }
    ChooseAnyListToMoveCardTemplate(listToMove){
       cy.get(".pop-over .form-grid").next().find(".js-select-list").select(listToMove);
        return this;
    }
    ClickAtMoveButton(){
        cy.findByTestId("move-card-popover-move-button").click({force:true});
        cy.findByTestId("CloseIcon").first().click({force:true});
        return this;
    }
}
export default moveTemplateActions;