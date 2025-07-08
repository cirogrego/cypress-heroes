class LoginPage {
    selectorList() {
        const selector = {
            loginButton:"li > .undefined",
            usernameField:"[name='email']",
            passwordField:"[name='password']",
            signinButton:".text-white",
            wrongCredentialAlert:".text-red-500",
        }

        return selector
    }

    accessLoginPage() {
         cy.visit('/heroes')
    }

    loginWithUser(username,password) {
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().signinButton).click()




    }
}

export default LoginPage