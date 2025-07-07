describe('Cypress Heroes', () => {

  const selectorList = {
    loginButton:'.undefined',
    loginField:'[name="email"]',
    passwordField:'[name="password"]',
    signinButton:'.text-white',
    sectionTitleTopBar:'a > img',
    wrongCredentialAlert:'.text-red-500'

  }
  
  it('Login - Success', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectorList.loginButton).eq(0).click()
    cy.get(selectorList.loginField).type('admin@test.com')
    cy.get(selectorList.passwordField).type('test123')
    cy.get(selectorList.signinButton).click()
    cy.location('pathname').should('equal', '/heroes')
    cy.get('a > img').should('have.attr','src','/images/cyheroes-logo.svg')
  
   
  })


  it('Login - Fail', () => {
  cy.visit('http://localhost:3000/heroes')
  cy.get(selectorList.loginButton).eq(0).click()
  cy.get(selectorList.loginField).type('admin@test.com')
  cy.get(selectorList.passwordField).type('test')
  cy.get(selectorList.signinButton).click()
  cy.get(selectorList.wrongCredentialAlert).contains('Invalid email or password')


  })


})