//<reference type="cypress" />

import { After, Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import updateTemplateActions from "../../../pageObjects/updateTemplate/actions.cy";
import updateTemplateAssertions from "../../../pageObjects/updateTemplate/assertions.cy";


const dataUtils=new sharedDataUtils();
const updateTemplateAction=new updateTemplateActions();
const updateTemplateAssertion=new updateTemplateAssertions();

const boardName="MyBoard";
//const CardTitle="card1";
const listName="List1";
const cardTemplateName="cardTemplate1";
const CardTitle2="NewCardTemplate";

let boardUrl,boardId,listId,CardUrl;

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

Given("The user navigate to the BoardName",()=>{
    updateTemplateAction.openBoard(boardUrl);

})

When("Click on the Template Name",()=>{
     updateTemplateAction.ClickOnTemplateName();

})

When("Click at the top of Card Title",()=>{
    updateTemplateAction.ClickAtCardTitle();

})

When("Type In Card Title Input Field",()=>{
   updateTemplateAction.TypeOnCardTitleField(CardTitle2);

})

Then("The Name of template will be updated successfully",()=>{
   updateTemplateAssertion.CheckCardContainValue(CardTitle2);
})


After(()=>{
    cy.wait(3000);
    dataUtils.deleteBoard(boardId);
})