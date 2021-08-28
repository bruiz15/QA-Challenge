/// <reference types="Cypress" />
import LoginPage from '../../support/pageObjects/LoginPage'
import WelcomePage from '../../support/pageObjects/WelcomePage'
import {CREDENTIALS, MESSAGES} from '../../fixtures/data'


describe ('Login npmPage', function(){

     beforeEach(function(){
            LoginPage.visit()
            WelcomePage.getLoginPage()
        
        })

   it('Log in successfully', function(){
       
        LoginPage.userLogin(CREDENTIALS.VALID_USER.email, CREDENTIALS.VALID_USER.password )
        
    })
    it('Login: Empty Fields',function(){

        LoginPage.userLogin('','')
        LoginPage.getErrorMessage().should('have.text', MESSAGES.INVALID_LOGIN_ERROR.message)
        
    })
    it('Login: Invalid Email', function(){
        LoginPage.userLogin(CREDENTIALS.INVALID_USER.email, CREDENTIALS.VALID_USER.password ) 
        LoginPage.getErrorMessage().should('have.text', MESSAGES.INVALID_LOGIN_ERROR.message)
    })
    it('Login: Invalid Password', function(){
        LoginPage.userLogin(CREDENTIALS.VALID_USER.email, CREDENTIALS.INVALID_USER.password ) 
        LoginPage.getErrorMessage().should('have.text', MESSAGES.INVALID_LOGIN_ERROR.message)
    })

    
   
  
})