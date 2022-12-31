/// <reference types= 'cypress'/>
//Here Im importing the Objects to the test page in order to keep the test cases as clean as posible
import NoteDemo from "../PageObjects/cypressTest_Page";

describe('QA automation take home TEST DEMO', () => {

  //First I create an object of the clas ClaseDEMO
  const master = new NoteDemo();

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  //The method visit home is called before each test
  master.vistHome()

  // The page must render correctly. this test validates that the page title and is H2 tag are visible
  it('The page must render without error', () => {
    cy.title().should('eq','React App')
    cy.get('h2').should('be.visible')
  })
  // The page must render with the note section empty
  it('Notes loads with no entries', ()=>{
    master.currentNotesIsEmpty()
  })
  // When a new note is added the note must be visible
  it('Add a new note and validate that is rendered', ()=>{
      master.AddNewNote('new Note')
  })
  // When a note gets deleted then it should not be rendered again.
  it('Note can be delete correctly', ()  =>{
    master.DeleteLastNote('Note to be deleted')
  })    
})