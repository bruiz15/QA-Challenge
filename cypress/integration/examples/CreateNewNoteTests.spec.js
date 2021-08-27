/// <reference types="Cypress" />
import LoginPage from '../../support/pageObjects/LoginPage'
import MyNotesPage from '../../support/pageObjects/MyNotesPage'
import WelcomePage from '../../support/pageObjects/WelcomePage'
import NewNotePage from '../../support/pageObjects/NewNotePage'
import {CREDENTIALS, MESSAGES} from '../../fixtures/data'
import {INFO} from '../../fixtures/notesData'


describe('Creating New Notes', function(){
    
    //Hook that runs before all test cases in this suite
    before(function(){
        LoginPage.visit()
        WelcomePage.getLoginPage()
        LoginPage.userLogin(CREDENTIALS.VALID_USER.email, CREDENTIALS.VALID_USER.password )

    })
  
    //Test which creates a Note with all fields
    it('New Note Created', function(){
        var listLength = NewNotePage.getListLength()

        NewNotePage.creatingNotes(INFO.VALID_NOTE.title, INFO.VALID_NOTE.description)
        cy.get(NewNotePage.list).should('have.length.above', listLength)
        
    })
    
    //Test wich creates a note without a description
    it('New Note with Title Only', function(){
        var listLength = NewNotePage.getListLength()

        NewNotePage.creatingNotes(INFO.VALID_NOTE.title, '')
        cy.get(NewNotePage.list).should('have.length.above', listLength)
        
    })

    //Test wich creates a note without Title
    it('New Note with Description Only', function(){
        var listLength = NewNotePage.getListLength()

        NewNotePage.creatingNotes('', INFO.VALID_NOTE.description)

        NewNotePage.getNoteTitle().should('be.empty')
        NewNotePage.getErrorMessage().should('have.text', MESSAGES.INVALID_NOTE_ERROR.message)
        NewNotePage.getCancelButton()

        cy.get(NewNotePage.list).should('not.have.length.above', listLength)

    })
    //Test wich tries to create a note with both field empty
    it('New Note with Empty Fields', function(){
        var listLength = NewNotePage.getListLength()

        NewNotePage.creatingNotes('', '')

        NewNotePage.getErrorMessage().should('have.text', MESSAGES.INVALID_NOTE_ERROR.message)
        NewNotePage.getCancelButton()

        cy.get(NewNotePage.list).should('not.have.length.above', listLength)
        
    })
    //Test wich tries to create a new note but it's cancelled 
    it ('Cancelling New Note with Inputs Filled out', function(){
        NewNotePage.cancellingNote(INFO.VALID_NOTE.title, INFO.VALID_NOTE.description)
        
    })
     //Test to edit a created note
     it ('Editing Created Note', function(){
        var listLength = NewNotePage.getListLength()

        MyNotesPage.firstListItem()
        NewNotePage.editingNote(INFO.VALID_NOTE.title, INFO.VALID_NOTE.description)

        cy.get(NewNotePage.list).should('have.length.above', listLength)
        
        
        
    })
     //Test to edit a note after creating new one
     it('Editing a Newly Note', function(){
        var listLength = NewNotePage.getListLength()

        MyNotesPage.lastListItem()
        NewNotePage.editingNote(INFO.VALID_NOTE.title, INFO.VALID_NOTE.description)

        cy.get(NewNotePage.list).should('have.length.above', listLength)
    })
    //Test to edit the title of a note after creating new one
    it('Editing the Title of a Newly Note', function(){
        var listLength = NewNotePage.getListLength()

        MyNotesPage.lastListItem()
        NewNotePage.editingNote(INFO.VALID_NOTE.title, '')

        cy.get(NewNotePage.list).should('have.length.above', listLength)
        
        
    })
    //Test to edit only the description of a note after creating new one
    it('Editing the description of a Newly Note', function(){
        var listLength = NewNotePage.getListLength()

        MyNotesPage.lastListItem()
        NewNotePage.editingNote('', INFO.VALID_NOTE.description)

        cy.get(NewNotePage.list).should('have.length.above', listLength)
        
        
    })
    
})