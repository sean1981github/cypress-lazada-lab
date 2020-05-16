describe("Lazada", () => {
  it("visit lazada", () => {
    cy.visit("https://www.lazada.sg/");
    cy.viewport(1280, 750);
  });
  it("click on electronic device", () => {
    cy.contains("Electronic Devices").click();
  });
  it("click on Tablet", () => {
    cy.contains("Tablets").click();
  });
  it("click on Apple Logo", () => {
    cy.get("[href^='/shop-tablets/apple/']").click();
  });
  it("select Apple iPad Pro Wi-Fi + Cellular 11-inch", () => {
    cy.contains("Apple iPad Pro Wi-Fi + Cellular 11-inch").click();
  });
  it("select 256GB Model", () => {
    cy.get('[title="256GB"]').click();
  });
  it("should show login button after click on add to wishlist", () => {
    cy.get(".pdp-button-text").contains("Add to Wishlist").click();
    cy.contains("LOGIN").then(($el) => {
      Cypress.dom.isVisible($el); // true
    });
  });
});
