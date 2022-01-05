class Login
{

UserName()
{
    return  cy.get('#user-name')
}

Password()
{
    return cy.get('#password')
}
}

export default Login;
