/// <reference types = "Cypress" />

describe("Get User FirstName and LastName", () => {
  it("random-word generator", () => {
    cy.fixture("testData.json").then((testData) => {
      const apiUrl = testData.apiUrl;
      cy.request({
        method: "GET",
        url: apiUrl,
      }).then((response) => {
        cy.writeFile("cypress/fixtures/userCredentials.json", response.body);
        expect(response.status).to.eq(200);
      });
    });
  });
});
