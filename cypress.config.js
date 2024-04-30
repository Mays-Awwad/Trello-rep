const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
 e2e: {
  //specPattern: "**/*{.feature,cy.js}",
  specPattern: "**/*.feature",

   setupNodeEvents(on, config) {
     on("file:preprocessor", cucumber());
   },
   baseUrl:"https://trello.com/",
   chromeWebSecurity:false,

   screenshotOnRunFailure :true,
   trashAssetsBeforeRuns:true,
   screenshotsFolder:"TrelloScreen",

  video:true,
  videosFolder:"TrelloVideo",
  videoCompression:30,
 },
});

