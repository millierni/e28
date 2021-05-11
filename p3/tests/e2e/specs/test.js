// https://docs.cypress.io/api/introduction/api.html

describe("HomePage", () => {
  it("Visits the homepage", () => {
    cy.visit("/")
    cy.contains("h1", "Bitcoin Mining Calculator")
  })

  it("Show miners", () => {
    cy.visit("/miners")
    cy.contains(".brand", "Antminer")
    cy.get(".brand").should("have.length", 29)
  })
})
