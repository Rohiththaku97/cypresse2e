/// <reference types="Cypress" />



describe('Signup', function(){

    it('First test case', function(){
    
        cy.visit("https://testing-app.uprise.co/sign-up")
        cy.get('#name').type('test')
        cy.get("#email").type('test131690@yopmail.com')
        cy.get('#password').type('Rohith123!')
        cy.get('#downshift-0-toggle-button').type('In')
        cy.get("[role='listbox']").find('li p').contains('+91').click({force:true})
        cy.get('#phone').type('98765678')
        cy.get('#accessCode').type('behappy')
        cy.get('[data-testid="sign-up-button"]').click()
        cy.get('[type="error"]').should('have.text','This email is already in use')
      
    })

})
    