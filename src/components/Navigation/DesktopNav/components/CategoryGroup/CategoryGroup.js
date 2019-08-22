import React, { memo } from 'react';
import PropTypes from 'prop-types';

import navItemType from '../../../navItemType';
import DesktopTracking from '../../tracking/DesktopTracking';

import { Wrapper, Heading, Link } from './CategoryGroup.style';

const handleHeadingMouseDown = gtmData => {
  if (gtmData && gtmData.url) {
    DesktopTracking.trackClick(gtmData);
  }
};

const handleLinkMouseDown = (title, url, index, prevGtmData) => {
  const linkGtmData = {
    ...prevGtmData,
    level: 3,
    columnItemPosition: index + 1,
    columnItemName: title,
    url,
  };
  return DesktopTracking.trackClick(linkGtmData);
};

const CategoryGroup = ({ heading, url, childLinks = [], prevGtmData }) => {
  return (
    <Wrapper>
      <Heading href={url} as={url && 'a'} onMouseDown={() => handleHeadingMouseDown(prevGtmData)}>
        {heading}
      </Heading>

      {childLinks.map((childLink, index) => {
        const { title, url } = childLink;

        return (
          <Link
            key={title}
            href={url}
            onMouseDown={() => handleLinkMouseDown(title, url, index, prevGtmData)}
          >
            {title}
          </Link>
        );
      })}
    </Wrapper>
  );
};

CategoryGroup.propTypes = {
  heading: PropTypes.string,
  url: PropTypes.string,
  childLinks: PropTypes.arrayOf(navItemType).isRequired,
  prevGtmData: PropTypes.shape({}),
};

export default memo(CategoryGroup);
