/// <reference types="Cypress" />

const { wrap } = require("module")

describe('Handlingcheckboxes', function(){

    it('My third test case', function(){
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
   cy.get('input[name="checkBoxOption1"]').check().should('be.checked').and('have.value','option1')
   cy.get('input[name="checkBoxOption1"]').uncheck().should('not.be.checked')
   cy.get('input[type="checkbox"]').check(['option2','option3'])
   cy.get('input[type="checkbox"]').uncheck(['option2','option3'])

   //static dropdown

   cy.get('select[name="dropdown-class-example"]').select('Option1').should('have.value','option1')
   
   cy.get('#autocomplete').type('ac')

   cy.get('.ui-menu-item div').each(($el, index, $list)=> {

    if($el.text()==='Macau')
    {

     cy.wrap($el).click()

    }
    cy.get('#autocomplete').should('have.value',"Macau")
 

   })
   



})
    
    
    })