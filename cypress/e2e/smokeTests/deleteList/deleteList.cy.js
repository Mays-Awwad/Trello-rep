//<reference type="cypress" />
import { Given, When, Then, Before  } from "cypress-cucumber-preprocessor/steps";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createBoardAssertions from "../../../pageObjects/createBoard/assertions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";
import deleteListActions from "../../../pageObjects/deleteList/actions.cy";
import deleteListAssertions from "../../../pageObjects/deleteList/assertions.cy";


const createBoardAction=new createBoardActions();
const createBoardAssertion=new createBoardAssertions();
const boardName="My First Board";
const ListName="List1";
const createListAction=new createListActions();
const createListAssertion=new createListAssertions();
const deleteListAction=new deleteListActions();
const deleteListAssertion=new deleteListAssertions();

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

    //for create list
    createListAction.clickOnAddListOption();
    createListAction.TypeInListField(ListName);
    createListAction.ClickOnAddListButton();
    cy.wait(1000)
    createListAssertion.CheckListNameContainValue(ListName);
    
})

When("click on the right button of the list name", ()=> {
    deleteListAction.ClickOnRightButton();

})


When("click on Archive this list option to delete list", ()=> {
    cy.wait(2000);
    deleteListAction.ClickOnArchiveTheList();
    
})

Then("The List will be deleted successfully",()=>{
    cy.wait(2000);
    deleteListAssertion.CheckDeleteListNotContainValue()
 

})