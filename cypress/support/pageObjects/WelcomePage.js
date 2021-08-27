class WelcomePage{
    constructor(){
        this.loginButton = 'button.button-login'
    }

    /**
     * 
     * @return return a web element
     * return only the web element of the login button
     */
    getLoginPage(){
        cy.get(this.loginButton).click()
    }
}
export default new WelcomePage()