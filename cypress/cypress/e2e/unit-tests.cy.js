/// <reference types="Cypress" />

describe("fizzbuzz function", () => {
  beforeEach(() => {
    cy.visit('localhost')
  })

  it('returns fizz if the number is divisible by 3', () => {
    cy.window().then((window) => {
      const result = window.fizzbuzz(3)

      assert.equal(result, 'fizz')
    })
  })

  it('returns fizz if the number is divisible by 5', () => {
    cy.window().then((window) => {
      const result = window.fizzbuzz(5)

      assert.equal(result, 'asdfasdf')
    })
  })
})
