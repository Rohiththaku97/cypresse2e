/// <reference types="Cypress" />



describe('Handlingcheckboxes', function(){

    it('My eigth test case', function(){
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //cy.get('#mousehover').invoke("show")
    cy.contains('Top').click({force:true})
    cy.url().should('include','top')

    })

})
    