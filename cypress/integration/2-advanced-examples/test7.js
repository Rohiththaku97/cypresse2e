/// <reference types="Cypress" />



describe('fixtures', function(){
    before(function()
    {
       cy.fixture('abc').then(function(data){

        this.data=data
       })

 
    })
    

    it('My seventh test case', function(){
    cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
    cy.get('[name="name"]:nth-child(2)').type(this.data.name)
    cy.get('select').select(this.data.gender)

    

})
    
    
    })