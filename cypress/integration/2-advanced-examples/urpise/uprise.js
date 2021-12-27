/// <reference types="Cypress" />

import HomePage from '../../PageObject/HomePage'

describe('Signup', function(){

    before(()=>{
       cy.fixture('abc').then(function(data){
           this.data=data

       })

    })

    it('First test case', function(){
        const homePage=new HomePage()
    
        cy.visit("https://testing-app.uprise.co/sign-up")
        homePage.getName().type(this.data.name)
        homePage.getEmail().type(this.data.email)
        homePage.getPassword().type('Rohith123!')
        cy.get('#downshift-0-toggle-button').type('In')
        cy.get("[role='listbox']").find('li p').contains('+91').click({force:true})
        cy.get('#phone').type('98765678')
        cy.get('#accessCode').type('behappy')
        cy.get('[data-testid="sign-up-button"]').click()
        //cy.get('[type="error"]').should('have.text','This email is already in use')
      
    })

})
    