class NewNotePage{
    constructor (){
        this.addNewButton = '.btn-primary'
        this.titleField = 'input[type = text]'
        this.descriptionField = 'textarea[class = form-control]'
        this.addButton = '.btn-lg:nth-child(1)'
        this.cancelButton = 'button.btn-default'
        this.errorMessage = '#note-error-message'
        this.list = 'a.list-group-item'
        
    }
        
    /**
     * 
     * @param title valid title for a note
     * @param description valid description for a note
     * 
     * Method that creates new notes with title and description
     * Validations to avoid empty fields also included
     */
    creatingNotes (title, description){
        cy.get(this.addNewButton).click()

        if(title !== '')
            cy.get(this.titleField).clear().type(title)
        else
            cy.get(this.titleField).should('be.empty')

        if(description !== '')
            cy.get(this.descriptionField).clear().type(description)

        cy.get(this.addButton).click()
    
    }
    /**
     * 
     * Method that iterates on the list of notes and
     * get its length property
     */
    getListLength(){
        const listLength = Cypress.$(this.list).length
        
        //const length = cy.get(this.list).length
        return listLength
    }
    /**
     * 
     * @return return a web element
     * return only the web element of the title input
     */
    getNoteTitle(){
        return cy.get(this.titleField)
    }
    /**
     * 
     * @return return a web element
     * return only the error message box
     */
    getErrorMessage(){
        return cy.get(this.errorMessage)
    }
    /**
     * 
     * Method to click on the "Cancel" button
     * in "Add Note" page
     */
    getCancelButton(){
        cy.get(this.cancelButton).click()
    }
    /**
     * 
     * @param title valid title for a note
     * @param description valid description for a note
     * 
     * Method that attempts to create new note but it gets cancelled
     * Validations to avoid empty fields also included in this method
     */
    cancellingNote (title, description){
        cy.get(this.addNewButton).click()
        //Validations to catch when either of fields are empty
        if(title !== '')
            cy.get(this.titleField).clear().type(title)
        else
            cy.get(this.titleField).should('be.empty')

        if(description !== '')
            cy.get(this.descriptionField).clear().type(description)

        cy.get(this.cancelButton).click()
    }
    /**
     * 
     * @param title valid title for a note
     * @param description valid description for a note
     * 
     * Method that edits a note already created
     * Validations to avoid empty fields also included in this method
     */
    editingNote(title, description){
        if(title !== '')
            cy.get(this.titleField).type(title)

        if(description !== '')
            cy.get(this.descriptionField).type(description)

        cy.get(this.addButton).click()
    }

}
export default new NewNotePage();