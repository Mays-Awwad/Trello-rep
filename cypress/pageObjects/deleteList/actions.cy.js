class deleteListActions {
        ClickOnRightButton(){
            cy.findByTestId("list-edit-menu-button").click({force:true});
            return this;
        }
        ClickOnArchiveTheList(){
            cy.get(".no-back .js-close-list").click();
            return this;
        }

}

export default deleteListActions;