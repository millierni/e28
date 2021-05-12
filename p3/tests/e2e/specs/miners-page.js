// https://docs.cypress.io/api/introduction/api.html

describe("MinersPage", () => {
  it("Visit minerspage", () => {
    cy.visit("/miners");
  })

  it("Show miners", () => {
    // Confirm there is a miner
    cy.contains(".brand", "Antminer");

    // Confirm content for the miner
    cy.contains(".model", "S19 [95TH]");

    // Confirm the number of miners
    cy.get('.brand').its('length').should('be.gte', 20)
    
  })  
})
