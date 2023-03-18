/* eslint-disable no-undef */
describe('Pages -> Home', () => {
  it('Access select state and city', () => {
    cy.visit('/')

    cy.get('#state').select('ES')
    cy.get('#city').select('3205309')

    cy.get('[aria-label="Pesquisar"]')
      .click()
      .then(() => {
        expect(
          cy
            .url()
            .should(
              'be.equal',
              'http://127.0.0.1:5173/map?state=ES&city=3205309',
            ),
        )
      })
  })

  it('Error if all selects are empty', () => {
    cy.visit('/')

    cy.get('[aria-label="Pesquisar"]')
      .click()
      .then(() => {
        expect(cy.get('#root').contains('Estado e cidade são obrigatórios'))
      })
  })

  it('Error if city is empty', () => {
    cy.visit('/')

    cy.get('#state').select('ES')

    cy.get('[aria-label="Pesquisar"]')
      .click()
      .then(() => {
        expect(cy.get('#root').contains('Estado e cidade são obrigatórios'))
      })
  })
})
