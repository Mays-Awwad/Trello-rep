//<reference type="cypress" />
import { Given, When, Then, Before, After  } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createBoardAssertions from "../../../pageObjects/createBoard/assertions.cy";

const createBoardAction=new createBoardActions();
const createBoardAssertion=new createBoardAssertions();
const boardName="My First Board";

before(()=>{
   
})
Given("the user login the trello website",()=> {
    cy.loginToTrello();
    cy.wait(1000)
    //createBoardAction.openTrelloWebsite();
})

When("Clicks on create button in navbar",()=>{
    createBoardAction.ClickOnCreateButton();
})

When("Chooses create board option",()=>{
    createBoardAction.ChooseCreateBoardOption();
})

When("Types in Board title input field the board name",()=>{
    createBoardAction.TypeInBoardTitleInputField(boardName)
})

When("Clicks on Create button",()=>{
    cy.wait(1000)
    createBoardAction.ClickOnCreateBoardButton();
    
})

Then("The Board will be created successfully",()=>{
    createBoardAssertion.CheckBoardNameContainValue(boardName);
    createBoardAssertion.CheckBoardNameIsVisible();

})