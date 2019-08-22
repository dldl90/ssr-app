context('Navigation', () => {
  const desktopNav = '[data-testid="DesktopNav"]';
  const mobileNav = '[data-testid="MobileNav"]';

  it('successfully loads the component on the page', function() {
    cy.visit('/');
  });

  it('displays the desktop version of the navigation when on desktop', () => {
    cy.viewport('macbook-13');
    cy.get(desktopNav).should('be.visible');
    cy.get(mobileNav).should('not.be.visible');
  });

  it('displays the desktop version of the navigation when on tablet', () => {
    cy.viewport('ipad-2');
    cy.get(desktopNav).should('be.visible');
    cy.get(mobileNav).should('not.be.visible');
  });

  it('displays the mobile version of the navigation when on mobile', () => {
    cy.viewport('iphone-6');
    cy.get(desktopNav).should('not.be.visible');
    cy.get(mobileNav).should('be.visible');
  });
});
