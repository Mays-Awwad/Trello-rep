class createBoardActions {
    openTrelloWebsite(){
        cy.visit("/");
        return this;
    }

    ClickOnCreateButton(){
        cy.findByTestId("header-create-menu-button").click();
        return this;
    }

    ChooseCreateBoardOption(){
        cy.findByTestId("header-create-board-button").click();
        return this;
    }
    TypeInBoardTitleInputField(boardName){
        cy.findByTestId("create-board-title-input").type(boardName);
        return this;
    }
    ClickOnCreateBoardButton(){
        cy.wait(2000)
        cy.findByTestId("create-board-submit-button").click();
        return this;
    }

}

export default createBoardActions;