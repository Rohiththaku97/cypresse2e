/// <reference types="Cypress" />



describe('Handlingcheckboxes', function(){

    it('My fourth test case', function(){
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
   cy.get('input[value="radio1"]').check().should('be.checked')
   //handling pop-ups

   cy.get('#alertbtn').click()
  
   cy.on('window:alert',(abc)=>
{
expect(abc).to.equal("Hello , share this practice page and share your knowledge")

})



cy.get('#confirmbtn').click()
cy.on('window:confirm',(xyz)=>

{
expect(xyz).to.equal("Hello , Are you sure you want to confirm?")



})
})
    
    
    })