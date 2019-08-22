import DesktopTracking from './DesktopTracking';
import pushToDataLayer from '../../../../utils/tracking/GTM';

jest.mock('../../../../utils/tracking/GTM');

describe('DesktopTracking', () => {
  afterEach(() => {
    pushToDataLayer.mockClear();
  });

  it('should track when a category is hovered', () => {
    const menuItemData = {
      position: 3,
      title: 'birthday',
    };

    const expectedData = {
      event: 'nav_events',
      eventCategory: 'Navigation - MDD',
      eventAction: 'Hover',
      eventLabel: '3 | birthday',
    };

    DesktopTracking.trackHover(menuItemData);

    expect(pushToDataLayer).toHaveBeenCalledWith(expectedData);
    expect(pushToDataLayer).toHaveBeenCalledTimes(1);
  });

  it('should track a click through on a top-level category', () => {
    const menuItemData = {
      level: 1,
      url: '/birthday-gifts',
      menuPosition: 3,
      menuName: 'birthday',
    };

    const expectedData = {
      event: 'nav_clicks',
      eventCategory: 'Navigation - MDD',
      eventAction: 'Click',
      eventLabel: '1 | 3 | birthday',
      destinationUrl: '/birthday-gifts',
    };

    DesktopTracking.trackClick(menuItemData);

    expect(pushToDataLayer).toHaveBeenCalledWith(expectedData);
    expect(pushToDataLayer).toHaveBeenCalledTimes(1);
  });

  it('should track a click on a header within the dropdown', () => {
    const columnTrackingData = {
      level: 2,
      menuPosition: 5,
      menuName: 'home',
      columnPosition: 3,
      columnGroupName: 'lighting',
      columnGroupPosition: 1,
      url: '/home/lighting',
    };

    const expectedData = {
      event: 'nav_clicks',
      eventCategory: 'Navigation - MDD',
      eventAction: 'Click',
      eventLabel: '2 | 5 | home | 3 | 1 | lighting',
      destinationUrl: '/home/lighting',
    };

    DesktopTracking.trackClick(columnTrackingData);

    expect(pushToDataLayer).toHaveBeenCalledWith(expectedData);
    expect(pushToDataLayer).toHaveBeenCalledTimes(1);
  });

  it('should track a click on a link within the dropdown', () => {
    const columnItemTrackingData = {
      level: 3,
      menuPosition: 5,
      menuName: 'home',
      columnPosition: 3,
      columnGroupName: 'lighting',
      columnGroupPosition: 1,
      columnItemPosition: 4,
      columnItemName: 'lampshades',
      url: '/home/lighting/lamp-base-shades/lampshades',
    };

    const expectedData = {
      event: 'nav_clicks',
      eventCategory: 'Navigation - MDD',
      eventAction: 'Click',
      eventLabel: '3 | 5 | home | 3 | 1 | lighting | 4 | lampshades',
      destinationUrl: '/home/lighting/lamp-base-shades/lampshades',
    };

    DesktopTracking.trackClick(columnItemTrackingData);

    expect(pushToDataLayer).toHaveBeenCalledWith(expectedData);
    expect(pushToDataLayer).toHaveBeenCalledTimes(1);
  });
});
