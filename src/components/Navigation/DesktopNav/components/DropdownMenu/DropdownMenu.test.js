import React from 'react';
import { shallow } from 'enzyme';

import DropdownMenu from './DropdownMenu';
import Column from '../Column/Column';
import { Wrapper } from './DropdownMenu.style';

import navItems from '../../../test/navItemsMock';

describe('rendering', () => {
  it('should work with some default props', () => {
    const component = shallow(<DropdownMenu navItems={[]} open />);

    expect(component.find(Wrapper).length).toEqual(1);
  });

  it('should render the appropriate number of children', () => {
    const component = shallow(<DropdownMenu navItems={navItems[0].subItems} open />);

    expect(component.find(Column).length).toEqual(3);

    const indices = [0, 1, 2];
    indices.forEach(index => {
      expect(
        component
          .find(Column)
          .at(index)
          .prop('navItems')
      ).toEqual(navItems[0].subItems[index]);
    });

    expect.assertions(indices + 1);
  });

  describe('positioning the dropdown menu', () => {
    const mockProps = {
      navItems: navItems[0].subItems,
      open: false,
      navLeft: 0,
      navRight: 960,
    };

    it('should calculate the dropdown margins on first render', () => {
      const component = shallow(<DropdownMenu {...mockProps} />);
      expect(component.state('shouldCalculatePosition')).toEqual(true);

      const calculateMargin = jest.spyOn(component.instance(), 'calculateMargin');
      component.setProps({ open: true });

      expect(calculateMargin).toHaveBeenCalledTimes(1);
    });

    it('should reset the margin if the window is resized', () => {
      const component = shallow(<DropdownMenu {...mockProps} />);

      const resetMargin = jest.spyOn(component.instance(), 'resetMargin');
      window.addEventListener('resize', resetMargin);
      window.dispatchEvent(new Event('resize'));

      expect(resetMargin).toHaveBeenCalledTimes(1);
    });

    describe('when the margin has changed', () => {
      it('should set the updated margin as a style for the Dropdown Wrapper', () => {
        const component = shallow(<DropdownMenu open={true} {...mockProps} />);

        expect(component.state('margin')).toEqual(0);
        expect(component.state('shouldCalculatePosition')).toEqual(true);
        expect(component.find(Wrapper).prop('style')).toEqual({ marginLeft: '0px' });

        const updateMargin = component.instance().updateMargin;
        const newMargin = 200;
        updateMargin(newMargin);

        expect(component.state('margin')).toEqual(newMargin);
        expect(component.state('shouldCalculatePosition')).toEqual(false);
        expect(component.find(Wrapper).prop('style')).toEqual({ marginLeft: '200px' });
      });
    });

    describe('when the margin has not changed', () => {
      it('should not update the margin', () => {
        const component = shallow(<DropdownMenu open={true} {...mockProps} />);

        expect(component.state('margin')).toEqual(0);
        expect(component.state('shouldCalculatePosition')).toEqual(true);
        expect(component.find(Wrapper).prop('style')).toEqual({ marginLeft: '0px' });

        const updateMargin = component.instance().updateMargin;
        const mockSetState = jest.spyOn(component.instance(), 'setState');

        const newMargin = 200;
        updateMargin(newMargin);
        updateMargin(newMargin);

        expect(mockSetState).toHaveBeenCalledTimes(1);

        expect(component.state('margin')).toEqual(newMargin);
        expect(component.state('shouldCalculatePosition')).toEqual(false);
        expect(component.find(Wrapper).prop('style')).toEqual({ marginLeft: '200px' });
      });
    });

    describe('when the dropdown is re-opened but the window has not been resized', () => {
      it('should not update the margin', () => {
        const component = shallow(<DropdownMenu open={true} {...mockProps} />);
        const updateMargin = component.instance().updateMargin;
        const resetMargin = jest.spyOn(component.instance(), 'resetMargin');
        const calculateMargin = jest.spyOn(component.instance(), 'calculateMargin');

        const newMargin = 300;
        updateMargin(newMargin);

        expect(component.state('margin')).toEqual(newMargin);
        expect(component.find(Wrapper).prop('style')).toEqual({ marginLeft: '300px' });
        expect(component.state('shouldCalculatePosition')).toEqual(false);

        component.setProps({ open: false });
        component.setProps({ open: true });

        expect(resetMargin).toHaveBeenCalledTimes(0);
        expect(calculateMargin).toHaveBeenCalledTimes(0);
      });
    });
  });
});
