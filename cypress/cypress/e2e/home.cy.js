/// <reference types="Cypress" />

describe('home/landing page', () => {
  it('shows the title', () => {
    cy.visit('http://localhost')
    cy.get('body').should('contain.text', 'Welcome to Productive!')
  })
})