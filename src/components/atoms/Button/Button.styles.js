import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  svg {
    fill: ${({ theme }) => theme.colors.white};
    height: 50%;
    width: 50%;
  }
`;
