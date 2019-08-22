import styled from 'styled-components';

export const BurgerWrapper = styled.button`
  padding: 8px;
  margin: 0;
  cursor: pointer;
  background: none;
  position: absolute;
  border: none;
  z-index: 1;
  top: -40px;

  /* THIS IS TO ACCOMODATE THE SEARCH ICON TOGGLING OPEN & CLOSE TO ADJUST POSITION OF THE NAV. DO NOT REMOVE */
  &.search--is-open {
    top: -96px;
  }
`;
