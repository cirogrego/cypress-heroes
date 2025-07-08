class DashboarPage {
     selectorList() {
        const selector = {
            dashboardGrid:".max-w-5xl",
        }

        return selector
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/heroes')
        cy.get(this.selectorList.dashboardGrid).should('be.visible')
    }
}
 export default DashboarPage