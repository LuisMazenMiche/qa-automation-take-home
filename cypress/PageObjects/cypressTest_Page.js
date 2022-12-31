/// <reference types= 'cypress'/>
require('@cypress/xpath');


class NoteDemo{

    //this method visits the page before each test
    vistHome(){
        beforeEach(()=>{
            cy.visit('http://localhost:3000/')
        })
    }
     //This method validated that the page loads without the note section
     currentNotesIsEmpty(){
        cy.get('ul > div').should('not.exist')
    }
    //this method adds a new note and then validates that the note is visible
    AddNewNote(note){
        cy.get('#text-input').type(note)
        cy.xpath("//button[@type='submit']").should('be.visible').click()
        cy.get('ul > div').last().should('be.visible')
    }
    //This function adds a new note, deletes it and then validates that the note was deleted
    DeleteLastNote(noteToDelete){
        cy.get('#text-input').should('be.visible').type(noteToDelete)
        cy.xpath("//button[@type='submit']").should('be.visible').click()
        cy.get('ul > div button').last().click()
        cy.get('ul > div').should('not.exist')
    }
}
export default NoteDemo;
