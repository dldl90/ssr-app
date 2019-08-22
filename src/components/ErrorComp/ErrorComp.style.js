import styled from 'styled-components';

import font from '@noths/styles-config/src/fonts';
import color from '../../styles/color';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 37px;

  > p {
    font-family: ${font.family.v2};
    color: ${color.tertiary};
    font-size: 12px;
    margin: 0;
  }

  > p a {
    -webkit-appearance: none;
    color: ${color.highlight};
    display: inline-block;
    text-align: center;
    background-color: none;
    margin: 0em;
    font-family: ${font.family.v2};
    font-size: 12px;
    padding: 2px 4px;
    border-width: 0;
  }
`;
