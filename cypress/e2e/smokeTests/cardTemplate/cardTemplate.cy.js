//<reference type="cypress" />

import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import cardTemplateActions from "../../../pageObjects/cardTemplate/actions.cy";
import cardTemplateAssertions from "../../../pageObjects/cardTemplate/assertions.cy";


const dataUtils=new sharedDataUtils();
const cardTemplateAction=new cardTemplateActions();
const cardTemplateAssertion=new cardTemplateAssertions();
const boardName="MyBoard";
const CardTitle="card1";
const listName="List1";
const cardTemplateName="template1";
let boardUrl,boardId;

Before(()=>{
    cy.loginToTrello();
    dataUtils.createBoard(boardName).then((resp)=>{
         //cy.log(resp);
        boardUrl=resp.body.url;
        boardId=resp.body.id;
        dataUtils.createList(boardId,listName);   
})
})

Given("The user navigate to the board",()=>{
    cardTemplateAction.openBoard(boardUrl);

})

When("Click on the right button from Add a card button",()=>{
    cardTemplateAction.CLickOnRightButton();

})

When("Click on create a new template",()=>{
    cardTemplateAction.ClickOnCreateNewTemplate();
    
})

When("types in template title input field",()=>{
    cardTemplateAction.TypeInTemplateTitleInputField(cardTemplateName);
    
})

When("Click on Add button",()=>{
    cardTemplateAction.ClickOnAddButton();
    
})

Then("The template card will be created successfully",()=>{
    cy.wait(3000);
    cardTemplateAssertion.CheckCardContainTemplateValue(cardTemplateName);

})

After(()=> {
    cy.wait(3000);
    dataUtils.deleteBoard(boardId);
  })