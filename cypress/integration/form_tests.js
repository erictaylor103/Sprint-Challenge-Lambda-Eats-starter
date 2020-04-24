import { v4 as uuid } from 'uuid'

const existingUser = 'Robert'
const name = uuid().slice(0, 5)



describe('Pizza Order Form', function(){

    it('can navigate the website locally', function(){
        cy.visit('')
        cy.url().should('include', 'localhost')
        
    })

    it('Checks if the Submit button is disabled', function(){
        cy.get('button').should('be.disabled')
    }) 

    it('Gets the name input field and adds Robert to it', function(){
        cy.get('input[name="name"]').type(name)
    })

    it('Checks (assertion) if the name input is the same as Robert', function(){
        cy.get('input[name="name"]')
            .should('have.value', name)
    })

    it('Gets the email input and types an email address in it', function(){
        cy.get('input[name="email"]').type('robert@gmail.com')
    })

    it('Gets the checkbox and checks if user can check the Pineapple checkbox', function(){
        cy.get('input[name="Pineapple"]').check()
        cy.get('input[name="Pineapple"]').should('be.checked')
    })

    it('Gets the checkbox and checks if user can check the Sprinkles checkbox', function(){
        cy.get('input[name="Sprinkles"]').check()
        cy.get('input[name="Sprinkles"]').should('be.checked')
    })

    it('Gets the checkbox and checks if user can check the Bacon checkbox', function(){
        cy.get('input[name="Bacon"]').check()
        cy.get('input[name="Bacon"]').should('be.checked')
    })

    it('Gets the checkbox and checks if user can check the Pepperoni checkbox', function(){
        cy.get('input[name="Pepperoni"]').check()
        cy.get('input[name="Pepperoni"]').should('be.checked')
    })


    it('Can submit the new customer order inputs to the database', function(){
        cy.get('input[name="name"]')
            .should('have.value', name)

        cy.get('input[name=email]')
            .should('have.value', 'mike@gmail.com')

        cy.get('input[name="Pineapple"]')
            .should('be.checked')

        cy.get('input[name="instructions"]')
            .should('have.value', 'deliver hot')

        cy.contains('Send Order')
        .click()

    })




})