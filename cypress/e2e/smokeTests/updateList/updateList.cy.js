//<reference type="cypress" />
import { Given, When, Then, Before  } from "cypress-cucumber-preprocessor/steps";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createBoardAssertions from "../../../pageObjects/createBoard/assertions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";
import updateListActions from "../../../pageObjects/updateList/actions.cy";
import updateListAssertions from "../../../pageObjects/updateList/assertions.cy";


const createBoardAction=new createBoardActions();
const createBoardAssertion=new createBoardAssertions();
const boardName="My First Board";
const ListName="List1";
const ListName2="List2";
const createListAction=new createListActions();
const createListAssertion=new createListAssertions();
const updateListAction=new updateListActions();
const updateListAssertion=new updateListAssertions();


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


When("click on the List name",()=>{
    updateListAction.ClickOnListName();

})

When("update the name of the list and click enter",()=>{
    updateListAction.updateNameOfList(ListName2);
})

Then("The List will be updated successfully",()=>{
   // cy.wait(1000)
   updateListAssertion.CheckUpdateListContainValue(ListName2);
    
    
})