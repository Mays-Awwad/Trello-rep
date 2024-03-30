class createBoardAssertions {
    CheckBoardNameContainValue(boardName){
        cy.findByTestId("board-name-display").should("contain",boardName);
        return this;
    }
    CheckBoardNameIsVisible(){
        cy.findByTestId("board-name-display").should("be.visible");
        return this;
    }

}

export default createBoardAssertions;