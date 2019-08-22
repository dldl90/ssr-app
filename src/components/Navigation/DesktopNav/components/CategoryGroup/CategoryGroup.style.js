
import styled from 'styled-components';

import color from '../../../../../styles/color';

export const Wrapper = styled.div`
  padding: 0 10px 20px 16px;
`;

export const Heading = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  color: ${color.tertiary};
  text-decoration: none;
  display: block;
  text-transform: lowercase;

 ${({ href }) => href && `
    :hover {
      color: ${color.highlight};
    }
  `}
`;

export const Link = styled.a`
  text-decoration: none;
  display: block;
  font-size: 13px;
  padding: 3px 0;
  margin: 0;
  cursor: pointer;
  color: ${color.secondary};
  font-weight: 400;

  :hover {
    color: ${color.highlight};
  }
`;
