// https://docs.cypress.io/api/introduction/api.html

describe("FAQPage", () => {
  it("Visit the FAQpage", () => {
    cy.visit("/FAQ");
  })

  it("Show FAQ", () => {
    // Confirm there are some content
    cy.contains("#title", "FAQ");
    cy.contains("[data-test='q1']", "What is Bitcoin ?");
  })
})
