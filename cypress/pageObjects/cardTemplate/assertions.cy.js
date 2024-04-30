class cardTemplateAssertions {
    CheckCardContainTemplateValue(templateName){
       cy.contains(templateName).should("be.visible");
       return this;
    }

}

export default cardTemplateAssertions;