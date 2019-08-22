import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  transition: transform 0.5s;
  ${({ translateX }) => `transform: translateX(-${translateX}00%);`}
`;
