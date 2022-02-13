/// <reference types="cypress" />

describe("Rewards Dashboard - real request", () => {
  beforeEach(() => {
    cy.visit("/rewards");
  });
  // REAL REQUEST
  it("should display a list of rewards", () => {
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "850 points for fasting for 5 days straight");
  });
});

describe("Rewards Dashboard - mocked response", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:4000/rewards", {
      fixture: "rewards.json",
    });
    cy.visit("/rewards");
  });

  // MOCK
  it("should display a list of rewards with mock", () => {
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "850 points for fasting for 5 days straight");
  });
});
