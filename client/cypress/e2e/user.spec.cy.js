import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import NewHeroesPage from '../pages/newHeroesPage.js'


const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const newHeroesPage = new NewHeroesPage

describe('Cypress Heroes', () => {

  const selectorList = {
    

  }
  
  it.only('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

    newHeroesPage.fillNewHeroesDetails('Fyier', '30', '20', '15')
    
    dashboardPage.checkDashboardPage()
    dashboardPage.dashboardPanel()

    


    
    
    
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