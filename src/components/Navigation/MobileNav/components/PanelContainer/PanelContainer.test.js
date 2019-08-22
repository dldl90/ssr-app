import React from 'react';
import { shallow } from 'enzyme';
import PanelContainer from './PanelContainer';
import { Wrapper, Content } from './PanelContainer.style';
import MobileTracking from '../../tracking/MobileTracking';

import panelsNavItems from '../../../test/panelNavItemsMock';
import { Panel } from '../index';

jest.mock('../../tracking/MobileTracking');

const expectedPanelOneItems = panelsNavItems[0];
const expectedPanelTwoItems = expectedPanelOneItems[0].subItems;
const expectedPanelThreeItems = expectedPanelTwoItems[0].subItems;

describe('Panel Container', () => {
  describe('when rendering', () => {
    it('should work without props', () => {
      const component = shallow(<PanelContainer />);
      expect(component.find(Wrapper).length).toEqual(1);
    });

    it('should render the first panel when navItems passed as props', () => {
      const component = shallow(<PanelContainer navItems={panelsNavItems} />);
      expect(component.find(Panel).length).toEqual(1);
    });

    describe('passing the correct data', () => {
      describe('when rendering the first panel', () => {
        let component;
        beforeAll(() => {
          component = shallow(<PanelContainer navItems={panelsNavItems} />);
        });

        it('should only render one panel', () => {
          expect(component.find(Panel).length).toEqual(1);
        });

        it('should pass the correct navItems to Panel', () => {
          expect(component.find(Panel).prop('navItems')).toEqual(expectedPanelOneItems);
        });

        it('should set panelIndex to the correct value', () => {
          expect(component.find(Panel).prop('panelIndex')).toEqual(0);
        });
      });

      describe('when clicking on a first level link', () => {
        let component;
        beforeAll(() => {
          jest.resetAllMocks();
          component = shallow(<PanelContainer navItems={panelsNavItems} />);
          const clickedLinkIndex = 0;
          const goForward = component
            .find(Panel)
            .at(0)
            .prop('goForward');
          goForward(clickedLinkIndex);
        });

        it('should render a second panel', () => {
          expect(component.find(Panel).length).toEqual(2);
        });
        describe('passing data to panel one', () => {
          let panelOne;
          beforeAll(() => {
            panelOne = component.find(Panel).at(0);
          });
          it('should pass the correct navItems to the first panel', () => {
            expect(panelOne.prop('navItems')).toEqual(expectedPanelOneItems);
          });
          it('should set panelIndex to the correct value', () => {
            expect(panelOne.prop('panelIndex')).toEqual(0);
          });
          it('should call trackGoForward with the correct data', () => {
            const currentPath = [[0]];
            const linkIndex = 0;
            const linkName = undefined;
            expect(MobileTracking.trackGoForward).toHaveBeenCalledTimes(1);
            expect(MobileTracking.trackGoForward).toHaveBeenCalledWith(
              currentPath,
              linkIndex,
              linkName
            );
          });
        });

        describe('passing data to panel two', () => {
          let panelTwo;
          beforeAll(() => {
            panelTwo = component.find(Panel).at(1);
          });
          it('should pass the correct navItems', () => {
            expect(panelTwo.prop('navItems')).toEqual(expectedPanelTwoItems);
          });
          it('should set panelIndex to the correct value', () => {
            expect(panelTwo.prop('panelIndex')).toEqual(1);
          });
        });
      });

      describe('when clicking on a second level link', () => {
        const clickedLinkIndex = 0;

        describe('when isAnimating is false', () => {
          let component;
          beforeAll(() => {
            jest.resetAllMocks();
            component = shallow(<PanelContainer navItems={panelsNavItems} />);
            const firstGoForward = component
              .find(Panel)
              .at(0)
              .prop('goForward');
            firstGoForward(clickedLinkIndex);

            // Ensure isAnimating is set to false
            component.find(Content).prop('onTransitionEnd')();

            const secondGoForward = component
              .find(Panel)
              .at(1)
              .prop('goForward');

            secondGoForward(clickedLinkIndex);
          });

          it('should render a third Panel', () => {
            expect(component.find(Panel).length).toEqual(3);
          });

          it('should call trackGoForward with the correct data', () => {
            const firstPath = [[0]];
            const secondPath = [[0], [0, 'subItems']];
            const linkIndex = 0;
            const linkName = undefined;
            expect(MobileTracking.trackGoForward).toHaveBeenCalledTimes(2);
            expect(MobileTracking.trackGoForward).toHaveBeenNthCalledWith(
              1,
              firstPath,
              linkIndex,
              linkName
            );
            expect(MobileTracking.trackGoForward).toHaveBeenNthCalledWith(
              2,
              secondPath,
              linkIndex,
              linkName
            );
          });

          describe('passing data to panel one', () => {
            let panelOne;

            beforeAll(() => {
              panelOne = component.find(Panel).at(0);
            });

            it('should pass the correct navItems', () => {
              expect(panelOne.prop('navItems')).toEqual(expectedPanelOneItems);
            });

            it('should set panelIndex to the correct value', () => {
              expect(panelOne.prop('panelIndex')).toEqual(0);
            });
          });

          describe('passing data to panel two', () => {
            let panelTwo;

            beforeAll(() => {
              panelTwo = component.find(Panel).at(1);
            });

            it('should pass the correct navItems', () => {
              expect(panelTwo.prop('navItems')).toEqual(expectedPanelTwoItems);
            });

            it('should set panelIndex to the correct value', () => {
              expect(panelTwo.prop('panelIndex')).toEqual(1);
            });
          });

          describe('passing data to panel three', () => {
            let panelThree;

            beforeAll(() => {
              panelThree = component.find(Panel).at(2);
            });

            it('should pass the correct navItems', () => {
              expect(panelThree.prop('navItems')).toEqual(expectedPanelThreeItems);
            });

            it('should set panelIndex to the correct value', () => {
              expect(panelThree.prop('panelIndex')).toEqual(2);
            });
          });
        });

        describe('when isAnimating is true', () => {
          let component;

          beforeAll(() => {
            component = shallow(<PanelContainer navItems={panelsNavItems} />);

            const goForward = component
              .find(Panel)
              .at(0)
              .prop('goForward');
            goForward(clickedLinkIndex);
            goForward(clickedLinkIndex);
          });

          it('should not render a second panel', () => {
            expect(component.find(Panel).length).toEqual(2);
          });
        });
      });

      describe('when clicking go back', () => {
        let component;

        beforeAll(() => {
          jest.resetAllMocks();
          const clickedLinkIndex = 0;
          component = shallow(<PanelContainer navItems={panelsNavItems} />);

          const goForward = component
            .find(Panel)
            .at(0)
            .prop('goForward');
          const reenableClicks = component.find(Content).prop('onTransitionEnd');
          goForward(clickedLinkIndex);
          reenableClicks();
          const goBack = component
            .find(Panel)
            .at(1)
            .prop('goBack');
          goBack();
        });

        it('should render the previous panel', () => {
          expect(component.find(Panel).length).toEqual(2);
        });

        describe('passing data to panel one', () => {
          let panelOne;

          beforeAll(() => {
            panelOne = component.find(Panel).at(0);
          });

          it('should pass the correct navItems', () => {
            expect(panelOne.prop('navItems')).toEqual(expectedPanelOneItems);
          });

          it('should set panelIndex to the correct value', () => {
            expect(panelOne.prop('panelIndex')).toEqual(0);
          });

          it('should call trackGoBack with the correct data', () => {
            const currentPath = [[0], [0, 'subItems']];
            expect(MobileTracking.trackGoBack).toHaveBeenCalledTimes(1);
            expect(MobileTracking.trackGoBack).toHaveBeenCalledWith(currentPath);
          });
        });

        describe('passing data to panel two', () => {
          let panelTwo;

          beforeAll(() => {
            panelTwo = component.find(Panel).at(1);
          });

          it('should pass the correct navItems', () => {
            expect(panelTwo.prop('navItems')).toEqual(expectedPanelTwoItems);
          });

          it('should set panelIndex to the correct value', () => {
            expect(panelTwo.prop('panelIndex')).toEqual(1);
          });
        });
      });
    });
  });
});
