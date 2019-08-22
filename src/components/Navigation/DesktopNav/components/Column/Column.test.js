import React from 'react';
import { shallow } from 'enzyme';

import Column from './Column';
import { Wrapper } from './Column.style';
import CategoryGroup from '../CategoryGroup/CategoryGroup';
import desktopNavItemsMock from '../../../test/desktopNavItemsMock';

const mockNavItems = desktopNavItemsMock[0].subItems[0];

describe('rendering', () => {
  it('should work with no props', () => {
    const component = shallow(<Column />);

    expect(component.find(Wrapper).length).toEqual(1);
  });

  it('should render CategoryGroup with childLinks', () => {
    const component = shallow(<Column navItems={mockNavItems} />);

    const indices = [0, 1, 2];

    expect(component.find(CategoryGroup).length).toEqual(indices.length);

    indices.forEach(index => {
      expect(
        component
          .find(CategoryGroup)
          .at(index)
          .prop('childLinks')
      ).toEqual(mockNavItems[index].subItems || []);
    });

    expect.assertions(indices.length + 1);
  });

  it('should pass the correct gtmData to CategoryGroup', () => {
    const mockPrevGtmData = {
      level: 1,
      url: '/gifts',
      menuPosition: 1,
      menuName: 'gifts',
    };

    const expectedData = {
      columnGroupName: 'gifts by interest',
      columnGroupPosition: 2,
      columnPosition: 2,
      level: 2,
      menuName: 'gifts',
      menuPosition: 1,
      url: '/gifts/personalised-gifts',
    };

    const component = shallow(
      <Column navItems={mockNavItems} prevGtmData={mockPrevGtmData} position={1} />
    );

    expect(
      component
        .find(CategoryGroup)
        .at(1)
        .prop('prevGtmData')
    ).toEqual(expectedData);
  });
});
