class MyNotesPage{
    constructor(){

        this.sampleNote = 'h4.list-group-item-heading'
        this.createdNoteTitle = 'div.list-group a'
        
        

    }
     
     /**
     * 
     * @return return a web element
     * return only the web element of the first sample note listed
     */
    firstListItem(){
        cy.get(this.sampleNote).first().click()
    }
    /**
     * 
     * @return return a web element
     * return only the last element on the note list
     */
    lastListItem() {
        cy.get(this.createdNoteTitle).each((item)=>{
            cy.wrap(item).should('be.visible')
        
        })
        return cy.get(this.createdNoteTitle).last().click()

    } 

    
}
export default new MyNotesPage();