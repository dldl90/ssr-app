import React from 'react';
import { shallow } from 'enzyme';

import desktopNavItemsMock from '../../../test/desktopNavItemsMock';
import Department from './Department';
import DesktopTracking from '../../tracking/DesktopTracking';
import { Wrapper, DepartmentName } from './Department.style';

jest.mock('../../tracking/DesktopTracking');

const mockNavItem = desktopNavItemsMock[0];

describe('rendering', () => {
  it('should work with no props', () => {
    const component = shallow(<Department />);

    expect(component.find(Wrapper).length).toEqual(1);
  });

  it('should work with props', () => {
    const component = shallow(<Department navItem={mockNavItem} />);
    const expectedUrl = '/gifts';
    const expectedColor = '#ffffff';

    expect(component.find(DepartmentName).length).toEqual(1);
    expect(component.find(DepartmentName).prop('href')).toEqual(expectedUrl);
    expect(component.find(DepartmentName).prop('titleColor')).toEqual(expectedColor);
  });
});

describe('onShow', () => {
  it('should set open to true', () => {
    const component = shallow(<Department navItem={mockNavItem} />);
    expect(component.find(DepartmentName).prop('open')).toEqual(false);

    const onShow = component.find(Wrapper).prop('onMouseEnter');
    onShow();

    expect(component.find(DepartmentName).prop('open')).toEqual(true);
  });
});

describe('onHide', () => {
  it('should set open to false', () => {
    const component = shallow(<Department navItem={mockNavItem} />);
    const onShow = component.find(Wrapper).prop('onMouseEnter');
    onShow();
    expect(component.find(DepartmentName).prop('open')).toEqual(true);

    const onHide = component.find(Wrapper).prop('onMouseLeave');
    onHide();
    expect(component.find(DepartmentName).prop('open')).toEqual(false);
  });
});

describe('onTouch', () => {
  it('should set open to true and call preventDefault', () => {
    const component = shallow(<Department navItem={mockNavItem} />);
    expect(component.find(DepartmentName).prop('open')).toEqual(false);

    const onTouch = component.find(DepartmentName).prop('onTouchEnd');
    const preventDefault = jest.fn();
    onTouch({
      preventDefault,
    });

    expect(component.find(DepartmentName).prop('open')).toEqual(true);
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should do nothing if it is already open', () => {
    const component = shallow(<Department navItem={mockNavItem} />);
    const onShow = component.find(Wrapper).prop('onMouseEnter');
    const preventDefault = jest.fn();
    onShow();

    expect(component.find(DepartmentName).prop('open')).toEqual(true);

    const onTouch = component.find(DepartmentName).prop('onTouchEnd');

    onTouch({
      preventDefault,
    });

    expect(component.find(DepartmentName).prop('open')).toEqual(true);
    expect(preventDefault).toHaveBeenCalledTimes(0);
  });
});

describe('tracking', () => {
  describe('hovering on a Category', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.clearAllTimers();
      jest.clearAllMocks();
    });

    it('should track hover with the correct data when Category has been open for over one second', () => {
      const component = shallow(<Department position={0} navItem={mockNavItem} />);

      const onShow = component.find(Wrapper).prop('onMouseEnter');
      onShow();

      jest.runAllTimers();

      expect(DesktopTracking.trackHover).toHaveBeenCalledTimes(1);
      expect(DesktopTracking.trackHover).toHaveBeenCalledWith({ title: 'gifts', position: 1 });
    });

    it('should not track hover if the Category closes before a second has passed', () => {
      const component = shallow(<Department position={0} navItem={mockNavItem} />);
      const onShow = component.find(Wrapper).prop('onMouseEnter');
      onShow();

      jest.advanceTimersByTime(100);

      const onHide = component.find(Wrapper).prop('onMouseLeave');
      onHide();

      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(DesktopTracking.trackHover).toHaveBeenCalledTimes(0);
    });

    it('should not track hover if department hover has already been tracked', () => {
      const component = shallow(<Department position={0} navItem={mockNavItem} />);

      const onShow = component.find(Wrapper).prop('onMouseEnter');

      onShow();
      jest.runAllTimers();

      onShow();
      jest.runAllTimers();

      expect(DesktopTracking.trackHover).toHaveBeenCalledTimes(1);
    });
  });

  describe('clicking on a Category', () => {
    it('should track the click with correct data', () => {
      const expectedGtmData = {
        level: 1,
        menuPosition: 1,
        menuName: 'gifts',
        url: '/gifts',
      };

      const component = shallow(<Department position={0} navItem={mockNavItem} />);
      component.find(DepartmentName).prop('onMouseDown')();

      expect(DesktopTracking.trackClick).toHaveBeenCalledTimes(1);
      expect(DesktopTracking.trackClick).toHaveBeenCalledWith(expectedGtmData);
    });
  });
});
