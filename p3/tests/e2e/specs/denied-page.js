// https://docs.cypress.io/api/introduction/api.html

describe("DeniedPage", () => {
  it("Go to addpage without log in", () => {
    cy.visit("/add");
    cy.contains("[data-test='denied']", "Access Denied");
  })
})