//<reference type="cypress" />
import { Given, When, Then, Before, After } from "cypress-cucumber-preprocessor/steps";
import createCardActions from "../../../pageObjects/createCard/actions.cy";
import createCardAssertions from "../../../pageObjects/createCard/assertions.cy";
import {APIKey,APIToken} from "../../../support/constants.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";


const createCardAction=new createCardActions();
const createCardAssertion=new createCardAssertions();
const dataUtils=new sharedDataUtils();
const boardName="MyBoard";
const CardTitle="card1";
const listName="List1";
//const APIKey="9f9ba5d6a3854f1a3324eba6ee111b3e";
//const APIToken="ATTA073fb389b0efb46fcba1c848acb4e509e2c69924ca2522446b89ac7ec62fdbc478C5614C";
let boardUrl,boardId;

Before(()=> {
    cy.loginToTrello();
    dataUtils.createBoard(boardName).then((resp)=>{
         //cy.log(resp);
        boardUrl=resp.body.url;
        boardId=resp.body.id;
        //cy.request("POST", `https://api.trello.com/1/boards/${boardId}/lists?name=${listName}&key=${APIKey}&token=${APIToken}`);
        dataUtils.createList(boardId,listName);
    })
    //cy.loginToTrello();

});

Given("The user navigate to the board",()=> { 
    cy.wait(3000);
      createCardAction.openBoard(boardUrl);
});

When("Click on Add a card button",()=>{
    createCardAction.clickOnAddACardButton();

});

When("Types in card title input field",()=>{
    createCardAction.TypeInCardTitleInputField(CardTitle);
    
});

When("Click on Add card button",()=>{
    createCardAction.clickOnAddCardButton();
    
});

Then("The card will be created successfully",()=>{

});

After(()=> {
  cy.wait(3000);
  //cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
  dataUtils.deleteBoard(boardId);
})