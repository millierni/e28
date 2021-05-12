// https://docs.cypress.io/api/introduction/api.html

describe("AccountPage", () => {

  const user = {
    name: 'Jill Harvard',
    email: 'jill@harvard.edu',
    password: 'asdfasdf'
  }

  it("Visits the accountpage", () => {
    cy.visit("/account");
  })

  it("Confirm blank input field", () => {
    // Confirm the values
    cy.get("[data-test='login-email']").should("have.value", "");
    cy.get("[data-test='login-password']").should("have.value", "");
  })

  it("Enter invalid credential", () => {
    cy.get("[data-test=login-email]").clear().type(user.email);
    cy.get("[data-test=login-password]").clear().type("notvalidpassword");
    cy.get("[data-test=login-button]").click();
    cy.contains("These credentials do not match our records");
  })

  it("Log In, go to the addpage and verify the fields", () => {
    // Log In
    cy.get("[data-test=login-email]").clear().type(user.email);
    cy.get("[data-test=login-password]").clear().type(user.password);
    cy.get("[data-test=login-button]").click();
    cy.contains("[data-test='name']", user.name);

    // Visit the addpage
    cy.visit("/add");
    cy.contains("#title", "Add Miner");

    // Verify that the fields are blank
    cy.get("#brand").should("have.value", "");
    cy.get("#model").should("have.value", "");
    cy.get("#hashingAlgorithm").should("have.value", "");
    cy.get("#hashrate").should("have.value", "0");
    cy.get("#power").should("have.value", "0");

    // Add wrong data
    cy.get("#brand").clear().type("a");
    cy.get("#hashingAlgorithm").clear().type("test");
    cy.get("#hashrate").clear().type("-1");
    cy.get("#power").clear().type("-1");
    cy.get("[data-test='addminer']").click();
    cy.contains(".alert-warning", "Please fill all the required fields.");

    // Add a miner
    cy.get("#brand").clear().type("test");
    cy.get("#model").clear().type("test");
    cy.get("#hashingAlgorithm").clear().type("test");
    cy.get("#hashrate").clear().type("100");
    cy.get("#power").clear().type("1000");
    cy.get("[data-test='addminer']").click();
    cy.contains(".alert-success", "The miner was added successfully.");

    // Logout
    cy.visit("/account");
    cy.get('[data-test=logout-button]').click();
  })
})
