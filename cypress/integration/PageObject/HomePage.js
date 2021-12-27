class HomePage
{

getName()
{
    return  cy.get('#name')
}
getEmail()
{
    return cy.get("#email")
}
getPassword()
{
    return cy.get('#password')
}
}

export default HomePage;
