Cypress.Commands.add("SignIn",function(){
    cy.visit("https://react-redux.realworld.io/#/login?_k=stohwi")
    cy.url().should('include',"https:")
    cy.get("input[type='email']").type('rohith123abc@yopmail.com')
    cy.get("input[type='password']").type('Rohith123!')
    cy.get(".btn").contains('Sign in').click();

})
