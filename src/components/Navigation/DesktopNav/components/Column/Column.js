import React, { memo } from 'react';
import PropTypes from 'prop-types';

import navItemType from '../../../navItemType';
import CategoryGroup from '../CategoryGroup/CategoryGroup';

import { Wrapper } from './Column.style';

const buildGtmData = (title, url, index, position, prevGtmData) => ({
  ...prevGtmData,
  level: 2,
  url,
  columnPosition: position + 1,
  columnGroupName: title,
  columnGroupPosition: index + 1,
});

const Column = ({ navItems = [], position, prevGtmData }) => {
  return (
    <Wrapper>
      {
        navItems.map((navItem, index) => {
          const { title, url, subItems } = navItem;
          const gtmData = buildGtmData(title, url, index, position, prevGtmData);
          return (
            <CategoryGroup
              key={title}
              heading={title}
              url={url}
              childLinks={subItems}
              prevGtmData={gtmData}
              position={position}
            />
          );
        })
      }
    </Wrapper>
  );
};

Column.propTypes = {
  navItems: PropTypes.arrayOf(navItemType).isRequired,
  position: PropTypes.number.isRequired,
  prevGtmData: PropTypes.shape({}),
};

export default memo(Column);
