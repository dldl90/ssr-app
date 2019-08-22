import pushToDataLayer from '../../../../utils/tracking/GTM';

export default class MobileTracking {
  static trackSetOpen(open) {
    pushToDataLayer({
      event: 'nav_events',
      eventCategory: 'Navigation - mobile menu',
      eventAction: open ? 'Open' : 'Close',
      eventLabel: undefined,
    });
  }

  static trackGoForward(currentPath, index, categoryName) {
    const categoryDepth = currentPath.length;
    const categoryPosition = index + 1;

    pushToDataLayer({
      event: 'nav_events',
      eventCategory: 'Navigation - mobile menu',
      eventAction: 'Select',
      eventLabel: `${categoryDepth} | ${categoryPosition} | ${categoryName}`,
    });
  }

  static trackGoBack(currentPath) {
    const prevCategoryDepth = currentPath.length - 1;

    pushToDataLayer({
      event: 'nav_events',
      eventCategory: 'Navigation - mobile menu',
      eventAction: 'Back',
      eventLabel: `Back to level ${prevCategoryDepth}`,
    });
  }

  static trackLinkClick(currentPath, index, categoryName, url) {
    const categoryDepth = currentPath.length;
    const categoryPosition = index + 1;

    pushToDataLayer({
      event: 'nav_clicks',
      eventCategory: 'Navigation - mobile menu',
      eventAction: 'Click',
      eventLabel: `${categoryDepth} | ${categoryPosition} | ${categoryName}`,
      destinationUrl: url,
    });
  }
}
