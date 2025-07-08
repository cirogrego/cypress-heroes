import userData from '../fixtures/userData.json'

describe('Cypress Heroes', () => {

  const selectorList = {
    loginButton:'.undefined',
    usernameField:'[name="email"]',
    passwordField:'[name="password"]',
    signinButton:'.text-white',
    dashboardGrid:'.max-w-5xl',
    wrongCredentialAlert:'.text-red-500'

  }
  
  it('Login - Success', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectorList.loginButton).eq(0).click()
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.signinButton).click()
    cy.location('pathname').should('equal', '/heroes')
    cy.get(selectorList.dashboardGrid)
  
   
  })


  it('Login - Fail', () => {
  cy.visit('http://localhost:3000/heroes')
  cy.get(selectorList.loginButton).eq(0).click()
  cy.get(selectorList.usernameField).type(userData.userFail.username)
  cy.get(selectorList.passwordField).type(userData.userFail.password)
  cy.get(selectorList.signinButton).click()
  cy.get(selectorList.wrongCredentialAlert).contains('Invalid email or password')


  })


})