import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '@noths/styles-config/src/colors';

const directions = { up: 90, right: 180, down: 270, left: 0 };

const StyledChevron = styled.svg`
  transform: ${({ direction }) => `rotate(${directions[direction]}deg)`};
`;

const Chevron = ({ direction, color }) => (
  <StyledChevron
    direction={direction}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1.874 3.125"
    height="13px"
    width="13px"
  >
    <path fill={color} d="M1.562 3.125l.312-.313-1.25-1.25 1.25-1.25L1.562 0 0 1.562z" />
  </StyledChevron>
);

Chevron.defaultProps = {
  direction: 'left',
  color: colors.timberwolf,
};

Chevron.propTypes = {
  direction: PropTypes.string,
  color: PropTypes.string,
};

export default memo(Chevron);
