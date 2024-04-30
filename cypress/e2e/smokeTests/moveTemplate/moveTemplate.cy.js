//<reference type="cypress" />

import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import moveTemplateActions from "../../../pageObjects/moveTemplate/actions.cy";
import moveTemplateAssertions from "../../../pageObjects/moveTemplate/assertions.cy";

const dataUtils=new sharedDataUtils();
const moveTemplateAction=new moveTemplateActions();
const moveTemplateAssertion=new moveTemplateAssertions();

const boardName="MyBoard";
const CardTitle="card1";
const listName="List1";
const cardTemplateName="cardTemplate1";
const listToMove="Doing";
let boardUrl,boardId,listId;

Before(()=>{
    cy.loginToTrello();
    dataUtils.createBoard(boardName).then((resp)=>{
        //cy.log(resp);
       boardUrl=resp.body.url;
       boardId=resp.body.id;
       dataUtils.createList(boardId,listName).then((resp)=>{
           listId=resp.body.id;
           dataUtils.createCardTemplate(listId,cardTemplateName).then((resp)=>{
                cy.log(resp);
           })
       })
     })
})

Given("The user navigate to the board",()=>{
    moveTemplateAction.openBoard(boardUrl);

})


When("click at the name of card template",()=>{
    moveTemplateAction.ClickNameOfCardTemplate();

})


When("click at Move link button",()=>{
    moveTemplateAction.ClickAtMoveLinkButton();

})


When("Choose the list that you want to move the card template to it",()=>{
    moveTemplateAction.ChooseAnyListToMoveCardTemplate(listToMove);

})

When("click at Move button",()=>{
    moveTemplateAction.ClickAtMoveButton();

})

Then("The card template will be move successfully",()=>{
    moveTemplateAssertion.CheckMoveTemplate(listToMove);

})

After(()=>{
    cy.wait(3000);
    dataUtils.deleteBoard(boardId);
})