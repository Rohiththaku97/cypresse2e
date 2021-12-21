/// <reference types="Cypress" />

describe('Myfirstprogram', function(){

  before('signin', function(){
    cy.SignIn()
  })

  before(function(){
    cy.fixture('abc').then((data)=>{
         this.data1=data
  
    })



  })       
  it('Home page',function(){
      cy.contains("New Post").click();
      cy.get("input[placeholder='Article Title']").type(this.data1.name)
      cy.get(':nth-child(2) > .form-control').type("xyz")
      cy.get("textarea[placeholder='Write your article (in markdown)']").type('acya')
      cy.contains('Publish Article').click()

  })

  it('mark and unmark',function(){
    cy.get('.nav-link').contains('Singh@123').click()
    cy.contains('My Articles').should('be.visible')
    cy.get('.ion-heart').click()
    cy.contains('Favorited Articles').click()
    cy.url().should('include','favorites')
    //cy.get('.ion-heart').first().click()
    cy.reload()
    cy.contains('No articles are here... yet.').should('be.visible')
    cy.go('back')






  })
})