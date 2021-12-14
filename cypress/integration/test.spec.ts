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

  it("should have 1 child/product", () => {
    cy.visit("http://localhost:1234/html/product-page.html");
    cy.get(
      "#sassy > :nth-child(1) > .dogimgcontainer > .cartSymbolContainer > .bi"
    ).click();
    cy.get(".floatingcart").click();
    cy.get(".dogcontainer").children().should("have.length", 1);
  });

  /*it("Should remove item from cart", () => {
    cy.get(".bi-plus-circle").click();
    cy.get("#totalOfDogs").should("have.attr", 2);
  });*/

  it("should change class name", () => {
    cy.visit("http://localhost:1234/html/checkout.html");
    cy.get("#openFirstForm").click();
    cy.get("#openFirstForm > #openOrCloseArrow").should(
      "not.have.class",
      "bi-chevron-compact-down"
    );
  });
});
