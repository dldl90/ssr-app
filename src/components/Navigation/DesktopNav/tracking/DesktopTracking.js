import pushToDataLayer from '../../../../utils/tracking/GTM';
import { filter, pipe } from 'ramda';

export default class DesktopTracking {
  static trackHover({ position, title }) {
    pushToDataLayer({
      event: 'nav_events',
      eventCategory: 'Navigation - MDD',
      eventAction: 'Hover',
      eventLabel: `${position} | ${title}`,
    });
  }

  static trackClick(trackingData) {
    const {
      level,
      menuPosition,
      menuName,
      columnPosition,
      columnGroupName,
      columnGroupPosition,
      columnItemPosition,
      columnItemName,
      url,
    } = trackingData;

    const eventLabel = pipe(filter(el => el !== undefined))([
      level,
      menuPosition,
      menuName,
      columnPosition,
      columnGroupPosition,
      columnGroupName,
      columnItemPosition,
      columnItemName,
    ]).join(' | ');

    pushToDataLayer({
      event: 'nav_clicks',
      eventCategory: 'Navigation - MDD',
      eventAction: 'Click',
      eventLabel: eventLabel,
      destinationUrl: url,
    });
  }
}
