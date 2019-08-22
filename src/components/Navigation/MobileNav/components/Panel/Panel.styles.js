import styled from 'styled-components';
import colors from '@noths/styles-config/src/colors';

export const Container = styled.nav`
  box-sizing: content-box;
  width: calc(100% - 20px);
  min-width: calc(100% - 20px);
  margin: 0 10px;
  background-color: white;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: NOTHS2;
  font-size: 16px;
  text-transform: lowercase;
`;

export const Link = styled.a`
  color: ${({ titleColor }) => (titleColor ? titleColor : colors.emperor)};
  text-decoration: none;
  border-width: 0px 1px 1px;
  border-color: ${colors.silver};
  border-style: solid;
  display: flex;
  justify-content: space-between;
  padding: 18px;
  cursor: pointer;
`;

export const NavButton = styled(Link)`
  background: ${colors.veniceBlue};
  color: #fff;
  border-top-width: 1px;
  border-color: ${colors.veniceBlue};
  justify-content: center;
  align-items: center;
  & svg {
    margin: 0 8px;
  }
`;
