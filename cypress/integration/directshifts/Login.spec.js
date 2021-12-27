/// reference types = "Cypress"/>

import signUp from '../PageObject/signup'

describe('Signup', function(){
    before(()=>{
        cy.fixture('Signup').then(function(data){
            this.data=data
 
        })
 
     })

    it("Signup page", function(){

        const SignUp= new signUp()
 cy.visit("https://app.directshifts.com/users/sign_up")
 
SignUp.getEmail().type(this.data.email)
SignUp.getPassword().type(this.data.password)
SignUp.getConfirmPassword().type(this.data.password)
SignUp.getFirstName().type(this.data.firstname)
SignUp.getLastName().type(this.data.lastname)
SignUp.getCheckbox().should('be.checked')
SignUp.Login().click()
   })
})