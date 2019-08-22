import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 15px 15px 0;
  border: 1px solid #ccc;
  background-color: #fff;
  position: absolute;
  top: auto;
  display: ${({ open }) => (open ? 'block' : 'none')};
  transform: translateX(-50%);
  left: 50%;
`;

export const Columns = styled.div`
  display: flex;
`;
