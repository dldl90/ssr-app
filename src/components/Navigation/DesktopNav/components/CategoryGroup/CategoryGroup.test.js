import React from 'react';
import { shallow } from 'enzyme';

import CategoryGroup from './CategoryGroup';
import desktopNavItemsMock from '../../../test/desktopNavItemsMock';
import DesktopTracking from '../../tracking/DesktopTracking';
import { Wrapper, Link, Heading } from './CategoryGroup.style';

jest.mock('../../tracking/DesktopTracking');

const mockNavItems = desktopNavItemsMock[0].subItems[0][0].subItems;
const mockNavItem = desktopNavItemsMock[0].subItems[0][0];

describe('rendering', () => {
  it('should work with no props', () => {
    const component = shallow(<CategoryGroup />);

    expect(component.find(Wrapper).length).toEqual(1);
  });

  it('should render a Header component', () => {
    const component = shallow(
      <CategoryGroup
        heading={mockNavItem.title}
        url={mockNavItem.url}
        childLinks={mockNavItem.subItems}
      />
    );

    expect(component.find(Heading).length).toEqual(1);
    expect(component.find(Heading).prop('href')).toEqual(mockNavItem.url);

    expect(component.find(Heading).prop('children')).toEqual(mockNavItem.title);
  });

  it('should render the appropriate number of Link components', () => {
    const component = shallow(<CategoryGroup childLinks={mockNavItems} />);

    const indices = [0, 1, 2];

    expect(component.find(Link).length).toEqual(indices.length);

    indices.forEach(index => {
      expect(
        component
          .find(Link)
          .at(index)
          .prop('href')
      ).toEqual(mockNavItems[index].url);

      expect(
        component
          .find(Link)
          .at(index)
          .prop('children')
      ).toEqual(mockNavItems[index].title);
    });

    expect.assertions(indices.length * 2 + 1);
  });

  describe('tracking', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should track clicks on columnItem links with the correct data onMouseDown', () => {
      const mockPrevGtmData = {
        level: 2,
        url: '/gifts',
        menuPosition: 1,
        menuName: 'gifts',
        columnPosition: 1,
        columnGroupName: 'gifts by recipient',
        columnGroupPosition: 1,
      };

      const expectedData = {
        level: 3,
        menuPosition: 1,
        menuName: 'gifts',
        columnPosition: 1,
        columnGroupName: 'gifts by recipient',
        columnGroupPosition: 1,
        columnItemPosition: 1,
        columnItemName: 'gifts for her',
        url: '/gifts/shop-by-recipient/for-her',
      };

      const component = shallow(
        <CategoryGroup
          heading={mockNavItem.title}
          url={mockNavItem.url}
          childLinks={mockNavItems}
          prevGtmData={mockPrevGtmData}
        />
      );

      component
        .find(Link)
        .at(0)
        .simulate('mousedown');

      expect(DesktopTracking.trackClick).toHaveBeenCalledTimes(1);
      expect(DesktopTracking.trackClick).toHaveBeenCalledWith(expectedData);
    });

    it('should track clicks on subcategory headers with column gtm data when the header has a url', () => {
      const mockNavItemWithUrl = desktopNavItemsMock[0].subItems[0][1];

      const mockPrevGtmData = {
        level: 2,
        url: '/gifts/personalised-gifts',
        menuPosition: 1,
        menuName: 'gifts',
        columnPosition: 1,
        columnGroupName: 'gifts by interest',
        columnGroupPosition: 2,
      };

      const component = shallow(
        <CategoryGroup
          heading={mockNavItemWithUrl.title}
          url={mockNavItemWithUrl.url}
          childLinks={mockNavItemWithUrl.subItems}
          prevGtmData={mockPrevGtmData}
        />
      );

      component.find(Heading).simulate('mousedown');

      expect(DesktopTracking.trackClick).toHaveBeenCalledTimes(1);
      expect(DesktopTracking.trackClick).toHaveBeenCalledWith(mockPrevGtmData);
    });

    it('should not track clicks when the column header has no url', () => {
      const component = shallow(
        <CategoryGroup
          heading={mockNavItem.title}
          url={mockNavItem.url}
          childLinks={mockNavItems}
        />
      );
      const headerWithUrl = component.find(Heading);

      headerWithUrl.simulate('mousedown');

      expect(DesktopTracking.trackClick).toHaveBeenCalledTimes(0);
    });
  });
});
