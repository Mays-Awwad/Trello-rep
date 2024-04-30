class cardTemplateActions {
    openBoard(url){
        cy.visit(url);
        return this;
    }
    CLickOnRightButton(){
        cy.wait(3000);
        cy.findByTestId("TemplateCardIcon").first().click();
        return this;
    }
    ClickOnCreateNewTemplate(){
        cy.findByTestId("create-new-template-card-button").click({force:true});
        return this;
    }
    TypeInTemplateTitleInputField(templateName){
        cy.findByTestId("create-template-card-composer").type(templateName);
        return this;
    }
    ClickOnAddButton(){
        cy.findByTestId("new-template-card-submit-button").click({force:true});
        cy.wait(4000);
        cy.findByTestId("CloseIcon").first().click();
        return this;
    }
      
}

export default cardTemplateActions;