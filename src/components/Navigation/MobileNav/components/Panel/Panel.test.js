import React from 'react';
import { shallow } from 'enzyme';

import Panel from './Panel';
import { Container, NavButton, Link } from './Panel.styles';
import MobileNavContext from '../../MobileNavContext';
import { Chevron } from '../Icons';

const getContentWrapper = component => ({ setOpen }) => {
  const content = component.find(MobileNavContext.Consumer).renderProp('children')({
    setOpen,
  });

  return content;
};

describe('rendering', () => {
  it('should should work with no props', () => {
    const component = shallow(<Panel />);

    expect(component.find(Container)).toHaveLength(1);
  });
});

describe('actions', () => {
  let setOpen;
  let goForward;
  let goBack;

  beforeEach(() => {
    setOpen = jest.fn();
    goForward = jest.fn();
    goBack = jest.fn();
  });

  describe('closing nav', () => {
    it('should close nav when it is the first panel and button clicked', () => {
      const component = shallow(<Panel panelIndex={0} goForward={goForward} goBack={goBack} />);

      const content = getContentWrapper(component)({ setOpen });

      content
        .find(NavButton)
        .at(0)
        .simulate('click');

      expect(setOpen).toHaveBeenCalledTimes(1);
      expect(setOpen).toHaveBeenCalledWith(false);
    });
  });

  describe('going back one panel', () => {
    it('should go back when it is NOT the first panel and button clicked', () => {
      const component = shallow(<Panel panelIndex={1} goForward={goForward} goBack={goBack} />);

      const content = getContentWrapper(component)({ setOpen });

      content
        .find(NavButton)
        .at(0)
        .simulate('click');

      expect(goBack).toHaveBeenCalledTimes(1);
    });
  });

  describe('going forward one panel', () => {
    it('should go forward if there are any more sub panels', () => {
      const navItems = [
        { id: '1', title: 'link 1', subItems: [{}, {}] },
        { id: '1', title: 'link 2', subItems: [{}, {}] },
      ];

      const component = shallow(
        <Panel navItems={navItems} goForward={goForward} goBack={goBack} />
      );

      const content = getContentWrapper(component)({ setOpen });

      content
        .find(Link)
        .at(0)
        .simulate('click', { preventDefault: () => {} });

      content
        .find(Link)
        .at(1)
        .simulate('click', { preventDefault: () => {} });

      expect(goForward).toHaveBeenCalledTimes(2);
      expect(goForward).toHaveBeenNthCalledWith(1, 0, 'link 1');
      expect(goForward).toHaveBeenNthCalledWith(2, 1, 'link 2');
    });

    describe('when there are no more sub panels', () => {
      let content;
      let onLinkClick;
      const navItems = [{ id: '1', title: 'link 1', url: 'link 1 url' }];

      beforeAll(() => {
        onLinkClick = jest.fn();
        const component = shallow(
          <Panel
            navItems={navItems}
            onLinkClick={onLinkClick}
            goForward={goForward}
            goBack={goBack}
          />
        );

        content = getContentWrapper(component)({ setOpen });
      });

      it('should NOT go forward if there are not anymore sub panels', () => {
        content
          .find(Link)
          .at(0)
          .simulate('click');
        expect(goForward).toHaveBeenCalledTimes(0);
      });

      it('should call onLinkClick with the correct data', () => {
        expect(onLinkClick).toHaveBeenCalledTimes(1);
        expect(onLinkClick).toHaveBeenCalledWith(0, 'link 1', 'link 1 url');
      });
    });
  });

  describe('including a chevron icon', () => {
    it('should include a chevron icon if a nav item has subItems', () => {
      const navItems = [
        {
          id: '1',
          title: 'link 1',
          url: 'link 1 url',
          subItems: [{ id: '2', title: 'link 2', url: 'link 2 url' }],
        },
      ];

      const component = shallow(
        <Panel navItems={navItems} goForward={goForward} goBack={goBack} />
      );

      const content = getContentWrapper(component)({ setOpen });
      expect(content.find(Chevron).length).toEqual(2);
    });

    it('should not include a chevron icon if a nav item has no subItems', () => {
      const navItems = [
        {
          id: '1',
          title: 'link 1',
          url: 'link 1 url',
          subItems: [],
        },
      ];

      const component = shallow(
        <Panel navItems={navItems} goForward={goForward} goBack={goBack} />
      );

      const content = getContentWrapper(component)({ setOpen });
      expect(content.find(Chevron).length).toEqual(1);
    });
  });
});
