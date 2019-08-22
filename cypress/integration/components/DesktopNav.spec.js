context('DesktopNav Component', () => {
  it('successfully loads the page with desktop navigation', () => {
    cy.visit('/');
  });

  const desktopNav = '[data-testid="DesktopNavWrapper"]';
  const desktopNavDepartment = desktopNav + ' > li';

  describe('Displaying Desktop Navigation', () => {
    beforeEach(() => {
      cy.viewport('macbook-13');
    });

    it('should show a list of departments', () => {
      cy.get(desktopNavDepartment).should('be.visible');
    });
  });

  describe('On desktop', () => {
    const department = position => `${desktopNavDepartment}:nth-child(${position})`;
    const departmentDropDownMenu = position =>
      `${desktopNavDepartment}:nth-child(${position}) > div`;

    beforeEach(() => {
      cy.viewport('macbook-13');
    });

    describe('When selecting one department link', () => {
      it('should show dropdown menu when hovering first department', () => {
        const position = 1;
        cy.get(department(position)).trigger('mouseover');
        cy.get(departmentDropDownMenu(position)).should('be.visible');
        cy.wait(200);
        cy.get(department(position)).trigger('mouseout');
        cy.get(departmentDropDownMenu(position)).should('not.be.visible');
      });

      it('should show dropdown menu when hovering second department', () => {
        const position = 2;
        cy.get(department(position)).trigger('mouseover');
        cy.get(departmentDropDownMenu(position)).should('be.visible');
        cy.wait(200);
        cy.get(department(position)).trigger('mouseout');
        cy.get(departmentDropDownMenu(position)).should('not.be.visible');
      });

      it('should show dropdown menu when hovering third department', () => {
        const position = 3;
        cy.get(department(position)).trigger('mouseover');
        cy.get(departmentDropDownMenu(position)).should('be.visible');
        cy.wait(200);
        cy.get(department(position)).trigger('mouseout');
        cy.get(departmentDropDownMenu(position)).should('not.be.visible');
      });

      it('should show dropdown menu when hovering fourth department', () => {
        const position = 4;
        cy.get(department(position)).trigger('mouseover');
        cy.get(departmentDropDownMenu(position)).should('be.visible');
        cy.wait(200);
        cy.get(department(position)).trigger('mouseout');
        cy.get(departmentDropDownMenu(position)).should('not.be.visible');
      });
    });
  });

  describe('On tablet', () => {
    const department = position => `${desktopNavDepartment}:nth-child(${position}) > a`;
    const departmentDropDownMenu = position =>
      `${desktopNavDepartment}:nth-child(${position}) > div`;

    beforeEach(() => {
      cy.viewport('ipad-2');
    });

    describe('When pressing on one department link once', () => {
      it('should open dropdown menu when pressing on first department', () => {
        const position = 1;
        cy.get(department(position)).trigger('touchend');
        cy.get(departmentDropDownMenu(position)).should('be.visible');
        cy.wait(200);
        cy.get('body').trigger('touchend', 'top');
        cy.get(departmentDropDownMenu(position)).should('not.be.visible');
      });

      it('should open dropdown menu when pressing second department', () => {
        const position = 2;
        cy.get(department(position)).trigger('touchend');
        cy.get(departmentDropDownMenu(position)).should('be.visible');
        cy.wait(200);
        cy.get('body').trigger('touchend', 'top');
        cy.get(departmentDropDownMenu(position)).should('not.be.visible');
      });

      it('should open dropdown menu when pressing third department', () => {
        const position = 3;
        cy.get(department(position)).trigger('touchend');
        cy.get(departmentDropDownMenu(position)).should('be.visible');
        cy.wait(200);
        cy.get('body').trigger('touchend', 'top');
        cy.get(departmentDropDownMenu(position)).should('not.be.visible');
      });
    });

    describe('When pressing one department link once and pressing on another department', () => {
      it('should close previous dropdown menu and open the next dropdown menu', () => {
        const firstPosition = 1;
        const secondPosition = 3;
        cy.get(department(firstPosition)).trigger('touchend');
        cy.get(departmentDropDownMenu(firstPosition)).should('be.visible');
        cy.wait(200);
        cy.get(department(secondPosition)).trigger('touchend');
        cy.get(departmentDropDownMenu(firstPosition)).should('not.be.visible');
        cy.get(departmentDropDownMenu(secondPosition)).should('be.visible');
      });
    });
  });
});
