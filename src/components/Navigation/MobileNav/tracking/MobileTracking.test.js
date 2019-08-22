import MobileTracking from './MobileTracking';
import pushToDataLayer from '../../../../utils/tracking/GTM';

jest.mock('../../../../utils/tracking/GTM');

describe('MobileTracking', () => {
  afterEach(() => {
    pushToDataLayer.mockClear();
  });

  it('should track when the mobile nav is opened', () => {
    const expectedData = {
      event: 'nav_events',
      eventAction: 'Open',
      eventCategory: 'Navigation - mobile menu',
      eventLabel: undefined,
    };

    MobileTracking.trackSetOpen(true);

    expect(pushToDataLayer).toHaveBeenCalledWith(expectedData);
    expect(pushToDataLayer).toHaveBeenCalledTimes(1);
  });

  it('should track when the mobile nav is closed', () => {
    const expectedData = {
      event: 'nav_events',
      eventAction: 'Close',
      eventCategory: 'Navigation - mobile menu',
      eventLabel: undefined,
    };

    MobileTracking.trackSetOpen(false);

    expect(pushToDataLayer).toBeCalledWith(expectedData);
    expect(pushToDataLayer).toBeCalledTimes(1);
  });

  it('should track clicks on top-level menu options', () => {
    const expectedData = {
      event: 'nav_events',
      eventAction: 'Select',
      eventCategory: 'Navigation - mobile menu',
      eventLabel: '1 | 1 | link 1',
    };

    const currentPath = [[0]];
    const index = 0;
    const title = 'link 1';

    MobileTracking.trackGoForward(currentPath, index, title);
    expect(pushToDataLayer).toBeCalledWith(expectedData);
    expect(pushToDataLayer).toBeCalledTimes(1);
  });

  it('should track clicks on the back button', () => {
    const expectedData = {
      event: 'nav_events',
      eventAction: 'Back',
      eventCategory: 'Navigation - mobile menu',
      eventLabel: 'Back to level 1',
    };

    const currentPath = [[0], [0, 'subItems']];

    MobileTracking.trackGoBack(currentPath);
    expect(pushToDataLayer).toBeCalledWith(expectedData);
    expect(pushToDataLayer).toBeCalledTimes(1);
  });

  it('should track clicks on links', () => {
    const expectedData = {
      event: 'nav_clicks',
      eventAction: 'Click',
      destinationUrl: 'link 1 url',
      eventCategory: 'Navigation - mobile menu',
      eventLabel: '2 | 1 | link 1',
    };

    const currentPath = [[0], [0, 'subItems']];
    const index = 0;
    const title = 'link 1';
    const url = 'link 1 url';
    currentPath, index, title, url;

    MobileTracking.trackLinkClick(currentPath, index, title, url);
    expect(pushToDataLayer).toBeCalledWith(expectedData);
    expect(pushToDataLayer).toBeCalledTimes(1);
  });
});
