class DashboarPage {
     selectorList() {
        const selector = {
            dashboardGrid:".max-w-5xl",
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

        return selector
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/heroes')
    
    }

    dashboardPanel() {
        cy.get(this.selectorList().likeButton).eq(0).click()
        cy.get(this.selectorList().savesButton).eq(0).click()
        cy.get(this.selectorList().hireHeroeBox)
        cy.get(this.selectorList().yesSavesButton).click()
        cy.get(this.selectorList().pencilButton).eq(0).click()
        cy.get(this.selectorList().deleteHeroeButton).click()
        cy.get(this.selectorList().deleteHeroeBox)
        cy.get(this.selectorList().yesDeleteHeroeButton).eq(3).click()
        cy.get(this.selectorList().cyHeroesButton).click()
    }

}
 export default DashboarPage