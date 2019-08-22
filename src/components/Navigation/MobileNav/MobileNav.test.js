import React from 'react';
import { shallow } from 'enzyme';
import navItems from '../test/navItemsMock';

import MobileNav from './MobileNav';
import { BurgerWrapper } from './MobileNav.style';
import { PanelContainer, Burger } from './components';
import MobileTracking from './tracking/MobileTracking';

jest.mock('./tracking/MobileTracking');

describe('MobileNav', () => {
  describe('on first load', () => {
    const component = shallow(<MobileNav />);
    const burgerMenu = component.find(BurgerWrapper);

    it('should render a burger icon', () => {
      expect(component.find(Burger).length).toEqual(1);
    });

    it('should not render the mobile nav', () => {
      expect(component.find(PanelContainer)).toHaveLength(0);
    });

    it('should render burger menu with a classname to accomodate legacy header enabling a toggle from search button', () => {
      expect(burgerMenu.prop('className')).toEqual('BurgerWrapper');
    });
  });

  describe('on click of burger menu', () => {
    let component;
    beforeAll(() => {
      component = shallow(<MobileNav />);
    });

    describe('on first click', () => {
      beforeAll(() => {
        component.find(BurgerWrapper).simulate('click');
      });

      it('should open the mobile nav', () => {
        expect(component.find(PanelContainer).length).toEqual(1);
      });

      it('should call trackSetOpen', () => {
        expect(MobileTracking.trackSetOpen).toHaveBeenCalledTimes(1);
        expect(MobileTracking.trackSetOpen).toHaveBeenCalledWith(true);
      });
    });

    describe('on next click', () => {
      beforeAll(() => {
        component.find(BurgerWrapper).simulate('click');
      });

      it('should close the mobile nav', () => {
        expect(component.find(PanelContainer).length).toEqual(0);
      });

      it('should call trackSetOpen', () => {
        expect(MobileTracking.trackSetOpen).toHaveBeenCalledTimes(2);
        expect(MobileTracking.trackSetOpen).toHaveBeenCalledWith(false);
      });
    });
  });

  describe('passing the correct data to MobileNav', () => {
    let component;
    beforeAll(() => {
      component = shallow(<MobileNav navItems={navItems} />);
      component.find(BurgerWrapper).simulate('click');
    });

    it('should pass the correct navItems', () => {
      expect(component.find(PanelContainer).prop('navItems')).toEqual(navItems);
    });

    describe('setOpen', () => {
      it('should pass setOpen to PanelContainer', () => {
        const context = component.find('ContextProvider');
        const { setOpen } = context.prop('value');
        expect(component.find(PanelContainer).length).toEqual(1);
        setOpen();
        expect(component.find(PanelContainer).length).toEqual(0);
      });
    });
  });
});
