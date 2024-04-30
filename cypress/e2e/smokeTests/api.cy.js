//<reference type="cypress" />

describe("Https Requests And Responses",()=> {
    it("Http Request and testing responses", ()=> {
        //GET Request

        cy.request("https://reqres.in/api/unknown/2").then((resp1)=> {
            cy.log(resp1)
            expect(resp1.status).to.eq(200)
            expect(resp1.body.data.name).to.contain("fuchsia rose");
        })
        cy.request("POST","https://reqres.in/api/users",{"name":"mays","job": "manager" }).then((response)=> {
            expect(response.body.name).to.contain("mays")
        })
        
        //PUT method
        cy.request("PUT","https://reqres.in/api/users/2",{"job":"leader"}).then((resp)=> {
            cy.log(resp);
            expect(resp.status).to.eq(200);
        })
    })
})