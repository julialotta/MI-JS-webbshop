/// <reference types="cypress" />
// @ts-check

describe("test for webshop", () => {
  it("It should check menu links", () => {
    cy.visit("http://localhost:1234");
    cy.viewport(600, 700);
    cy.get("#burgerCircle").click();
    cy.get("ul > :nth-child(1) > a").click();
    cy.url().should("contain", "http://localhost:1234");
    cy.get("#burgerCircle").click();
    cy.get("ul > :nth-child(2) > a").click();
    cy.url().should("contain", "http://localhost:1234/html/product-page.html");
  });

  it("should add 1 dog", () => {
    cy.visit("http://localhost:1234/html/product-page.html");
    cy.get(
      "#sassy > :nth-child(1) > .dogimgcontainer > .cartSymbolContainer > .bi"
    ).click();
    cy.get(".floatingcart").click();
    cy.get(".dogcontainer").children().should("have.length", 1);
  });

  it("Should add 3 dogs in cart, total 4 dogs", () => {
    for (let i = 0; i < 3; i++) {
      cy.get(".bi-plus-circle").click();
    }
    cy.get("#totalOfDogs").should("have.html", "4");
  });

  it("should change class name", () => {
    cy.visit("http://localhost:1234/html/checkout.html");
    cy.get("#openFirstForm").click();
    cy.get("#openFirstForm > #openOrCloseArrow").should(
      "not.have.class",
      "bi-chevron-compact-down"
    );
  });

  it("should add 1 and delete 1 product in cart", () => {
    cy.visit("http://localhost:1234/html/product-page.html");
    cy.get(
      "#sassy > :nth-child(1) > .dogimgcontainer > .cartSymbolContainer > .bi"
    ).click();
    cy.get(".floatingcart").click();
    cy.get(
      ".dogcontainer > .dogproduct > .dogimgcontainer > .crossIconContainer > .bi"
    ).click();
    cy.get("#cart").children().should("have.class", "emptyCartContainer");
  });

  it("should check total sum in cart", () => {
    cy.visit("http://localhost:1234/html/product-page.html");
    cy.get(
      "#sassy > :nth-child(1) > .dogimgcontainer > .cartSymbolContainer > .bi"
    ).click();
    cy.get(
      "#sassy > :nth-child(2) > .dogimgcontainer > .cartSymbolContainer > .bi"
    ).click();
    cy.get(".floatingcart").click();
    cy.get("#sumContainer > :nth-child(1) > #cartTotal").should(
      "have.html",
      "$1150"
    );
  });
});
