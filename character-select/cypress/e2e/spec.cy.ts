describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.viewport(1920, 1660)
  })
})