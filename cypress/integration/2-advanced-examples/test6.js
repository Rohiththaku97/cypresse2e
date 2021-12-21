/// <reference types="Cypress" />



describe('Handlingcheckboxes', function(){

    it('My fourth test case', function(){
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.go('back')
    cy.url().should('include','rahulshetty')
//webelements

cy.get('tr td:nth-child(2)').each(($el, index, $list)=> {

        const text1= $el.text()
        if(text1.includes("Mobile Automation Testing from Scratch"))
        {

            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
          {
           const price1=price.text()
           expect(price1).to.equal('30')
          })

        }


    })

    })

})
    