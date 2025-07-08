import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'


const loginPage = new LoginPage
const dashboardPage = new DashboardPage

describe('Cypress Heroes', () => {

  const selectorList = {
   
    
    createNewHeroeButton:'.text-white',
    nameField:'[name="name"]',
    priceField:'[name="price"]',
    fansField:'[name="fans"]',
    savesField:'[name="saves"]',
    powersField:'select[name="powers"]',
    avatarField:'[type="file"]',
    submitButton:'.text-white',
    likeButton:'[data-cy="like"]',
    savesButton:'[data-cy="money"]',
    hireHeroeBox:'.shadow-lg',
    yesSavesButton:'.gap-2 > .text-white',
    pencilButton:'[data-cy="pencil"]',
    deleteHeroeButton:'[type="button"]',
    deleteHeroeBox:'.shadow-lg',
    yesDeleteHeroeButton:'.text-white',
    cyHeroesButton:'[src="/images/cyheroes-logo.svg"]'
    

    

  }
  
  it.only('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    
    
    //cy.get(selectorList.createNewHeroeButton).eq(0).click()
    //cy.get(selectorList.nameField).type('Flyier')
    //cy.get(selectorList.priceField).type(30)
    //cy.get(selectorList.fansField).type(20)
    //cy.get(selectorList.savesField).type(15)
    //cy.get(selectorList.powersField).select('Flying')
    //cy.get(selectorList.avatarField).selectFile('Avião.jpg')
    //cy.get(selectorList.submitButton).eq(1).click()
    //cy.get(selectorList.likeButton).eq(0).click()
    //cy.get(selectorList.savesButton).eq(0).click()
    //cy.get(selectorList.hireHeroeBox)
    //cy.get(selectorList.yesSavesButton).click()
    //cy.get(selectorList.pencilButton).eq(0).click()
    //cy.get(selectorList.deleteHeroeButton).click()
    //cy.get(selectorList.deleteHeroeBox)
    //cy.get(selectorList.yesDeleteHeroeButton).eq(3).click()
    //cy.get(selectorList.cyHeroesButton).click()

   

  
   
  })


  it('Login - Fail', () => {
  cy.visit('/heroes')
  cy.get(selectorList.loginButton).eq(0).click()
  cy.get(selectorList.usernameField).type(userData.userFail.username)
  cy.get(selectorList.passwordField).type(userData.userFail.password)
  cy.get(selectorList.signinButton).click()
  cy.get(selectorList.wrongCredentialAlert).contains('Invalid email or password')


  })


})