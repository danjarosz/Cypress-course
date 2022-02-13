/// <reference types="cypress" />

describe("Accomplishment Dashboard - real request", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });
  it("should display inappropiate content error when text or accomplish includes gireffe", () => {
    cy.get("[placeholder='Title']").type("THis is my accomplishment");
    cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe");
    cy.get('[data-cy="accomplishment-checkbox"]').click();
    cy.get("button").click();
    cy.contains("Your content is not appropriate").should("be.visible");
  });
});

describe("Accomplishment Dashboard - mocked response", () => {
  beforeEach(() => {
    cy.intercept("POST", "http://localhost:4000", (req) => {
      req.reply((res) => {
        res.send({
          msg: "Your content is not appropriate",
        });
      });
    }).as("sendInappropiateAccomplishment");

    cy.visit("/accomplishments");
  });

  it("should display inappropiate content error when text or accomplish includes giraffe (mock response)", () => {
    cy.get("[placeholder='Title']").type("THis is my accomplishment");
    cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe");
    cy.get('[data-cy="accomplishment-checkbox"]').click();
    cy.get("button").click();
    cy.wait("@sendInappropiateAccomplishment");
    cy.contains("Your content is not appropriate").should("be.visible");
  });
});
