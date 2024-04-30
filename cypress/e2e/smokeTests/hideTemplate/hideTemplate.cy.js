//<reference type="cypress" />

import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy"
import hideTemplateActions from "../../../pageObjects/hideTemplate/actions.cy";
import hideTemplateAssertions from "../../../pageObjects/hideTemplate/assertions.cy";


const dataUtils=new sharedDataUtils();
const hideTemplateAction=new hideTemplateActions();
const hideTemplateAssertion=new hideTemplateAssertions();

const boardName="MyBoard";
const listName="List1";
const cardTemplateName="cardTemplate1";
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

Given("The user Navigate to the board",()=>{

    hideTemplateAction.openBoard(boardUrl);
})

When("click on the name of card template",()=>{
     hideTemplateAction.clickOnCardTemplateName();

})

When("Click on Hide from list",()=>{
    cy.wait(3000);
    hideTemplateAction.clickOnHideFromList();
})

Then("The card Template will be hide from list successfully",()=>{
    cy.wait(3000);
    hideTemplateAssertion.CheckHideCardTemplateFromList(cardTemplateName);

})
After(()=>{
    cy.wait(3000);
   dataUtils.deleteBoard(boardId);
})