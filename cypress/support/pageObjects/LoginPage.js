
class LoginPage{
   

    constructor(){
        this.enviroment = Cypress.env('url')
        this.emailField = 'input[placeholder=Username]'
        this.passwordField = 'input[placeholder=Password]'
        this.errorMessage = '#login-error-message'
        this.loginButton = '.btn-primary'
    }

    /**
     * 
     * Method that interacts with the URL of the page
     */
   visit(){
       cy.visit(this.enviroment)
   }
    /**
     * 
     * @param username valid username to login
     * @param password valid password to login
     * 
     * Method that allows interact with the login feature
     */
    userLogin (username, password){
        if(username !== '')
        cy.get(this.emailField).type(username)

        if(password !== '')
        cy.get(this.passwordField).type(password)
        
        cy.get(this.loginButton).click()

    }
    
    /**
     * 
     * @return return a web element
     * 
     * Method that returns the web element of a error alert
     */
    getErrorMessage(){
        return cy.get(this.errorMessage)
    }

}
export default new LoginPage();
