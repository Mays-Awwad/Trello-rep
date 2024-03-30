class createListActions {
       clickOnAddListOption(){
         cy.findByTestId("list-composer-button").click({force:true});
         return this;
       }
       TypeInListField(ListName){
         cy.findByTestId("list-name-textarea").type(ListName);
         return this;
       }
       ClickOnAddListButton(){
          cy.findByTestId("list-composer-add-list-button").click();
          return this;
       }
}

export default createListActions ;