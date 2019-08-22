import styled from 'styled-components';

import { media } from '../../styles/breakpoints';

export const NavWrapper = styled.div`
  position: relative;
  max-width: 960px;
  margin: 0 auto;
`;

export const MobileContainer = styled.div`
  display: block;

  ${media.tablet`
    display: none;
  `}
`;

export const DesktopContainer = styled.div`
  display: none;

  ${media.tablet`
    display: block;
  `}
`;