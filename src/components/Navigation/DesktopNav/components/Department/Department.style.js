import styled from 'styled-components';

import font from '@noths/styles-config/src/fonts';

import { media } from '../../../../../styles/breakpoints';
import color from '../../../../../styles/color';

export const Wrapper = styled.li`
  z-index: 150;
  font-family: ${font.family.v2};
  position: relative;
  list-style: none;
`;

export const DepartmentName = styled.a`
  font-weight: 700;
  font-size: 11px;
  margin-top: 4px;
  border: 1px solid transparent;
  border-bottom: none;
  background-color: transparent;
  color: ${({ titleColor }) => titleColor};
  text-decoration: none;
  z-index: 150;
  text-transform: uppercase;
  padding: 9px 5px 7px;
  display: inline-block;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px
  white-space: nowrap;

  ${({ open }) => (open ? `border-color: ${color.primaryHighlight};` : '')}
  
  ${media.custom`
    font-size: 13px;
  `}
`;
