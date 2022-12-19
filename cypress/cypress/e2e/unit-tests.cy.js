/// <reference types="Cypress" />

describe("validateUsername function", () => {
  before(() => {
    cy.visit('localhost')
  })

  it('returns fizz if the number is divisible by 3', () => {
    cy.window().then((window) => {
      const result = window.fizzbuzz(3)

      assert.equal(result, 'fizz')
    })
  })
})
