import { css } from 'styled-components';
import breakpoints from '@noths/styles-config/src/breakpoints';

export const sizes = {
  desktop: breakpoints.desktop,
  // temp - set to match current mononoth breakpoint for parity
  custom: 910,
  tablet: breakpoints.tablet,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const size = sizes[label];
  accumulator[label] = (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
