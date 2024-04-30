//<reference type="cypress" />

import { Given, Then, When, Before, After, And } from "cypress-cucumber-preprocessor/steps"
import deleteCardActions from "../../../pageObjects/DeleteCard/actions.cy";
import deleteCardAssertions from "../../../pageObjects/DeleteCard/assertions.cy";
import {APIKey,APIToken} from "../../../support/constants.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";

const deleteCardAction=new deleteCardActions();
const deleteCardAssertion=new deleteCardAssertions();
const dataUtils=new sharedDataUtils();

const boardName="MyBoard";
const CardTitle="card1";
const listName="List1";
let boardUrl,boardId,listId;


Before(()=>{
    cy.loginToTrello();
    dataUtils.createBoard(boardName).then((resp)=>{
        //cy.log(resp);
       boardUrl=resp.body.url;
       boardId=resp.body.id;
       dataUtils.createList(boardId,listName).then((resp)=>{
           listId=resp.body.id;
           dataUtils.createCard(listId,CardTitle);
       })
     })
})

Given("The user navigate to the boardName",()=> {
    deleteCardAction.openBoard(boardUrl);
    cy.screenshot({capture:"fullPage"});

})

When("Click on the name of card",()=>{
     deleteCardAction.ClickOnNameOfCard();

})

When("Click on Archive button",()=>{
     
    deleteCardAction.ClickOnArchiveButton();

})

Then("The card will be deleted successfully",()=>{
   deleteCardAssertion.CheckDeleteCard(CardTitle);
    

})

After(()=> {
    cy.wait(3000);
    dataUtils.deleteBoard(boardId);
  })
