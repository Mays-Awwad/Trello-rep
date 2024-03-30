//<reference type="cypress" />
import { Given, When, Then, Before  } from "cypress-cucumber-preprocessor/steps";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createBoardAssertions from "../../../pageObjects/createBoard/assertions.cy";
//import createListAssertions from "../../../pageObjects/createList/assertions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";


const createBoardAction=new createBoardActions();
const createBoardAssertion=new createBoardAssertions();
const boardName="My First Board";
const ListName="List1"
const createListAction=new createListActions();
const createListAssertion=new createListAssertions;

Before(()=>{
        cy.loginToTrello();
        cy.wait(1000)
        createBoardAction.ClickOnCreateButton();
        createBoardAction.ChooseCreateBoardOption();
        createBoardAction.TypeInBoardTitleInputField(boardName);
        createBoardAction.ClickOnCreateBoardButton();
        cy.wait(1000)
        createBoardAssertion.CheckBoardNameContainValue(boardName);
        createBoardAssertion.CheckBoardNameIsVisible();
})

When("click on Add a list option",()=>{
    createListAction.clickOnAddListOption();

})

When("Types in list title input field the list name",()=>{
    createListAction.TypeInListField(ListName);
})

When("Clicks on Add list button",()=>{
    createListAction.ClickOnAddListButton();
})

Then("The List will be created successfully",()=>{
    cy.wait(1000)
    createListAssertion.CheckListNameContainValue(ListName);
    
})



