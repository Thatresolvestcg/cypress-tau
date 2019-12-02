/// <reference types="cypress" />
import { TodoPage } from "../page-objects/todo-page"

describe('filtering', () => {
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()

        todoPage.addTodo('Clean Room')
        todoPage.addTodo('Learn JavaScript')
        todoPage.addTodo('Use Cypress')

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('should filter "active" todos', () => {
        cy.contains('Active').click()

        cy.get('.todo-list li').should('have.length', 2)
    })

    it('should filter "completed" todos', () => {
        cy.contains('Completed').click()

        cy.get('.todo-list li').should('have.length', 1)
    })

    it('should filter "All" todos', () => {
        cy.contains('All').click()

        cy.get('.todo-list li').should('have.length', 3)
    })
})