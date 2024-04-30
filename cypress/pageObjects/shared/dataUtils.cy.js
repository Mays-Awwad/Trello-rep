import {APIKey,APIToken} from "../../support/constants.cy";
class sharedDataUtils {
    createBoard=(boardName)=> {
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`);
    }
    createList=(boardId,listName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/${boardId}/lists?name=${listName}&key=${APIKey}&token=${APIToken}`);
    }
    deleteBoard=(boardId)=> {
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`);
    }
     createCard=(listId,CardName)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`,{
            name:CardName,
            isTemplate:false});
     }
     
     createCardTemplate=(listId,cardTemplateName)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`,{
            name:cardTemplateName,
            isTemplate:true});
     }
}
export default sharedDataUtils; 