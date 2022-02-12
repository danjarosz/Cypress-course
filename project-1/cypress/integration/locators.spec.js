/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  // GET
  it("should locating elements with get", () => {
    // Get all elements by tag name
    cy.get("button");

    // Get all elements by class name
    cy.get(".btn-with-class");

    // Get all elements with specific class names
    cy.get("[class='Elements-btn btn-with-class']");
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

    // Get all elements by id
    cy.get("#btn-with-id");

    // Get all elements by sepecific attribute
    cy.get("[type='submit']");

    // Get all elements by tag name AND class
    cy.get("button.Elements-btn");

    // Get all elements by tag name AND class AND id
    cy.get("button.Elements-btn#btn-with-id");

    // Get all elements by tag name AND class AND type attribute
    cy.get("button.Elements-btn[type='submit']");

    // THE BEST WAY TO SELECT ELEMENTS
    // Get all elements by DATA TEST ID
    cy.get("[data-cy='btn-id-1']");
    // using custom function defined in cypress/support/commands.js
    cy.getByTestId("btn-id-1");
  });

  // CONTAINS - it selects only one element
  it("should location elements with contains", () => {
    // Get element by text
    cy.contains("Unique Text");

    // Get element by not unique text
    cy.contains("Not Unique Text"); // returns only the first element that matches

    // With selector
    cy.contains("[type='submit']", "Not Unique Text");
    cy.contains("form", "Not Unique Text");
    cy.get("[type='submit']").contains("Not Unique Text");
  });

  // FIND - requires parent element
  it("locating element with find", () => {
    cy.get("#form-1").find(".btn-1");
    cy.get("#form-1").find(".btn-2");
  });
});
