// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginToTrello",()=>{
    cy.visit("/login");
    cy.get("#username").type("maysawwad99@gmail.com");
    cy.get("#login-submit").click();
    //cy.origin("https://id.atlassian.com",()=>{
    cy.get("#password").type("MaysAwwad!20." +"{enter}");

    })

Cypress.Commands.add("findByTestId",(testId)=>{
        //cy.get(`[data-testid=${testId}]`);
       // cy.wait(2000);
        //cy.origin("https://trello.com", { args:{testId} }, ({testId}) => {
        cy.get(`[data-testid=${testId}]`);      
    //})
})