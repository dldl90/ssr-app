context('Mobile Navigation', () => {
  const burgerButton = '[data-testid="BurgerWrapper"]';
  const panelsWrapper = '[data-testid="PanelsWrapper"]';
  const panelOne = '[data-testid="Panel-0"]';
  const panelTwo = '[data-testid="Panel-1"]';
  const panelThree = '[data-testid="Panel-2"]';
  const firstPanelLink = '[data-testid="Panel-0-Link-0"]';
  const secondPanelLink = '[data-testid="Panel-1-Link-0"]';
  const backButton = '[data-testid="BackButton"]';
  const closeButton = '[data-testid="CloseButton"]';

  it('successfully loads the component on the page', () => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.visit('/');
    cy.viewport('iphone-6');
  });

  describe('when the mobile nav is closed', () => {
    it('should open the mobile nav on touch of the burger icon', () => {
      cy.get(panelsWrapper).should('not.be.visible');
      cy.get(burgerButton).trigger('click');
      cy.get(panelsWrapper).should('be.visible');
    });
  });

  describe('when the mobile nav is open', () => {
    it('should close the mobile nav on touch of the burger icon', () => {
      cy.get(panelsWrapper).should('not.be.visible');

      cy.get(burgerButton).trigger('click');
      cy.get(panelsWrapper).should('be.visible');

      cy.get(burgerButton).trigger('click');
      cy.get(panelsWrapper).should('not.be.visible');
    });

    it('should close the mobile nav on touch of the close link', () => {
      cy.get(burgerButton).trigger('click');
      cy.get(panelsWrapper).should('be.visible');
      cy.get(panelOne).should('be.visible');
      cy.get(closeButton).trigger('click');

      cy.get(panelsWrapper).should('not.be.visible');
      cy.get(panelOne).should('not.be.visible');
    });

    describe('navigating between panels', () => {
      it('should display second panel of sublinks and go back button on touch of a top level link', () => {
        cy.get(burgerButton).trigger('click');
        cy.get(panelOne).should('be.visible');

        cy.get(firstPanelLink).trigger('click');

        cy.get(panelTwo).should('be.visible');
        cy.get(panelOne).should('not.be.visible');
        cy.get(backButton).should('be.visible');
      });

      it('should display third panel of sublinks and go back button on touch of a second level link', () => {
        cy.get(burgerButton).trigger('click');
        cy.get(panelOne).should('be.visible');

        cy.get(firstPanelLink).trigger('click');
        // wait for transition to finish
        cy.wait(1000);
        cy.get(secondPanelLink).trigger('click');

        cy.get(panelThree).should('be.visible');
        cy.get(panelTwo).should('not.be.visible');
        cy.get(backButton).should('be.visible');
      });

      it('should display first panel of sublinks and close button on touch of the go back link', () => {
        cy.get(burgerButton).trigger('click');
        cy.get(firstPanelLink).trigger('click');
        // wait for transition to finish
        cy.wait(1000);
        cy.get(panelTwo).should('be.visible');
        cy.get(backButton).trigger('click');

        cy.get(panelOne).should('be.visible');
        cy.get(panelTwo).should('not.be.visible');
        cy.get(closeButton).should('be.visible');
      });
    });
  });
});
