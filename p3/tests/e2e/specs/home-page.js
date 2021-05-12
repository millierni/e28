// https://docs.cypress.io/api/introduction/api.html

describe("HomePage", () => {
  it("Visits the homepage", () => {
    cy.visit("/");
    cy.contains("h1", "Bitcoin Mining Calculator");
  })

  it("Select a miner", () => {
    // Select a miner
    cy.get('#sel1').select('S19 [95TH]');

    // Confirm the values
    cy.get("[data-test='hashrate']").should("have.value", "95");
    cy.get("[data-test='power']").should("have.value", "3250");
    cy.get("[data-test='periods']").should("have.value", "30");
  })

  it("Calculate forecast", () => {
    // Confirm the values
    cy.contains("[data-test='forecast-hashrate']", "95000000000000");
    cy.contains("[data-test='forecast-electricity']", "5.46");

    // Confirm the length
    cy.get('[data-test="forecast-hashrate"]').its('length').should('be.gte', 30);
  })
})
