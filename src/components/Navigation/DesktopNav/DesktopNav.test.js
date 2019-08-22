import React from 'react';
import { shallow } from 'enzyme';

import DesktopNav from './DesktopNav';
import { Wrapper } from './DesktopNav.style';
import Department from './components/Department/Department';

import navItems from '../test/navItemsMock';

describe('rendering', () => {
  it('should work with no props', () => {
    const component = shallow(<DesktopNav />);

    expect(component.find(Wrapper).length).toEqual(1);
  });

  it('should render MenuItems', () => {
    const component = shallow(<DesktopNav navItems={navItems} />);

    expect(component.find(Department).length).toEqual(2);
  });
});

describe('container positioning', () => {
  it('should have sensible context values', () => {
    const component = shallow(<DesktopNav navItems={navItems} />);
    const context = component.find('ContextProvider');

    expect(context.prop('value')).toEqual({ navLeft: 0, navRight: 0 });
  });
});
