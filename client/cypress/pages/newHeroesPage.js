class NewHeroesPage {
     selectorList() {
        const selector = {
            
            createNewHeroeButton:".text-white",
            nameField:'[name="name"]',
            priceField:'[name="price"]',
            fansField:'[name="fans"]',
            savesField:'[name="saves"]',
            powersField:'select[name="powers"]',
            avatarField:'[type="file"]',
            submitButton:'.text-white',
           
        }

        return selector
    }

    fillNewHeroesDetails(name, price, fans, saves) {
        cy.get(this.selectorList().createNewHeroeButton).eq(0).click()
        cy.get(this.selectorList().nameField).type(name)
        cy.get(this.selectorList().priceField).type(price)
        cy.get(this.selectorList().fansField).type(fans)
        cy.get(this.selectorList().savesField).type(saves)
        cy.get(this.selectorList().powersField).select('Flying')
        cy.get(this.selectorList().avatarField).selectFile('Avião.jpg')
        cy.get(this.selectorList().submitButton).eq(1).click()
    }

}

 export default NewHeroesPage