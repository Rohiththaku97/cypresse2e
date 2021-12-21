/// <reference types="Cypress" />

describe('Myfirstprogram', function(){

    it('My first test case', function(){
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.wait(2000)

    cy.get('.search-keyword').type('pe')
    //cy.wait(6000)
    cy.get('.product:visible').should('have.length',2)

    //cy.get('.products').find('.product').should('have.length',2)

    cy.get('.products').as('prod')
    //cy.get('@prod').find('.product').eq(0).contains("ADD TO CART").click()

    cy.get('@prod').find('.product').each(($el, index, $list)=> {
        const vegtext=$el.find('h4.product-name').text()
    
   if(vegtext.includes('Grapes')){
  cy.wrap($el).find('button').click()

   

   cy.get('.cart-icon > img').click()
   cy.contains('PROCEED TO CHECKOUT').click()
   cy.contains('Place Order').click()

   
   }


     })
    
    })
    
    
    })